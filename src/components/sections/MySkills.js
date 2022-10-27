import React, { useState } from "react";
import styled from "styled-components";
import SkillData from "../../assets/data/SkillData";
import "../../styles/MySkill.css";
import { BsPlay, BsFillPlayFill } from "react-icons/bs";

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

const MySkillCenter = styled.div`
  width: 60vw;
  margin: 0 auto;
  margin-top: 4rem;
  /* border: 1px solid green; */
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 64em) {
    width: 70vw;
  }
  @media (max-width: 48em) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 96vw;
    margin-top: 1.5rem;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 4rem;

  /* border: 1px solid green; */
  width: 15vw;

  flex-wrap: wrap;

  @media (max-width: 64em) {
    width: 20vw;
  }

  @media (max-width: 48em) {
    flex-flow: row;
    align-items: space-around;
    justify-content: center;
    margin-bottom: 1rem;
    border-bottom: 0.5px solid ${(props) => props.theme.slate};
    width: 96vw;
    overflow-x: auto;
  }
  @media (max-width: 40em) {
    margin-bottom: 1.6rem;
  }
`;

const SkillInfo = styled.article`
  color: ${(props) => props.theme.slate};
  width: 45vw;

  @media (max-width: 64em) {
    width: 50vw;
  }
  @media (max-width: 48em) {
    width: 96vw;
  }
`;

const CompanyHeader = styled.h3`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  display: inline-block;
  padding: 0.375rem 0;
  margin-bottom: 0.3rem;
`;

const SkillDesc = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 2rem;
  align-items: center;
  margin-bottom: 1.25rem;

  color: ${(props) => props.theme.slate};
  font-family: "Poppins", cursive;
  font-size: ${(props) => props.theme.fontmd};

  p {
    color: ${(props) => props.theme.slate};
    font-family: "Poppins", cursive;
    font-size: ${(props) => props.theme.fontmd};
    margin-bottom: 0;
    text-align: justify;
  }

  .fill-play {
    color: ${(props) => props.theme.text};
  }

  @media (max-width: 48em) {
    column-gap: 1rem;
  }
`;

const MySkills = () => {
  // const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState(SkillData);
  const [value, setValue] = useState(0);

  const { company, duties } = jobs[value];

  return (
    <Section id="mySkills">
      <BoxTitleContainer>
        <BoxTitle>
          <TitleBox>
            <Title>
              <BsPlay className="play" />
              my skills
            </Title>
          </TitleBox>
        </BoxTitle>
        <BoxTitle></BoxTitle>
      </BoxTitleContainer>
      <MySkillCenter>
        <ButtonContainer>
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </ButtonContainer>
        <SkillInfo>
          <CompanyHeader>{company}</CompanyHeader>
          {duties.map((duty, index) => {
            return (
              <SkillDesc key={index}>
                <BsFillPlayFill className="fill-play" />
                <p>{duty}</p>
              </SkillDesc>
            );
          })}
        </SkillInfo>
      </MySkillCenter>
    </Section>
  );
};

export default MySkills;
