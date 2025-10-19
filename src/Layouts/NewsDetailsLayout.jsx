import React from "react";
import Header from "../components/Header";
import MyContainer from "../components/MyContainer";
import LatestNewsheader from "../components/LatestNewsheader";
import Navbar from "../components/Navbar";
import RigheAside from "../components/homeLayout/RigheAside";
import { Outlet } from "react-router";

const NewsDetailsLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <section>
          <MyContainer className="my-3">
            <LatestNewsheader />
          </MyContainer>
        </section>
      </header>
      <nav className="sticky top-0 bg-base-100 z-50 py-1.5">
        <MyContainer className="my-3">
          <Navbar />
        </MyContainer>
      </nav>
      <main>
        <MyContainer className="my-3 grid grid-cols-12 gap-6">
          <section className="col-span-12 md:col-span-8 lg:col-span-9">
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

export default NewsDetailsLayout;
