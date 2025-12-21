import { Icon } from "@iconify/react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const WithMeSection = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const pause = () => {
    sliderRef.current.style.animationPlayState = "paused";
  };

  const play = () => {
    sliderRef.current.style.animationPlayState = "running";
  };

  return (
    <div className="withme-section">
      <div className="section-title withme">
        <div className="left">
          <div className="category">
            <Icon icon="fa6-solid:dog" width="28" height="28" />
            <p>입양 추천 강아지</p>
          </div>
          <h2>이런 강아지는 어때요?</h2>
        </div>
        <button className="more-btn" onClick={() => navigate("/withme")}>
          <p>입양 전체 보기</p>
          <BsArrowRightCircleFill />
        </button>
      </div>

      <div className="slider-container">
        <div
          className="slider-track"
          ref={sliderRef}
          onMouseEnter={pause}
          onMouseLeave={play}
        >
          {[...Array(10)].map((_, i) => (
            <div className="card" key={i}>
              <div className="card-wrap">
                <div className="card-img"></div>
                <div className="card-content">
                  <h4>웰시코기</h4>
                  <p>사람을 좋아하고 순해요</p>
                </div>
              </div>
            </div>
          ))}
          {/** 무한루프를 위한 복제 */}
          {[...Array(10)].map((_, i) => (
            <div className="card" key={`clone-${i}`}>
              <div className="card-wrap">
                <div className="card-img"></div>
                <div className="card-content">
                  <h4>웰시코기</h4>
                  <p>사람을 좋아하고 순해요</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WithMeSection;
