// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../../shared/Header/Header";
import ReactMarquee from "../../components/ReactMarquee/ReactMarquee";
import Navitems from "../../shared/NavItems/Navitems";


const Main = () => {
  return (
    <>
      <Header></Header>
      <ReactMarquee />
      <Navitems/>
    </>
  );
};

export default Main;
