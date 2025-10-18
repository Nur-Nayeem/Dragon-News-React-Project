import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNewsheader from "../components/LatestNewsheader";
import MyContainer from "../components/MyContainer";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homeLayout/LeftAside";
import RigheAside from "../components/homeLayout/RigheAside";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <section>
          <MyContainer className="my-3">
            <LatestNewsheader />
          </MyContainer>
        </section>
        <nav>
          <MyContainer className="my-3">
            <Navbar />
          </MyContainer>
        </nav>
      </header>
      <main>
        <MyContainer className="my-3 grid grid-cols-12 gap-6">
          <aside className="col-span-12 lg:col-span-3">
            <LeftAside />
          </aside>
          <section className="main col-span-12 md:col-span-8 lg:col-span-6">
            <Outlet />
          </section>
          <aside className="mt-10 md:mt-0 col-span-12 md:col-span-4 lg:col-span-3">
            <RigheAside />
          </aside>
        </MyContainer>
      </main>
    </div>
  );
};

export default HomeLayout;
