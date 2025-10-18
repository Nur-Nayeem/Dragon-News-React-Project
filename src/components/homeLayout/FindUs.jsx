import React from "react";
import fb from "../../assets/fb.png";
import twtr from "../../assets/twitter.png";
import igm from "../../assets/instagram.png";
const FindUs = () => {
  return (
    <div className="px-3.5">
      <h2 className="text-xl font-semibold text-primary mb-5">Find Us On</h2>
      <div>
        <div className="join join-vertical w-full">
          <button className="btn btn-xl bg-base-100 justify-start join-item space-x-1.5 text-accent">
            <figure className="w-8 h-8 bg-base-200 rounded-full flex justify-center items-center">
              <img src={fb} alt="" />
            </figure>
            <span className="text-lg">Facebook</span>
          </button>
          <button className="btn btn-xl bg-base-100 justify-start join-item space-x-1.5 text-accent">
            <figure className="w-8 h-8 bg-base-200 rounded-full flex justify-center items-center">
              <img src={twtr} alt="" />
            </figure>
            <span className="text-lg">Twitter</span>
          </button>
          <button className="btn btn-xl bg-base-100 justify-start join-item space-x-1.5 text-accent">
            <figure className="w-8 h-8 bg-base-200 rounded-full flex justify-center items-center">
              <img src={igm} alt="" />
            </figure>
            <span className="text-lg">Instagram</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
