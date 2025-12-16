import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import BannerImg from "@/assets/images/mbti-img.png";

const MbtiSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    ["활발하고 호기심 많은", "에너지 폭발! 산책 메이트형"],
    ["신중하고 헌신적인", "한 사람만 바라보는 충실형"],
    ["다정하고 감정 표현이 풍부한", "조용한 위로를 주는 힐링형"],
    ["밝고 사랑스러운", "어디서나 주목받는 귀염뽀짝형"],
  ];

  return (
    <div className="mbti-section">
      <div className="section-title mbti">
        <div className="left">
          <div className="category">
            <Icon icon="fa7-solid:clipboard-question" width="28" height="28" />
            <p>멍BTI TEST</p>
          </div>
          <h2>
            나랑 잘 어울리는 <span className="mobile-break"></span>
            강아지는 누구일까요?
          </h2>
        </div>
        <button className="more-btn">
          <p>테스트 시작하기</p>
          <BsArrowRightCircleFill />
        </button>
      </div>

      <div className="mbti-banner">
        <div className="banner-wrap">
          <ul className="left">
            {items.map((texts, idx) => (
              <li key={idx} className={idx === activeIndex ? "color-on" : ""}>
                <p>{texts[0]}</p>
                <p>{texts[1]}</p>
              </li>
            ))}
          </ul>
          <div className="right">
            <div className="text">
              <p>지금 바로 테스트하고 찰떡궁합 강아지를 만나보세요!</p>
              <h1><span>멍BTI</span> 성향 테스트</h1>
            </div>
            <img src={BannerImg} alt="멍BTI 이미지" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MbtiSection;
