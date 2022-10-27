import React, { useRef } from "react";
import { useLayoutEffect } from "react";
import { useWindowScroll } from "react-use";
import styled from "styled-components";

const Up = styled.div`
  width: 3rem;
  height: 3rem;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  z-index: 1001;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => `rgba(${props.theme.slateRgba},0.6)`};

  font-size: ${(props) => props.theme.fontxl};
  position: fixed;
  right: 2.9rem;
  bottom: 1rem;

  cursor: pointer;

  display: none;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
  &:active {
    transform: scale(0.9);
  }

  @media (max-width: 48em) {
    right: 1rem;
  }
`;

const ScrollToTop = () => {
  const ref = useRef(null);
  const { y } = useWindowScroll();
  const scrollToTop = () => {
    let element = document.getElementById("home");

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  useLayoutEffect(() => {
    if (y > 200) {
      ref.current.style.display = "flex";
    } else {
      ref.current.style.display = "none";
    }
  }, [y]);

  return (
    <Up ref={ref} onClick={() => scrollToTop()}>
      &#x2191;
    </Up>
  );
};

export default ScrollToTop;
