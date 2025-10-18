import React from "react";
import MyContainer from "./MyContainer";

const Loader = () => {
  return (
    <MyContainer className="h-96 flex justify-center items-center">
      <span className="loading loading-spinner loading-xl"></span>
    </MyContainer>
  );
};

export default Loader;
