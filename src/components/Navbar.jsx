import React from "react";
import { NavLink } from "react-router-dom";
import { House, Users, BookOpenText, Notebook } from "../assets/icon.js";

function Navbar() {
  const links = [
    {
      to: "/",
      value: "Home",
      icon: <House size={20} />,
    },
    {
      to: "/users",
      value: "User",
      icon: <Users size={20} />,
    },
    {
      to: "/resources",
      value: "Resources",
      icon: <BookOpenText size={20} />,
    },
    {
      to: "/practice",
      value: "Practice",
      icon: <Notebook size={20} />,
    },
  ];

  return (
    <div className="fixed border-2 w-[90vw] rounded-2xl z-50 backdrop-blur-md bg-black/30 text-white shadow-md h-[10vh] ">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-white">Quizzy</h1>

        {/* Nav Links */}
        <div className="flex gap-8">
          {links.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.to}
              className="flex flex-col items-center justify-center text-sm hover:text-yellow-300 transition"
            >
              {link.icon}
              <span>{link.value}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
