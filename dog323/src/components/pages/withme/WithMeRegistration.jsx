const WithMeRegistration = () => {
  return (
    <div className="registration withme">
      <div className="wrap">
        <div className="title">
          <h3>분양 신청</h3>
          <p>분양 신청할 강아지의 정보를 입력해 주세요</p>
        </div>
        <form>

          <label className="input-wrap">
            <span>견종</span>
            <input type="text" placeholder="견종을 입력해 주세요" />
          </label>

          <label className="input-wrap">
            <span className="sub-desc">나이</span>
            <select>
              <option value="" selected disabled hidden>
                출생년도를 선택해 주세요
              </option>
              <option value="all">2025년</option>
              <option value="yes">2024년 </option>
              <option value="no">중성화 X</option>
            </select>
          </label>

          <label className="input-wrap">
            <span className="sub-desc" data-sub="40자 이하">
              특징
            </span>
            <input type="text" placeholder="특징을 40자 이하로 입력해 주세요" />
          </label>
          
        </form>
      </div>
    </div>
  );
};

export default WithMeRegistration;
