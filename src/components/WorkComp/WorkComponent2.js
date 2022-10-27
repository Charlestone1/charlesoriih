import React from "react";
import styled from "styled-components";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 80vw;
  min-height: 80vh;

  /* border: 1px solid blue; */
  /* background-color: greenyellow; */
`;

const ImageBox = styled.div`
  /* border: 1px solid green; */
  width: 45%;
  height: 350px;

  /* position: relative; */
  overflow: hidden;
  /* margin: 2rem; */
  /* background-color: blue; */
  /*  */
`;

const ImageContainer = styled.div`
  width: 99%;
  height: 99%;
  border: 2px solid rgb(243, 242, 242);
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
`;
const ImageLink = styled.a`
  position: relative;

  &::before {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.35)`};
  }
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
  /* background-color: blue; */

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
const Image = styled.img`
  width: 100%;
  transition: all 6s ease;

  ${ImageContainer}:hover & {
    transform: translateY(-85%);
  }
`;
const DetailsBox = styled.div`
  /* border: 1px solid blue; */
  width: 45%;
  height: 350px;
  /* margin: 2rem; */
  /* background-color: blue; */
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
`;
const HeaderBox = styled.div`
  /* border: 1px solid blue; */
  width: 80%;
  /* height: 100px; */
  /* margin: 2rem; */
  /* background-color: purple; */
  /* background-color: ${(props) => props.theme.body}; */

  font-family: "Poppins", cursive;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  font-weight: 100;
`;
const ProjectType = styled.p`
  font-size: ${(props) => props.theme.fontsm};
  color: ${(props) => props.theme.text};
  padding-bottom: 1rem;
`;
const ProjectName = styled.a`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.slate};
  text-transform: capitalize;
  padding: 0.6rem 0;
  font-weight: 900;
  text-decoration: none;
  transition: all 0.2s linear;

  &:hover {
    color: ${(props) => props.theme.text};
  }
`;

const Desc = styled.div`
  background-color: #0e2444;
  color: ${(props) => props.theme.slate};
  padding: 10px;
  border-radius: 10px;
  line-height: 1.3rem;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  /* border: 1px solid blue; */
  /* width: 100%; */
  /* height: 100px; */
  /* background-color: green; */
`;
const FooterBox = styled.div`
  color: ${(props) => props.theme.slate};
  /* border: 1px solid blue; */
  width: 90%;
  /* height: 100px; */
  margin: 1rem 0;
  /* background-color: violet; */

  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const HashTags = styled.div``;
const Tag = styled.span`
  padding: 0.5rem;
  font-size: ${(props) => props.theme.fontsm};

  &:first-child {
    padding-left: 0;
  }
`;

const Linkz = styled.div`
  padding-top: 1.5rem;
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
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

const WorkComponent2 = (props) => {
  const { type, name, description, tags, visit, github, imgSrc } = props.work;

  return (
    <Box>
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
      <ImageBox>
        <ImageContainer>
          <ImageLink href={visit} target="_blank" rel="noreferrer">
            <ImageBrowser>
              <Circle />
              <Circle />
              <Circle />
            </ImageBrowser>
            {/* <a href={visit} target="_blank" rel="noreferrer"> */}
            <Image src={imgSrc} alt="images" className="p-img" />
            {/* </a> */}
          </ImageLink>
        </ImageContainer>
      </ImageBox>
    </Box>
  );
};

export default WorkComponent2;
