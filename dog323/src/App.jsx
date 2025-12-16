import './styles/app.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import AuthLayout from "./components/layout/AuthLayout";
import HomePage from './components/pages/Home/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
        </Route>  

        <Route element={<AuthLayout />}>
        
        </Route>
      </Routes>
    </Router>
  );
};

export default App;