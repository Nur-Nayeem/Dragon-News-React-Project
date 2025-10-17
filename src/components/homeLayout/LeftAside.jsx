import React, { Suspense } from "react";
import Categories from "../Categories";

const LeftAside = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-primary">All Categories </h2>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Categories />
      </Suspense>
    </div>
  );
};

export default LeftAside;
