import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import MyContainer from "../components/MyContainer";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 h-screen">
      <header>
        <nav>
          <MyContainer className="py-3 ">
            <Navbar />
          </MyContainer>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
