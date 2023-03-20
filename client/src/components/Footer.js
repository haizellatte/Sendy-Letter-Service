import React from "react";
import styled from "styled-components";
import BREAKPOINTMOBILE from "../breakpoint";
import logo from "../asset/작은편지.png";
import { Link } from "react-router-dom";

const FooterComponent = styled.footer`
  height: max-content;
  background: #ffe49d;
  border-top: 1px solid #312f2b;
  color: #000;
  padding: 1.8rem 6rem 3rem;
  margin: 0;
  display: flex;
  position: relative;
  bottom: 0;
  @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
    padding: 2rem 2rem 2rem;
  }
  
  .menuContainer {
    .logo {
      display: flex;
      font-family: "Sriracha";
      font-size: 2.4rem;
      margin-bottom: 12px;
      @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
        font-size: 2rem;
      }
    }
    .logo-img {
      display: inline-block;
      width: 25px;
      height: 20px;
      margin: 12px 0 0 6px;
    }
    .imfomation {
      font-family: "Pretendard-Light";
      display: flex;
      flex-direction: column;
      font-size: 0.9rem;
      margin-top: 20px;
      li {
        padding: 5px 0;
      }
      @media screen and (max-width: ${BREAKPOINTMOBILE}px) {
        margin-top: 10px;
        font-size: 0.7rem;
      }
    }
  }
`;

const Footer = () => {
  return (
    <>
      <FooterComponent>
        <div className="menuContainer">
          <Link to='/'>
          <div className="logo">
            Sendy
            <img className="logo-img" src={logo} />
          </div>
          </Link>
          <div className="imfomation">
            <ul>
              <li>© 2023 Witch`s delivery service All rights reserved.</li>
              <li>이진주 최지윤 김유림 심효은 윤선진 이시온</li>
              <li>문의 abcd19234@gmail.com</li>
            </ul>
          </div>
        </div>
      </FooterComponent>
    </>
  );
};

export default Footer;
