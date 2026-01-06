import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import regions from "../../../data/regions.json";
import DogCard from "../../common/DogCard";
import { BsArrowRightCircleFill } from "react-icons/bs";
import dogImg from "../../../assets/images/dog-img.jpg";
import { useNavigate } from "react-router-dom";
import {
  DOG_TYPE_LABEL,
  GENDER_LABEL,
  NEUTRALIZED_LABEL,
} from "../../../constants/dog";

const WithMe = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("전체");
  const menu = ["전체", "보호소", "개인 보호"];

  const regionList = Object.keys(regions);
  const [region, setRegion] = useState("");
  const [neutralized, setNeutralized] = useState("");
  const [gender, setGender] = useState("");
  const [keyword, setKeyword] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  // 화면에 출력되는 카드 개수 state
  const [visibleCount, setVisibleCount] = useState(16);

  // 테스트용 입양 데이터 ----- api 들어갈 부분 -----
  const dogInfo = Array.from({ length: 300 }, (_, i) => ({
    id: i,
    type: "shelter",
    name: `강아지${i + 1}`,
    character: i % 2 === 0 ? "활발해요" : "순해요",
    age: i % 3 === 0 ? "약 1살" : "약 3살",
    neutralized: i % 2 === 0 ? "yes" : "no",
    gender: i % 2 === 0 ? "female" : "male",
    region: "경기도 평택시 지산로 128",
    email: "rlagptmd1021@naver.com",
    message: `사람을 정말 좋아하는 순둥이에요.
갑작스러운 유학으로 인해 함께하지 못하게 되어 마음이 무겁습니다.
따뜻하게 품어주실 분을 기다립니다.
`,
  }));

  // 탭 메뉴 매핑
  const MENU_TYPE_MAP = {
    전체: "all",
    보호소: "shelter",
    "개인 보호": "private",
  };

  // 검색 버튼
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("검색어:", keyword);
  };

  // 더보기 버튼
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 16);
  };

  // 탭에 해당하는 입양 유형 필터링
  const filteredByMenu = dogInfo.filter((dog) => {
    if (active === "전체") return true;
    return dog.type === MENU_TYPE_MAP[active];
  });

  // 지역, 중성화, 성별 필터링
  const filteredBySelect = filteredByMenu.filter((dog) => {
    if (region && region !== "all" && dog.region !== region) return false;
    if (neutralized && neutralized !== "all" && dog.neutralized !== neutralized)
      return false;
    if (gender && gender !== "all" && dog.gender !== gender) return false;

    return true;
  });

  // 검색어 필터링
  const finalDogList = filteredBySelect.filter((dog) => {
    if (!searchKeyword.trim()) return true;

    return (
      dog.name.includes(searchKeyword) || dog.character.includes(searchKeyword)
    );
  });
  // 검색창 타이핑 후 0.3초 후에 검색 결과 로딩
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchKeyword(keyword);
    }, 500);

    return () => clearTimeout(timer);
  }, [keyword]);

  // 필터 변경 시 visibleCount 초기화
  useEffect(() => {
    setVisibleCount(16);
  }, [active, region, neutralized, gender, keyword]);

  return (
    <div className="withme">
      <div className="page-menu">
        <div className="menu-wrap">
          <ul className="menu">
            {menu.map((item) => (
              <li
                key={item}
                className={active === item ? "active" : ""}
                onClick={() => setActive(item)}
              >
                {item}
              </li>
            ))}
          </ul>

          <button className="write-btn" onClick={() => navigate("registration")}>
            <Icon icon="fa6-solid:pen-to-square" width="17" height="17" />
            분양 신청
          </button>
        </div>

        <div className="filter-wrap">
          <div className="filter">
            <div className="select-wrap">
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                <option value="" disabled hidden>
                  지역 선택
                </option>
                <option value="all">지역 전체</option>
                {regionList.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>

              <select
                value={neutralized}
                onChange={(e) => setNeutralized(e.target.value)}
              >
                <option value="" disabled hidden>
                  중성화 선택
                </option>
                <option value="all">중성화 전체</option>
                <option value="yes">중성화 O</option>
                <option value="no">중성화 X</option>
              </select>

              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="" disabled hidden>
                  성별 선택
                </option>
                <option value="all">성별 전체</option>
                <option value="male">남아</option>
                <option value="female">여아</option>
              </select>
            </div>

            <form className="search-wrap" onSubmit={handleSearch}>
              <input
                type="search"
                placeholder="검색어를 입력하세요"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button type="submit">
                <Icon icon="mingcute:search-line" width="24" height="24" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {finalDogList.length === 0 ? (
        <div className="empty">
          <Icon icon="fa6-solid:trash" width="34" height="38" />
          <h4>해당 조건에 맞는 강아지가 없어요</h4>
          <button
            onClick={() => {
              setRegion("");
              setNeutralized("");
              setGender("");
              setKeyword("");
            }}
          >
            검색 초기화
            <Icon icon="fa7-solid:rotate" width="18" height="18" />
          </button>
        </div>
      ) : (
        <div className="card-wrap">
          {finalDogList.slice(0, visibleCount).map((dog) => (
            <DogCard
              key={dog.id}
              image={dogImg}
              badgeType={dog.type}
              badgeLabel={DOG_TYPE_LABEL[dog.type]}
              title={dog.name}
              subtitle={dog.character}
              description={`${dog.age} | ${
                NEUTRALIZED_LABEL[dog.neutralized]
              } | ${GENDER_LABEL[dog.gender]}`}
              showFavorite
              onClick={() => navigate(`/withme/${dog.id}`, { state: { dog } })}
            />
          ))}
        </div>
      )}

      {visibleCount < finalDogList.length && (
        <button className="load-more-btn" onClick={handleLoadMore}>
          더보기 <BsArrowRightCircleFill />
        </button>
      )}
    </div>
  );
};

export default WithMe;
