import React from "react";
import styled from "styled-components";
import WorkData from "../../assets/data/Workdata/WorkData";
import WorkData2 from "../../assets/data/Workdata/WorkData2";
import WorkData3 from "../../assets/data/Workdata/WorkData3";
import WorkDataMobile from "../../assets/data/Workdata/WorkDataMobile";
import WorkDataMobile2 from "../../assets/data/Workdata/WorkDataMobile2";
import WorkDataMobile3 from "../../assets/data/Workdata/WorkDataMobile3";
import WorkCompMobile from "../WorkComp/WorkCompMobile";
import WorkCompMobile3 from "../WorkComp/WorkCompMobile3";
import WorkCompMobile2 from "../WorkComp/WorkCompMobile2";
import WorkComponent from "../WorkComp/WorkComponent";
import WorkComponent2 from "../WorkComp/WorkComponent2";
import { BsPlay } from "react-icons/bs";

const Container = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const Section = styled.section`
  width: 80%;
  display: flex;
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

const BoxContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 80vh;

  @media (max-width: 48em) {
    display: none;
  }
`;
const BoxMobile = styled.div`
  display: none;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 80vh;

  @media (max-width: 48em) {
    display: flex;
  }
`;

const Works = () => {
  return (
    <Container id="works">
      <Section>
        <BoxTitleContainer>
          <BoxTitle>
            <TitleBox>
              <Title>
                <BsPlay className="play" />
                works
              </Title>
            </TitleBox>
          </BoxTitle>
          <BoxTitle></BoxTitle>
        </BoxTitleContainer>
        <BoxContainer>
          {WorkData.map((work) => {
            return <WorkComponent key={work.id} work={work} />;
          })}
          {WorkData2.map((work) => {
            return <WorkComponent2 key={work.id} work={work} />;
          })}
          {WorkData3.map((work) => {
            return <WorkComponent key={work.id} work={work} />;
          })}
        </BoxContainer>
        <BoxMobile>
          {WorkDataMobile.map((work) => {
            return <WorkCompMobile key={work.id} work={work} />;
          })}
          {WorkDataMobile2.map((work) => {
            return <WorkCompMobile2 key={work.id} work={work} />;
          })}
          {WorkDataMobile3.map((work) => {
            return <WorkCompMobile3 key={work.id} work={work} />;
          })}
        </BoxMobile>
      </Section>
    </Container>
  );
};

export default Works;
