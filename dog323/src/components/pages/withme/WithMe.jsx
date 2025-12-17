import { Icon } from "@iconify/react";
import { useState } from "react";
import regions from "../../../data/regions.json";
import DogCard from "../../common/DogCard";

const WithMe = () => {
  const [active, setActive] = useState("전체");
  const menu = ["전체", "보호소", "개인 보호"];

  const regionList = Object.keys(regions);
  const [region, setRegion] = useState("");
  const [neutralized, setNeutralized] = useState("");
  const [gender, setGender] = useState("");

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

          <button className="write-btn">
            <Icon icon="fa6-solid:pen-to-square" width="17" height="17" />
            분양 신청
          </button>

        </div>

        <div className="filter">

          <div className="select-wrap">

            <select value={region} onChange={(e) => setRegion(e.target.value)} className={region ? "selected" : ""}>
              <option value="" disabled hidden>지역</option>
              <option value="all">지역 전체</option>
              {regionList.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>

            <select value={neutralized} onChange={(e) => setNeutralized(e.target.value)} className={neutralized ? "selected" : ""}>
              <option value="" disabled hidden>중성화</option>
              <option value="all">중성화 전체</option>
              <option value="yes">중성화 O</option>
              <option value="no">중성화 X</option>
            </select>

            <select value={gender} onChange={(e) => setGender(e.target.value)} className={gender ? "selected" : ""}>
              <option value="" disabled hidden>성별</option>
              <option value="all">성별 전체</option>
              <option value="male">남아</option>
              <option value="female">여아</option>
            </select>

          </div>
          
          <div className="search-wrap">
            <input type="search" placeholder="검색어를 입력하세요"/>
            <button><Icon icon="mingcute:search-line" width="24" height="24" /></button>
          </div>

        </div>
      </div>

      <div className="card-wrap">
        <DogCard />
        <DogCard />
        <DogCard />
        <DogCard />
      </div>
    </div>
  );
};

export default WithMe;
