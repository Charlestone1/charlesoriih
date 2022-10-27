import React from "react";
import styled from "styled-components";
import { BsPlay, BsFillPlayFill } from "react-icons/bs";
import CardReveal from "../CardReveal";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
  display: flex;
  flex-direction: column;
  align-items: center;
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

const BoxContainer = styled.div`
  width: 80%;
  min-height: 80vh;
  margin: 0 auto;
  background-color: ${(props) => props.theme.body};

  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;

  @media (max-width: 48em) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    flex-direction: column;
  }
`;

const Box = styled.div`
  /* width: 48%; */
  height: 100%;
  /* border: 1px solid green; */
  margin: 2px;

  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: flex-start;
`;

const Subtext = styled.div`
  color: ${(props) => props.theme.slate};
  font-family: "Poppins", cursive;
  font-size: ${(props) => props.theme.fontmd};
  margin-bottom: 1rem;
  width: 80%;

  & > *:nth-child(3) {
    text-indent: 2px;
    margin-top: 10px;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const Paragraph = styled.p`
  letter-spacing: 1px;
  text-indent: 15px;
  line-height: 1.6rem;
  text-align: justify;
  margin: 15px 2px;

  .nameSpan {
    color: ${(props) => props.theme.text};
  }
  @media (max-width: 48em) {
    letter-spacing: 0.9px;
    text-indent: 12px;
    line-height: 1.2rem;
    margin: 10px 1.5px;
  }
`;
const SkillList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;

  @media (max-width: 48em) {
    grid-template-columns: repeat(2, minmax(80px, 130px));
    gap: 0px 4px;
    padding: 0px;
    margin: 2px 0px 0px;
  }
`;
const ListItem = styled.li`
  text-indent: 2rem;
  line-height: 2rem;
  font-size: ${(props) => props.theme.fontsm};

  .fill-play {
    color: ${(props) => props.theme.text};
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 100%;
  min-height: 70vh;
  padding-top: 10px;
`;

const About = () => {
  return (
    <Section id="about">
      <BoxTitleContainer>
        <BoxTitle>
          <TitleBox>
            <Title>
              <BsPlay className="play" />
              about me
            </Title>
          </TitleBox>
        </BoxTitle>
        <BoxTitle></BoxTitle>
      </BoxTitleContainer>
      <BoxContainer>
        <Box>
          <Subtext>
            <Paragraph>
              Hey! My name is <span className="nameSpan"> Charles Oriih </span>
              and I enjoy creating functional and beautiful websites. My
              interest in web development started back in 2017 out of
              curiousity.
            </Paragraph>
            <Paragraph>
              My journey through the University opened me up to research, and it
              demanded me to visit variety of websites of which some was
              beautiful and functional, while some others was not. Curiousity
              led me to begin to inquire how the beautiful websites was built,
              that was where I met HTML and CSS and Javascript.
            </Paragraph>
            <Paragraph>
              Here are a few technologies I've been working with recently:
            </Paragraph>
            <SkillList>
              <ListItem>
                <BsFillPlayFill className="fill-play" /> JavaScript
              </ListItem>
              <ListItem>
                <BsFillPlayFill className="fill-play" /> React.Js
              </ListItem>
              <ListItem>
                <BsFillPlayFill className="fill-play" /> Tailwind
              </ListItem>
              <ListItem>
                <BsFillPlayFill className="fill-play" /> Figma
              </ListItem>
            </SkillList>
          </Subtext>
        </Box>
        <Box>
          <ImageContainer>
            <CardReveal />
          </ImageContainer>
        </Box>
      </BoxContainer>
    </Section>
  );
};

export default About;
