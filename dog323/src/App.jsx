import './styles/app.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import AuthLayout from "./components/layout/AuthLayout";
import HomePage from "./pages/HomePage";
import WithMePage from "./pages/WithMePage";
import ScrollToTop from './components/layout/ScrollToTop';
import WithMe from './components/pages/withme/WithMe';
import WithMeDetail from './components/pages/withme/WithMeDetail';

// App.jsx = 사이트 지도
// Page = 화면 껍데기 + Outlet

// app.jsx에 모든 페이지 라우트 설정
// page 컴포넌트에는 outlet만 넣기(공통 레이아웃이나 단계 표시 같은 거 넣기)

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='withme' element={<WithMePage />}>
            <Route index element={<WithMe />} />
            <Route path=":id" element={<WithMeDetail />} />
          </Route>
        </Route>

        <Route element={<AuthLayout />}>
        
        </Route>
      </Routes>
    </Router>
  );
};

export default App;