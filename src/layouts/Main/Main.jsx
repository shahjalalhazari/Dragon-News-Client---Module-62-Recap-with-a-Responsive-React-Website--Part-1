// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../../shared/Header/Header";
import ReactMarquee from "../../components/ReactMarquee/ReactMarquee";
import Navitems from "../../shared/NavItems/Navitems";
import Home from "../../pages/Home/Home/Home";

const Main = () => {
  return (
    <>
      <Header></Header>
      <ReactMarquee />
      <Navitems />
      <Home/>
      {/* <Outlet></Outlet> */}
    </>
  );
};

export default Main;
