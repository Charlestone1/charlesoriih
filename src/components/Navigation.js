import React, { useState } from "react";
import styled from "styled-components";
import Button from "../subComponents/Button";
import Logo from "./Logo";
import "../styles/Stickyscrollup.css";

const Section = styled.header`
  width: 100vw;
  background-color: ${(props) => props.theme.body};

  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 95%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;

  .mobile {
    display: none;
  }

  @media (max-width: 64em) {
    .desktop {
      display: none;
    }
    .mobile {
      display: inline-block;
    }
  }

  @media (max-width: 48em) {
    width: 88%;
  }
  @media (max-width: 40em) {
    width: 85%;
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: 64em) {
    /* 1024px - mobile and tab*/
    position: fixed;
    top: ${(props) => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.85)`};
    backdrop-filter: blur(2px);

    transform: ${(props) =>
      props.click ? "translateY(0)" : "translateY(1000%)"};
    transition: all 0.3s ease;

    flex-direction: column;
    justify-content: center;
  }
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 64em) {
    /* 1024px - mobile and tab*/

    margin: 1rem 0;
    &::after {
      display: none;
    }
  }
`;

const DesktopResume = styled.div``;

const HamburgerMenu = styled.span`
  width: ${(props) => (props.click ? "2rem" : "1.5rem")};
  height: 2px;
  background: ${(props) => props.theme.text};

  position: absolute;
  top: 2rem;
  right: 5%;
  transform: ${(props) =>
    props.click
      ? "translateX(-50%) rotate(90deg)"
      : "translateX(-50%) rotate(0)"};

  display: none;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 64em) {
    display: flex;
  }
  @media (max-width: 48em) {
    /* right: 5%; */
    right: 1rem;
  }

  &::after,
  &::before {
    content: "";
    width: ${(props) => (props.click ? "1rem" : "1.5rem")};
    height: 2px;
    right: ${(props) => (props.click ? "-2px" : "0")};
    background: ${(props) => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
  }

  &::after {
    top: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(-40deg)" : "rotate(0)")};
  }
  &::before {
    bottom: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(40deg)" : "rotate(0)")};
  }
`;

const Navigation = () => {
  const [click, setClick] = useState(false);

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    setClick(!click);
  };

  const body = document.body;
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll <= 0) {
      body.classList.remove("scroll-up");
    }
    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-up");
      body.classList.add("scroll-down");
    }
    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-down");
      body.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
  });

  return (
    <Section>
      <NavBar id="navigation">
        <Logo />
        <HamburgerMenu click={click} onClick={() => setClick(!click)}>
          &nbsp;
        </HamburgerMenu>
        <Menu click={click}>
          <MenuItem onClick={() => scrollTo("navigation")}>Home</MenuItem>
          <MenuItem onClick={() => scrollTo("about")}>About</MenuItem>
          <MenuItem onClick={() => scrollTo("mySkills")}>My SKills</MenuItem>
          <MenuItem onClick={() => scrollTo("works")}>Works</MenuItem>
          <MenuItem onClick={() => scrollTo("contact")}>Contact</MenuItem>
          <MenuItem>
            <div className="mobile">
              {/*  link="https://www.google.com" */}
              <Button text="Resume" />
            </div>
          </MenuItem>
        </Menu>
        <DesktopResume className="desktop">
          {/* link="https://www.google.com" */}
          <Button text="Resume" />
        </DesktopResume>
      </NavBar>
    </Section>
  );
};

export default Navigation;
