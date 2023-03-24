import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SignUp from "./pages/Certified/SignUp";
import Login from "./pages/Certified/Login";
import CompleteLogout from "./pages/Certified/CompleteLogout";
import Main from "./pages/Main/Main";
import MyPage from "./pages/MyPage/MyPage";
import WriteLetter from "./pages/WriteLetter/WriteLetter";
import ReadLetter from "./pages/ReadLetter/ReadLetter";
import LetterBox from "./pages/LetterBox/LetterBox";
import SetPwd from "./pages/Certified/SetPwd";
import Layout from "./components/Layout";
import PwdChange from "./pages/MyPage/PwdChange";
import Trash from "./pages/MyPage/TrashList";
import CompleteSignup from "./pages/Certified/CompleteSignup";
import Preview from "./pages/WriteLetter/Preview";
import { getCookie } from "./pages/Certified/Cookie";
import useStore from "./store/store";
// ! 공백
function App() {
  const displayFooter = true;
  const { isLogin, setIsLogin } = useStore((state) => state);

  const initializeUserInfo = async () => {
    const loggedInfo = getCookie("accesstoken");
    if (loggedInfo) {
      setIsLogin(true);
      // console.log("accesstoken : ", getCookie("accesstoken"));
      // console.log("refreshToken : ", localStorage.getItem("refreshToken"));
    }
  };

  useEffect(() => {
    initializeUserInfo();
  }, [isLogin]);

  /*액세스 토큰 만료시 리프레시 토큰으로 재발급
  액세스 -> 만료기간 : 60분
  리프레시 -> 하루
  */
  const currentDate = `${new Date().getFullYear()}.${(
    "00" +
    (new Date().getMonth() + 1)
  ).slice(-2)}.${("00" + new Date().getDate()).slice(-2)}`;
  // console.log(currentDate);
  // console.log(new Date().getTime());

  // ! 공백
  return (
    <BrowserRouter>
      <Header isLogin={isLogin} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/letterbox" element={<LetterBox />} />
        <Route element={<Layout displayFooter={displayFooter} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/setpwd/:page" element={<SetPwd />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/pwdchange/:page" element={<PwdChange />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/writeletter" element={<WriteLetter />} />
          <Route path="/completeLogout" element={<CompleteLogout />} />
          <Route
            path="/readletter"
            element={<ReadLetter isLogin={isLogin} />}
          />
          <Route path="/completeSignup" element={<CompleteSignup />} />
          <Route path="/writeletter/preview" element={<Preview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
// ! 공백
export default App;
