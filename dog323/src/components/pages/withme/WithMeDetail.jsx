import { useLocation, useParams } from "react-router-dom";
import dogImg from "../../../assets/images/dog-img.jpg";

const WithMeDetail = () => {
  const { id } = useParams();
  const location = useLocation();

  // 테스트용 입양 데이터 ----- api 들어갈 부분 -----
  const dogList = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    name: `강아지${i + 1}`,
    type: "shelter",
    age: "약 1살",
    character: i % 2 === 0 ? "활발해요" : "순해요",
    neutralized: i % 2 === 0 ? "yes" : "no",
    gender: i % 2 === 0 ? "female" : "male",
  }));


  // @@@@@@@@ 상세페이지 공통으로 만들기 @@@@@@
  const dog = location.state?.dog || dogList.find((d) => d.id === Number(id));

  if (!dog) return <p>강아지를 찾을 수 없습니다.</p>;

  return (
    <div className="dog-detail">
      <img src={dogImg} alt={dog.name} />
      <h2>{dog.name}</h2>
      <p>성격: {dog.character}</p>
      <p>나이: {dog.age}</p>
      <p>중성화: {dog.neutralized}</p>
      <p>성별: {dog.gender}</p>
    </div>
  );
};

export default WithMeDetail;
