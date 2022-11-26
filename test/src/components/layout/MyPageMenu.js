import { NavLink } from "react-router-dom";
import { Profile } from "../pages/MyPage";
import "../style/MyPage.css"
import Nav from "./Nav"
export const MyPageMenu = ({user, userName}) => (
  <>
    <div className="mypage-menu">
      <Profile user={user}></Profile>
      <br></br>
      <li><NavLink to="/mypage">판매상품</NavLink></li>
      <li><NavLink to="/mypage/likelist">좋아요 목록</NavLink></li>
      <li><NavLink to="/mypage/setting">설정</NavLink></li>
    </div>  
  </>
);