import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/common/NavBar";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Footer from "./components/common/Footer";
const App = () => {
  return (
    <div className="w-screen min-h-screen bg-emerald-950 flex flex-col font-inter">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
};

export default App;
