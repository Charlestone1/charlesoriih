import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import EcomImg from "../../assets/images/MobileImage/EcomMobileTrans.png";

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 98vw;
  margin-bottom: 3rem;
`;

const ImageBox = styled.div`
  width: 100%;
  background-color: gray;
  border-radius: 10px 10px 0px 0px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
`;
const ImageLink = styled.a`
  position: relative;
`;
const ImageBrowser = styled.div`
  height: 20px;
  background-color: rgb(243, 242, 242);
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 2;
`;
const Circle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin: 3px;

  &:first-child {
    background-color: green;
  }
  &:nth-child(2) {
    background-color: yellow;
  }
  &:last-child {
    background-color: red;
  }
`;

const DetailsContainer = styled.div`
  width: 98vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  background-image: url(${EcomImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const DetailsBox = styled.div`
  border-radius: 0.55rem;
  width: 80%;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  justify-content: center;
  margin: 6rem 0;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.9)`};

  @media (max-width: 42em) {
    margin: 4.5rem 0;
  }
  @media (max-width: 37em) {
    margin: 3rem 0;
  }
  @media (max-width: 30em) {
    margin: 2rem 0;
  }
`;
const HeaderBox = styled.div`
  width: 80%;
  font-family: "Poppins", cursive;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-end;
  font-weight: 100;
`;
const ProjectType = styled.p`
  font-size: ${(props) => props.theme.fontsm};
  color: ${(props) => props.theme.text};
  padding-top: 0.1rem;
`;
const ProjectName = styled.a`
  font-size: ${(props) => props.theme.fontmd};
  color: #fff;
  text-transform: capitalize;
  padding: 0.2rem 0;
  font-weight: 300;
  text-decoration: none;
  transition: all 0.2s linear;

  &:hover {
    color: ${(props) => props.theme.text};
  }
`;

const Desc = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.85)`};
  color: ${(props) => props.theme.slate};
  padding: 10px;
  /* border-radius: 10px 0 0 10px; */
  line-height: 1.3rem;
  text-align: justify;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const FooterBox = styled.div`
  color: #fff;
  width: 93%;
  margin: 0.4rem 0.1rem;

  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const HashTags = styled.div``;
const Tag = styled.span`
  padding: 0.3rem;
  font-size: ${(props) => props.theme.fontsm};

  &:last-child {
    padding-right: 0;
  }
`;

const Linkz = styled.div`
  padding-top: 0.3rem;
  font-size: ${(props) => props.theme.fontlg};
`;
const Visit = styled.a`
  padding-right: 1rem;
  &:hover {
    color: ${(props) => props.theme.text};
    cursor: pointer;
  }
`;
const Git = styled.a`
  &:hover {
    color: ${(props) => props.theme.text};
    cursor: pointer;
  }
`;

const WorkCompMobile3 = (props) => {
  const { id, order, type, name, description, tags, visit, github, imgSrc } =
    props.work;
  return (
    <Box>
      <ImageBox>
        <ImageContainer>
          <ImageLink href={visit} target="_blank" rel="noreferrer">
            <ImageBrowser>
              <Circle />
              <Circle />
              <Circle />
            </ImageBrowser>
            {/* <Image src={imgSrc} alt="images" className="p-img" /> */}
          </ImageLink>
          <DetailsContainer>
            <DetailsBox>
              <HeaderBox>
                <ProjectType> {type}</ProjectType>
                <ProjectName href={visit} target="_blank" rel="noreferrer">
                  {name}
                </ProjectName>
              </HeaderBox>
              <Desc>{description}</Desc>
              <FooterBox>
                <HashTags>
                  {tags.map((tag, id) => {
                    return <Tag key={id}>#{tag}</Tag>;
                  })}
                </HashTags>
                <Linkz>
                  <Visit href={visit} target="_blank" rel="noreferrer">
                    <span>
                      <FiExternalLink />
                    </span>
                  </Visit>
                  <Git href={github} target="_blank" rel="noreferrer">
                    <span>
                      <FiGithub />
                    </span>
                  </Git>
                </Linkz>
              </FooterBox>
            </DetailsBox>
          </DetailsContainer>
        </ImageContainer>
      </ImageBox>
    </Box>
  );
};
export default WorkCompMobile3;
