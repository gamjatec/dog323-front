import HomeSlider from "./HomeSlider";
import { Icon } from "@iconify/react";

const HomePage = () => {
  return (
    <div id="homepage">
      <div className="hero-section">
        <div className="hero-top">
          <div className="hero-left">
            <HomeSlider />
          </div>
          <div className="hero-right">
            <div className="copy">
              <h1>당신의 선택이</h1>
              <h1><span>한 생명</span>을 구합니다</h1>
            </div>
            <h4>강아지들이 당신의 따뜻한 손길을 기다리고 있어요</h4>
            <div className="btn-wrap">
              <button className="find-me">실종견 제보하기</button>
              <button className="with-me">입양하러 가기</button>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="stats-left">
            <p>10월 30일 기준</p>
            <div className="stats-title">
              <Icon icon="f7:chart-bar-alt-fill" width="21" height="21" />
              <p>유기견 현황</p>
            </div>
          </div>
          <ul className="stats-right">
            <li>
              <p>전체 유기견 수</p>
              <p>32,323 마리</p>
            </li>
            <li>
              <p>입양 완료</p>
              <p>323 마리</p>
            </li>
            <li>
              <p>입양률</p>
              <p>3.2%</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;