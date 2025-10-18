import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../auth-context/AuthContext";
const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleAuth = () => {
    if (!user) {
      navigate("/auth/sign-in");
      return;
    }
    signOutUser()
      .then((res) => {
        console.log("logput success", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-12">
      <div className="col-span-4 w-full"></div>
      <div className="col-span-4 flex justify-center gap-4 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="col-span-4 flex justify-center md:justify-end gap-4">
        <img
          className="w-10 h-10 rounded-full"
          src={user ? user.photoURL : userIcon}
          alt=""
        />
        <button
          onClick={handleAuth}
          className="text-base-100 btn btn-primary px-10"
        >
          {user ? "Log Out" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
