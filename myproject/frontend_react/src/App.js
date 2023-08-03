import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/LoginPage';
import Register from './pages/Register';
import ShoeListPage from "./pages/ShoeListPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/shoelist" element={ <ShoeListPage /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/register" element={ <Register /> } />
        {/* Add more Route components for additional paths here */}
      </Routes>
    </Router>
  );
}

export default App;
