import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect } from 'react';
import Home from "./Home";
import Header from "./Components/Navbar";
import ScrollProgressBar from "./Components/ScrollProgressBar";



function App() {
  useEffect(() => {
    // Force reload the app on page refresh
    const handleReload = () => {
      window.location.reload();

      window.addEventListener("beforeunload", handleReload);
      return () => {
        window.removeEventListener("beforeunload", handleReload);
      };
    };
  }, [])
  return (
    <>
      <Router>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <ScrollProgressBar />
      </Router>
    </>
  )
}

export default App
