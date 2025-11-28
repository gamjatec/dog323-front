import Logo from '../../assets/images/logo.svg';
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <div id='header-desktop'>
      <div className='header-wrap'>
        <img src={Logo} alt="로고" />
        <ul className='gnb'>
          <li><a href="#">입양・분양</a></li>
          <li><a href="#">실종・제보</a></li>
          <li><a href="#">커뮤니티</a></li>
          <li><a href="#">멍BTI</a></li>
        </ul>
        <div className='header-btn login'>
          <Icon icon="uis:lock" width="21" height="21" />
          <p>로그인</p>
        </div>
        <div className='header-btn mypage'>
          <Icon icon="iconamoon:profile-fill" width="21" height="21" />
          <p>MY</p>
        </div>
      </div>
    </div>
  );
};

export default Header;