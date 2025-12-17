import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import { Icon } from "@iconify/react";

const Header = () => {
  const navigate = useNavigate();

  const navItems = [
    { name: "입양・분양", path: "/withme" },
    { name: "실종・제보", path: "/findme" },
    { name: "커뮤니티", path: "/community" },
    { name: "멍BTI", path: "/mbti" },
  ];

  return (
    <div id="header-desktop">
      <div className="header-wrap">
        <img src={Logo} alt="로고" onClick={() => navigate("/")} />

        <ul className="gnb">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
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
