import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-3 py-5">
      <img className="sm:max-w-[380px] w-2xs" src={logo} alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="text-accent">
        <span className="font-semibold">{format(new Date(), "EEEE, ")}</span>
        {format(new Date(), "MMMM d, yyyy")}
      </p>
    </div>
  );
};

export default Header;
