import './styles/app.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import AuthLayout from "./components/layout/AuthLayout";
import Home from './components/pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
        </Route>  

        <Route element={<AuthLayout />}>
        
        </Route>
      </Routes>
    </Router>
  );
};

export default App;