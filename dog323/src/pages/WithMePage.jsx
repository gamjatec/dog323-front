import { Outlet } from "react-router-dom";

const WithMePage = () => {
  return (
    <div className="withme-page">
      <Outlet />
    </div>
  );
};

export default WithMePage;