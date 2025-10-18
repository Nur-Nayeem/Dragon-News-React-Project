import React, { use } from "react";
import { AuthContext } from "../auth-context/AuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loader } = use(AuthContext);
  if (loader) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to="/auth/sign-in" />;
};

export default PrivateRoute;
