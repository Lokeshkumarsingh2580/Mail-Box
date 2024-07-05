import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  function navStyle({ isActive }) {
    return { color: isActive ? "red" : "blue" };
  }
  return (
    <div className="flex md:flex-col bg-slate-100 items-center md:p-12 justify-center md:justify-start p-8 gap-14 text-xl font-semibold">
      <NavLink
        className="border-r-4 border-black md:px-2 px-4"
        style={navStyle}
        to="/inbox"
      >
        Inbox
      </NavLink>
      <NavLink
        className="border-r-4 border-black md:px-2 px-4"
        style={navStyle}
        to="/spam"
      >
        Spam
      </NavLink>
      <NavLink
        className="border-r-4 border-black md:px-2 px-4"
        style={navStyle}
        to="/trash"
      >
        Trash
      </NavLink>
    </div>
  );
};

export default Navbar;
