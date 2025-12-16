import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrap">
        <div className="footer-top">
          <div className="footer-text">
            <ul className="footer-nav">
              <li><a href="#">후원하기</a></li>
              <li><a href="#">공지사항</a></li>
              <li><a href="#">F&Q</a></li>
              <li><a href="#">문의하기</a></li>
              <li><a href="#">이용약관</a></li>
            </ul>
            <div className="footer-info">
              <p>대표자&nbsp; | &nbsp;김감자 &nbsp;&nbsp; 사업자번호&nbsp; | &nbsp;000-00-00000</p>
              <p>주소&nbsp; | 서울특별시 감자구 감자로 323</p>
              <p>유기견 데이터 출처&nbsp; | &nbsp;농림축산식품부</p>
            </div>
          </div>
          <ul className="footer-sns">
            <li><Icon icon="ri:instagram-fill" width="40" height="40" /></li>
            <li><Icon icon="streamline-plump:facebook-1-solid" width="35" height="35" /></li>
            <li><Icon icon="fa7-brands:kakao-talk" width="40" height="40" /></li>
          </ul>
        </div>
        <p className="copyright">© 2025 DOG323 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;