import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Resources from "./pages/Resources";
import Practice from "./pages/Practice";
import Test from "./pages/Test";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0f172a] to-[#1e293b] text-white px-[5vw] py-[5vh] w-full">
      <Navbar />

      <Routes className="space-y-4">
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/test" element={<Test />} />
        <Route path="/quiz/:subject/:questionNo/:layout" element={<Quiz />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
