import { Icon } from "@iconify/react";

const BottomNav = () => {
  return (
    <ul id='bottom-nav'>
      <li>
        <a href="#">
          <Icon icon="ph:paw-print-fill" width="39" height="39" />
          입양・분양
        </a>
      </li>
      <li>
        <a href="#">
          <Icon icon="material-symbols:siren-rounded" width="39" height="39" />
          실종・제보
        </a>
      </li>
      <li>
        <a href="#">
          <Icon icon="majesticons:comment-text" width="39" height="39" />
          커뮤니티
        </a>
      </li>
      <li>
        <a href="#">
          <Icon icon="iconamoon:profile-fill" width="39" height="39" />
          MY
        </a>
      </li>
    </ul>
  );
};

export default BottomNav;