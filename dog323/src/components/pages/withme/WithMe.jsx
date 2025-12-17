import { Icon } from "@iconify/react";

const WithMe = () => {
  return (
    <div className="withme"> 
      <div className="page-nav">
        <div className="top">
          <ul className="lnb">
            <li>전체</li>
            <li>보호소</li>
            <li>개인 보호</li>
          </ul>
          <button><Icon icon="fa6-solid:pen-to-square" width="17" height="17" /> 분양 신청</button>
        </div>
      </div>
    </div>
  );
};

export default WithMe;