import React from "react";
import NavGym from "./NavGym";
import ScrollProgress from "./ScrollProgress";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Pricing from "./Pricing";
import JoinUs from "./JoinUs";
import FooterWeb from "./FooterWeb";
import About from "./About";
import Classes from "./Classes";

const MainWeb2 = () => {
  return (
    <>
      <NavGym />
      <Banner />
      <About />
      <Classes />
      <Gallery />
      <Pricing />
      <JoinUs />
      <FooterWeb />
      <ScrollProgress />
    </>
  );
};

export default MainWeb2;
