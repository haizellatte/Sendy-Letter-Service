import { useEffect } from "react";
import styled from "styled-components";
import { BREAKPOINTMOBILE } from "../../src/breakpoint";
import { Link, useNavigate } from "react-router-dom";
import postbox from "../asset/postbox.svg";
import axios from "axios";
import { getCookie, removeCookie } from "../pages/Certified/Cookie";
import useStore from "../store/store";
import Refresh from "../util/Refresh";

function Header() {
  const navigate = useNavigate();
  const { isLogin, setIsLogin } = useStore();

  //로그아웃 제출 버튼
  const onLogout = async () => {
    await axios({
      method: "post",
      url: `/api/sendy/auth/logout`,
      headers: {
        "ngrok-skip-browser-warning": "12",
        Authorization: getCookie("accesstoken", {
          path: "/",
          secure: true,
          sameSite: "Strict",
          HttpOnly: " HttpOnly ",
        }),
        Refresh: localStorage.getItem("refreshToken"),
      },
    })
      .then(() => {
        //리프레시 토큰 삭제
        localStorage.clear();
        //액세스 토큰 삭제
        removeCookie("accesstoken", {
          path: "/",
        });
        // 멤버Id 세션 삭제
        sessionStorage.clear();
        navigate("/completeLogout");
        window.location.reload();
      })
      .catch((err) => {
        if (err.response.status === 401) {
          Refresh().then(() => onLogout());
        }
      });
  };

  return (
    <>
      <HeaderComponent>
        <HeaderContainer>
          <Link to="/">
            <h1 className="logo">
              Sendy
              <img
                className="logo-img"
                src={require("../asset/작은편지.png")}
              />
            </h1>
          </Link>
          {isLogin ? (
            <div id="nav-container">
              <li>
                <Link to="/writeletter">Write</Link>
              </li>
              <li>
                <Link to="/letterbox">
                  <img className="postImg" src={postbox} />
                </Link>
              </li>
              <li>
                <Link to="/mypage">mypage</Link>
              </li>
              <li>
                <a onClick={onLogout}>Logout</a>
              </li>
            </div>
          ) : (
            <div id="nav-container">
              <li>
                <Link to="/login">Log in</Link>
              </li>
              <li>
                <Link to="/signup">Sign up</Link>
              </li>
            </div>
          )}
        </HeaderContainer>
      </HeaderComponent>
    </>
  );
}

export default Header;

const HeaderComponent = styled.header`
  align-items: center;
  background: #fcfbf4;
  border-bottom: 1px solid #312f2b;
  display: flex;
  width: 100%;
  height: clamp(58px, 3vw, 65px);
  position: sticky;
  z-index: 90;
`;

const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0px 50px;
  width: 100vw;

  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    margin: 0px 25px;
  }

  .logo {
    padding: 0px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Sriracha";
    padding-bottom: 4px;
    font-size: clamp(2.6rem, 3vw, 2.8rem);
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      font-size: 24px;
    }
  }

  .logo-img {
    display: inline-block;
    width: clamp(20px, 2vw, 25px);
    height: clamp(14px, 2vw, 18px);
    margin-left: 3px;
  }

  #nav-container {
    display: flex;
    li {
      padding: 0px 20px;
      @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
        padding: 0px 7px;
      }
    }
    .postImg {
      width: 2.8rem;
      padding-top: 2px;
      @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
        padding-top: 12px;
        width: 1.8rem;
      }
    }
  }
  a {
    line-height: 36px;
    color: #000000;
    font-family: "Inria Sans", sans-serif;
    cursor: pointer;
    font-size: clamp(1.6rem, 3vw, 1.6rem);
    @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
      font-size: 15px;
    }
  }
`;
