import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <div id="header-desktop">
      <div className="header-wrap">
        <img src={Logo} alt="로고" />

        <ul className="gnb">
          <li>
            <NavLink
              to="/withme"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              입양・분양
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/findme"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              실종・제보
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/community"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              커뮤니티
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/mbti"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              멍BTI
            </NavLink>
          </li>
        </ul>

        <div className="header-btn login">
          <Icon icon="uis:lock" width="21" height="21" />
          <p>로그인</p>
        </div>

        <div className="header-btn mypage">
          <Icon icon="iconamoon:profile-fill" width="21" height="21" />
          <p>MY</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
