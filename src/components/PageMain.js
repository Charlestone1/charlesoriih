import React from "react";
import styled from "styled-components";
import SocialIcons from "../subComponents/SocialIcons";
import Navigation from "./Navigation";
import ScrollToTop from "./ScrollToTop";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import MySkills from "./sections/MySkills";
import Works from "./sections/Works";
import "../styles/PageMain.css";
import Contact from "./sections/Contact";

const Pages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const PageMain = () => {
  return (
    <>
      <Pages className="pageMain">
        <SocialIcons />
        <Navigation />
        <Home />
        <About />
        <MySkills />
        <Works />
        <Contact />
        <Footer />
        <ScrollToTop />
      </Pages>
    </>
  );
};

export default PageMain;
