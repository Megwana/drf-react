import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        {/* Add more Route components for additional paths here */}
      </Routes>
    </Router>
  );
}

export default App;
