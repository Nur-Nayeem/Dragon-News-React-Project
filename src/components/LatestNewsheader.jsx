import React from "react";
import Marquee from "react-fast-marquee";

const LatestNewsheader = () => {
  return (
    <div className="flex items-center bg-base-200 p-3 gap-3">
      <p className="text-base-100 bg-secondary py-2 px-3">Letest</p>
      <Marquee className="flex gap-6" pauseOnHover={true} speed={80}>
        <p className="font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <p className="font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <p className="font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <p className="font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNewsheader;
