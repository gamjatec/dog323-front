import { Outlet } from "react-router-dom";
import Header from "./Header";
import BottomNav from "./BottomNav";
import { useMediaQuery } from "react-responsive";


const MainLayout = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="main-layout">
      <Header isMobile={isMobile} />
      <main>
        <Outlet />  {/* 페이지 컴포넌트가 들어오는 자리 */}
      </main>
      {isMobile && <BottomNav />}
    </div>
  );
};

export default MainLayout;