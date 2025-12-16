import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { BsArrowRightCircleFill } from "react-icons/bs";

import ChatDog1 from "@/assets/images/chatdog-1.png";
import ChatDog2 from "@/assets/images/chatdog-2.png";
import ChatDog3 from "@/assets/images/chatdog-3.png";

const IMAGES = [ChatDog1, ChatDog2, ChatDog3];

const ChatDogSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("fade-out");

      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % 3);
        setFadeState("fade-in");
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    { title: "입양 절차", desc: "입양 방법, 가격, 조건 등" },
    { title: "예방접종", desc: "초기 예방 접종, 필수 예방 접종 등" },
    { title: "사후 케어", desc: "기초 반려용품, 산책 주기, 식사량 등" },
  ];

  return (
    <div className="chatdog-section">
      <div className="section-title chatdog">
        <div className="left">
          <div className="category">
            <Icon icon="mynaui:chat-messages-solid" width="28" height="28" />
            <p>AI 챗봇 입양 도우미</p>
          </div>
          <h2>
            나에게 맞는 입양 정보, <span className="mobile-break"></span>
            ChatDog에게 물어보세요
          </h2>
        </div>
        <button className="more-btn">
          <p>ChatDog랑 대화하기</p>
          <BsArrowRightCircleFill />
        </button>
      </div>

      <div className="chatdog-content">
        <img
          src={IMAGES[activeIndex]}
          alt="chatdog 이미지"
          className={`chatdog-img ${fadeState}`}
        />
        <ul className="chatdog-box">
          {items.map((item, idx) => (
            <li
              key={idx}
              className={idx === activeIndex ? "color-on fade-in" : ""}
            >
              <Icon icon="solar:chat-round-line-bold" width="50" height="50" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatDogSection;
