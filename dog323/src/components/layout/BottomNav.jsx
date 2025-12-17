import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

const BottomNav = () => {
  return (
    <ul id="bottom-nav">
      <li>
        <NavLink
          to="/withme"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <Icon icon="ph:paw-print-fill" width="39" height="39" />
          <span>입양・분양</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/findme"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <Icon icon="material-symbols:siren-rounded" width="39" height="39" />
          <span>실종・제보</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/community"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <Icon icon="majesticons:comment-text" width="39" height="39" />
          <span>커뮤니티</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/mypage"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <Icon icon="iconamoon:profile-fill" width="39" height="39" />
          <span>MY</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default BottomNav;
