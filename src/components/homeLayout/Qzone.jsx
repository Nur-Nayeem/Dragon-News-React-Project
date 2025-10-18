import React from "react";
import classImg from "../../assets/class.png";
import playground from "../../assets/playground.png";
import swimming from "../../assets/swimming.png";
const Qzone = () => {
  return (
    <div className="mx-3.5 bg-base-200 py-5">
      <h2 className="text-xl font-semibold text-primary mb-5 px-3.5">Q-Zone</h2>
      <div className="space-y-5 px-1.5">
        <img className="w-full" src={swimming} alt="" />
        <img className="w-full" src={playground} alt="" />
        <img className="w-full" src={classImg} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
