import React from "react";
// import { light } from "../styles/Themes";
import styled from "styled-components";
import Passport from "../assets/images/Passport.jpg";

const RevealContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-wrap: wrap; */
  /* min-height: 100vh; */
  background: #010615;
`;
const Box = styled.div`
  position: relative;
  width: 18.75rem;
  height: 18.75rem;
  /* background: #060c21; */

  display: flex;
  justify-content: center;
  align-items: center;

  /* margin: 30px; */
  transition: 0.5s;

  &:hover {
    height: 25rem;

    @media (max-width: 48em) {
      height: 20rem; //320px
    }
  }

  &::before {
    content: " ";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(235deg, #61dafb, #010615, #ff005e);
    z-index: 0;
  }

  &::after {
    content: " ";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    /* background-color: #fff; */
    z-index: 0;
    filter: blur(40px);
  }

  & > * ::before,
  ::after {
    background: linear-gradient(235deg, #61dafb, #010615, #ff005e);
  }

  @media (max-width: 48em) {
    width: 15rem; //240px
    height: 15rem; //240px
  }
`;
const ImageBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  z-index: 1;
  background-color: black;

  img {
    max-width: 100%;
    opacity: 0.1;
    transition: 0.5s;

    ${Box}:hover & {
      opacity: 1;
    }
  }
`;
const Content = styled.div`
  position: absolute;
  /* bottom: 0; */
  left: 10px;
  right: 10px;
  bottom: 10px;
  height: 80px;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: 0.5s;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  ${Box}:hover & {
    opacity: 1;
    z-index: 2;
  }
`;
const Name = styled.h2`
  font-family: "Poppins", cursive;
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.slate};
  /* font-weight: 100;*/
  line-height: ${(props) => props.theme.fontlg};
  letter-spacing: 1px;
`;
const Desc = styled.span`
  font-size: ${(props) => props.theme.fontsm};
  font-weight: 200;
  color: ${(props) => props.theme.text};
  letter-spacing: 2px;
`;

const CardReveal = () => {
  return (
    <RevealContainer>
      <Box>
        <ImageBox>
          <img src={Passport} alt="Passport" />
        </ImageBox>
        <Content>
          <Name>
            Charles Oriih <br /> <Desc>Web Developer</Desc>
          </Name>
        </Content>
      </Box>
    </RevealContainer>
  );
};

export default CardReveal;
