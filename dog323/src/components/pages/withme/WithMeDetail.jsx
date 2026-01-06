import { useLocation, useParams } from "react-router-dom";
import dogImg from "../../../assets/images/dog-img.jpg";
import DogDetail from "../../common/DogDetail";

const WithMeDetail = () => {
  return (
    <div className="withme-detail">
      <DogDetail />
    </div>
  );
};

export default WithMeDetail;
