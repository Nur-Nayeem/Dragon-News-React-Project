import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import LatestNewsheader from "../components/LatestNewsheader";
import MyContainer from "../components/MyContainer";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homeLayout/LeftAside";
import RigheAside from "../components/homeLayout/RigheAside";
import Loader from "../components/Loader";

const HomeLayout = () => {
  const { state } = useNavigation();
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
          <aside className="col-span-12 lg:col-span-3 sticky top-15 h-fit z-10 bg-base-100 py-2.5">
            <LeftAside />
          </aside>
          <section className="main col-span-12 md:col-span-8 lg:col-span-6">
            {state === "loading" ? <Loader /> : <Outlet />}
          </section>
          <aside className="mt-10 md:mt-0 col-span-12 md:col-span-4 lg:col-span-3 sticky top-52 lg:top-15 h-fit py-2.5">
            <RigheAside />
          </aside>
        </MyContainer>
      </main>
    </div>
  );
};

export default HomeLayout;
