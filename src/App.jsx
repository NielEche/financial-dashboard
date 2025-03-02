import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import './style/general.css'

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="lg:flex-grow flex-1 lg:ml-64">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
