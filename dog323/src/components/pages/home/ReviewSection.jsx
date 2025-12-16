import { Icon } from "@iconify/react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useRef } from "react";
import CardImg from "../../../assets/images/review-img.jpg";

const ReviewSection = () => {
  const sliderRef = useRef(null);

  const pause = () => {
    sliderRef.current.style.animationPlayState = "paused";
  };

  const play = () => {
    sliderRef.current.style.animationPlayState = "running";
  };

  return (
    <div className="review-section">
      <div className="section-title review">
        <div className="left">
          <div className="category">
            <Icon icon="solar:chat-line-bold" width="28" height="28" />
            <p>323 따뜻한 입양 후기</p>
          </div>
          <h2>
            입양을 통해 변한 <span className="mobile-break"></span>
            따뜻한 일상을 만나보세요
          </h2>
        </div>
        <button className="more-btn">
          <p>더 많은 후기 보기</p>
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
          <div 
            className={`item ${i % 2 === 1 ? "review-card even" : "review-card"}`}
            key={i}
          >
            <img src={CardImg} alt="강아지 사진" />
            <div className="card-text">
              <h4>
                어느덧 함께한 지 1년째, <br />
                이제는 정말 가족이 된 것 같아요.
              </h4>
              <p>
                또리맘 님의 가족<span>또리 🐾</span>
              </p>
            </div>
          </div>
          ))}
          {/** 무한루프를 위한 복제 */}
          {[...Array(10)].map((_, i) => (
          <div 
            className={`item ${i % 2 === 1 ? "review-card even" : "review-card"}`}
            key={`clone-${i}`}
          >
            <img src={CardImg} alt="강아지 사진" />
            <div className="card-text">
              <h4>
                어느덧 함께한 지 1년째, <br />
                이제는 정말 가족이 된 것 같아요.
              </h4>
              <p>
                또리맘 님의 가족<span>또리 🐾</span>
              </p>
            </div>
          </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ReviewSection;
