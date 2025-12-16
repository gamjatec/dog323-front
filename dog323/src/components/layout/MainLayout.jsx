import { Outlet } from "react-router-dom";
import Header from "./Header";
import BottomNav from "./BottomNav";
import { useMediaQuery } from "react-responsive";
import Footer from "./Footer";


const MainLayout = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="main-layout">
      <Header />
      <main>
        <Outlet />  {/* 페이지 컴포넌트가 들어오는 자리 */}
      </main>
      <Footer />
      {isMobile && <BottomNav />}
    </div>
  );
};

export default MainLayout;