import React, { useState } from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "../subComponents/Button";

const MiniTitle = styled.p`
  font-family: "Roboto", monospace;
  font-size: ${(props) => props.theme.fontlg};
  margin-bottom: 25px;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  @media (max-width: 48em) {
    align-self: center;
    font-size: ${(props) => props.theme.fontmd};
    margin-bottom: 15px;
  }
`;
const Title = styled.div`
  font-size: ${(props) => props.theme.fontxxxl};
  text-transform: capitalize;
  width: 90%;
  color: ${(props) => props.theme.textWhite};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
    font-size: ${(props) => props.theme.fontmd};
  }

  .text-1 {
    color: ${(props) => props.theme.text};
  }
  .text-2 {
    color: ${(props) => props.theme.myYellow};
  }
  .text-3 {
    color: ${(props) => props.theme.myGreen};
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;

    font-size: ${(props) => props.theme.fontlg};
  }
  @media (max-width: 40em) {
    width: 90%;
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const TitleSubText = styled.h3`
  font-size: ${(props) => props.theme.fontsm};
  text-transform: none;
  color: ${(props) => props.theme.slate};
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  width: 100%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontsm};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;
const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: none;
  color: ${(props) => props.theme.slate};
  font-weight: 300;
  margin-bottom: 1rem;
  width: 90%;
  align-self: flex-start;

  letter-spacing: 1px;

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;
  padding-top: 1rem;

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;

    button {
      margin: 0 auto;
    }
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const TypeWriterText = () => {
  // scrollto about from the that About me button
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
  return (
    <>
      <MiniTitle>Hi, my name is</MiniTitle>
      <Title>
        CHARLES ORIIH
        <TitleSubText>I'm a Web Developer.</TitleSubText>
        <Typewriter
          options={{ autoStart: true, loop: true }}
          onInit={(typewriter) => {
            typewriter
              .typeString(`<span class='text-1'>React.js</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class='text-2'>Designer</span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span class='text-3'>Figma.</span>`)
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <SubTitle>
        I'm a Web Developer specializing in designing exceptional digital
        experiences. Currently, I'm focused on building functional & responsive
        websites.
      </SubTitle>
      <ButtonContainer onClick={() => scrollTo("footer")}>
        <Button text="Contact Me" />
      </ButtonContainer>
    </>
  );
};

export default TypeWriterText;
