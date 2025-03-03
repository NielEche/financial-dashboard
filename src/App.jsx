import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import './style/general.css'
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";


const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="lg:flex-grow lg:bg-gray-100 flex-1 lg:ml-64">
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
};

export default App;
