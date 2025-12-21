import { Icon } from "@iconify/react";
import dogImg from "../../assets/images/dog-img.jpg";
import dogImg2 from "../../assets/images/dog-img.jpg";
import dogImg3 from "../../assets/images/dog-img.jpg";
import DogDetailImageSlider from "./DogDetailImageSlider";
import { useLocation, useParams } from "react-router-dom";
import {
  DOG_TYPE_LABEL,
  GENDER_LABEL,
  NEUTRALIZED_LABEL,
} from "../../constants/dog";
import { useState } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";

const DogDetail = () => {
  const { id } = useParams();
  const location = useLocation();

  const [comment, setComment] = useState("");
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const dogFromState = location.state?.dog;

  const dogList = Array.from({ length: 300 }, (_, i) => ({
    id: i,
    type: i % 2 === 0 ? "shelter" : "private",
    name: `강아지${i + 1}`,
    character: i % 2 === 0 ? "활발해요" : "순해요",
    age: i % 3 === 0 ? "약 1살" : "약 3살",
    neutralized: i % 2 === 0 ? "yes" : "no",
    gender: i % 2 === 0 ? "female" : "male",
    region: "경기도 평택시 지산로 128",
    email: "rlagptmd1021@naver.com",
    message: `사람을 정말 좋아하는 순둥이에요.
갑작스러운 유학으로 인해 함께하지 못하게 되어 마음이 무겁습니다.
따뜻하게 품어주실 분을 기다립니다.`,
  }));

  const dog = dogFromState || dogList.find((item) => item.id === Number(id));

  if (!dog) return <p>데이터를 불러올 수 없습니다.</p>;

  // 댓글 입력
  const handleComment = (e) => {
    e.preventDefault();
  };

  // 댓글 수정/신고 버튼 토글
  const toggleMenu = (index) => {
    setOpenMenuIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="dog-detail">
      <div className="dog-detail-wrap">
        <div className="dog-detail-box">
          <div className="dog-img">
            <DogDetailImageSlider img={[dogImg, dogImg2, dogImg3]} />
          </div>
          <div className="dog-content">
            <div className="description withme">
              <Icon icon="ph:paw-print-fill" width="25" height="25" />
              <p>{dog.character}</p>
            </div>
            <div className="title">
              <p className="badge private">{DOG_TYPE_LABEL[dog.type]}</p>
              <h3>{dog.name}</h3>
            </div>
            <ul className="info">
              <li>
                <p>나이</p>
                <div>
                  <h4>{dog.age}</h4>
                  <p>(2025년생)</p>
                </div>
              </li>
              <li>
                <p>성별</p>
                <h4>{GENDER_LABEL[dog.gender]}</h4>
              </li>
              <li>
                <p>중성화</p>
                <h4>{NEUTRALIZED_LABEL[dog.neutralized]}</h4>
              </li>
              <li>
                <p>예방접종</p>
                <h4>완료</h4>
              </li>
            </ul>
            <ul className="contact">
              <li>
                <p>보호 지역</p>
                <h5>{dog.region}</h5>
              </li>
              <li>
                <p>이메일</p>
                <h5>{dog.email}</h5>
              </li>
            </ul>
            <div className="message">
              <p>입양자에게 전하는 말</p>
              <h5>{dog.message}</h5>
            </div>
          </div>
        </div>

        <div className="dog-detail-comment">
          <div className="num-write-wrap">
            <div className="number">
              <Icon icon="majesticons:chat" width="26" height="26" />
              <h4>3개의 댓글이 있어요</h4>
            </div>
            <form className="input-wrap" onSubmit={handleComment}>
              <input
                type="text"
                placeholder="댓글을 입력해 주세요"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button type="submit" disabled={!comment.trim()}>
                <BsArrowRightCircleFill />
              </button>
            </form>
          </div>
          <div className="comment-list">
            {[...Array(3)].map((_, i) => (
              <div className="comment">
                <div className="content">
                  <img src={""} alt="프로필 사진" />
                  <div className="text">
                    <div className="top">
                      <h5>못생긴지렁이</h5>
                      <p>11/12 18:03</p>
                    </div>
                    <p>댓글 내용입니다 댓글 내용입니다 댓글 내용입니다</p>
                  </div>
                </div>
                <button onClick={() => toggleMenu(i)}>
                  <Icon icon="mage:dots" width="24" height="24" />
                </button>
                {openMenuIndex === i && (
                  <ul className="add-btn">
                    <li>수정</li>
                    <li>삭제</li>
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogDetail;
