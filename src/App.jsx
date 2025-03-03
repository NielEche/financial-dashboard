import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import './style/general.css'

// Lazy load the Dashboard and Settings pages
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="lg:flex-grow lg:bg-gray-100 flex-1 lg:ml-64">
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Settings />} />
              <Route path="/settings" element={<Dashboard />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
};

export default App;
