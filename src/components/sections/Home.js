import React from "react";
import styled from "styled-components";
import TypeWriterText from "../TypeWriterText";

const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body}; //remeber to change color
`;
const Container = styled.div`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  background-color: ${(props) => props.theme.body};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid green; */
  margin: 2px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <Section id="home">
      <Container>
        <Box>
          <TypeWriterText />
        </Box>
      </Container>
    </Section>
  );
};

export default Home;
