import { Icon } from "@iconify/react";
import { useState } from "react";

const DogCard = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive((prev) => !prev);
  }

  return (
    <div className="dog-card">
      <div className="img-wrap">
        <img src="" alt="강아지 사진" />
        <p className="badge">개인 보호</p>
      </div>
      <ul className="contents-wrap">
        <li>
          <h4>웰시코기</h4>
          <span onClick={toggleActive}>
            {active ? (
              <Icon icon="ph:heart-fill" width="35" height="35" />
            ) : (
              <Icon icon="ph:heart" width="35" height="35" />
            )}
          </span>
        </li>
        <li>사람을 좋아하고 순해요</li>
        <li>약 1살 | 중성화 O | 여아</li>
      </ul>
    </div> 
  );
};

export default DogCard;