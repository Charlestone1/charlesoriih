import React from "react";
import styled from "styled-components";
import { BsPlay } from "react-icons/bs";

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BoxTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 85vw;
  height: 20vh;

  /* border: 1px solid greenyellow; */

  @media (max-width: 64em) {
    width: 75vw;
  }
  @media (max-width: 48em) {
    width: 55vw;
    height: 12vh;
  }
`;
const BoxTitle = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid blue; */

  @media (max-width: 64em) {
    width: 100%;
  }
`;

// styled the contents of the Title box

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* align-content: flex-start; */
`;

const Title = styled.h2`
  font-family: "Poppins", cursive;
  font-weight: 900;
  display: flex;
  align-items: center;
  position: relative;
  margin: 10px 0px 40px;
  width: 100%;
  font-size: ${(props) => props.theme.fontxxl};
  white-space: nowrap;
  color: ${(props) => props.theme.text};

  .play {
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => props.theme.slate};

    @media (max-width: 64em) {
      font-size: ${(props) => props.theme.fontsm};
    }
  }

  &::after {
    content: "";
    display: block;
    position: relative;
    top: 0;
    width: 15.6rem;
    height: 1px;
    margin-left: 1.25rem;
    background-color: ${(props) => props.theme.slate};

    @media (max-width: 70em) {
      width: 11.25rem;
      height: 1px;
      margin-left: 1rem;
    }

    @media (max-width: 64em) {
      width: 8.1rem;
      height: 1px;
      margin-left: 0.875rem;
    }
    @media (max-width: 48em) {
      width: 6.25rem;
      height: 1px;
      margin-left: 0.625rem;
    }
    @media (max-width: 40em) {
      width: 4.37rem;
      height: 1px;
      margin-left: 0.5rem;
    }
  }

  @media (max-width: 70em) {
    margin: 10px 0px 30px;
  }

  @media (max-width: 64em) {
    margin: 10px 0px 25px;
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    margin: 10px 0px 15px;
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 60vw;
  color: ${(props) => props.theme.slate};

  @media (max-width: 48em) {
    width: 80vw;
  }

  h3 {
    font-size: ${(props) => props.theme.fontxxl};
    margin: 1.5rem 0;

    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontxl};
      margin: 1rem 0;
    }
  }
  p {
    font-size: ${(props) => props.theme.fontmd};
    margin: 1.5rem 0;
    text-align: center;
    letter-spacing: 1px;
    line-height: 1.6rem;

    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontml};
      margin: 1rem 0;
      text-align: justify;
      line-height: 1.6rem;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  padding-top: 2rem;

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

const Btn = styled.a`
  display: inline-block;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  outline: none;
  border: none;

  font-size: ${(props) => props.theme.fontmd};
  font-weight: bold;
  padding: 0.9rem 2.3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  @media (max-width: 48em) {
    padding: 0.4rem 0.9rem;
  }

  &:hover {
    transform: scale(0.9);
  }
  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.theme.text};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }
  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;

const Contact = () => {
  return (
    <Section id="contact">
      <BoxTitleContainer>
        <BoxTitle>
          <TitleBox>
            <Title>
              <BsPlay className="play" />
              say hello!
            </Title>
          </TitleBox>
        </BoxTitle>
        <BoxTitle></BoxTitle>
      </BoxTitleContainer>
      <ContentContainer>
        <h3>Get In Touch</h3>
        <p>
          I'm currently available for Front-End Web Development job positions,
          either remote or hybrid, and any related freelancing opportunity that
          I consider profitable to me. I'm also available for internship
          positions or to work with a team to improve on my skill set.
        </p>
        <ButtonContainer>
          <Btn href="mailto:charlesorih@gmail.com">Send me a mail</Btn>
        </ButtonContainer>
      </ContentContainer>
    </Section>
  );
};

export default Contact;
