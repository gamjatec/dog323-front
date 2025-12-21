import { BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const JoinSection = () => {
  const navigate = useNavigate();

  return (
    <div className="join-section">
      <div className="head">
        <h2>당신의 작은 관심이 큰 변화를 만듭니다</h2>
        <h1><span>DOG323</span>과 함께 <span className="mobile-break"></span>
            사지 말고 입양해요</h1>
      </div>
      <p>함께하는 입양 문화 지금 바로 DOG323에서.</p>
      <button onClick={() => navigate("/withme")}>입양하러 가기<BsArrowRightCircleFill /></button>
    </div>
  );
};

export default JoinSection;