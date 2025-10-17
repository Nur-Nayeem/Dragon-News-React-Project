import React from "react";
import { NavLink } from "react-router";
import user from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav flex gap-4 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/">Career</NavLink>
      </div>
      <div className="flex gap-4">
        <img src={user} alt="" />
        <button className="text-base-100 btn btn-primary px-10">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
