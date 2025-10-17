import React from "react";
import { NavLink } from "react-router";
import user from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 w-full"></div>
      <div className="col-span-4 flex justify-center gap-4 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="col-span-4 flex justify-end gap-4">
        <img src={user} alt="" />
        <button className="text-base-100 btn btn-primary px-10">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
