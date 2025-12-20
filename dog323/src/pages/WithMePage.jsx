import { Outlet } from "react-router-dom";

const WithMePage = () => {
  return (
    <div id="withme-page">
      <Outlet />
    </div>
  );
};

export default WithMePage;