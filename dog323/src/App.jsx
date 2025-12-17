import './styles/app.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import AuthLayout from "./components/layout/AuthLayout";
import HomePage from "./pages/HomePage";
import WithMePage from "./pages/WithMePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='withme' element={<WithMePage />} />
        </Route>  

        <Route element={<AuthLayout />}>
        
        </Route>
      </Routes>
    </Router>
  );
};

export default App;