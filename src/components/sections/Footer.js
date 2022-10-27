import React from "react";
import styled from "styled-components";
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";

const Container = styled.footer`
  height: 15vh;
  width: 100vw;
  position: relative;
  background-color: #060e1a;
  border-top: 1px solid ${(props) => props.theme.slate};

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Section = styled.div`
  width: 80%;
  /* margin: 5rem auto; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${(props) => props.theme.slate};

  .copyRight {
    @media (max-width: 48em) {
      text-align: center;
    }
  }
  .IconDiv {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 48em) {
    flex-direction: column-reverse;
  }
`;
const MyName = styled.span`
  color: ${(props) => props.theme.text};
`;
const CopyCircle = styled.span`
  color: ${(props) => props.theme.text};
`;

// styling the icons

const IconList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1rem auto;

  & > * {
    padding: 0 0.3rem;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
      color: ${(props) => props.theme.text};
    }
  }
  a {
    margin: 0 0.3rem;
    font-size: 1.3rem;
  }
`;
const Footer = () => {
  return (
    <Container id="footer">
      <Section>
        <div className="copyRight">
          <CopyCircle>&copy; {new Date().getFullYear()} </CopyCircle>
          Designed & Built by <MyName>Charles Oriih</MyName>.
        </div>
        <div className="IconDiv">
          <IconList>
            <a
              href="mailto:charlesorih@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
            <a
              href="http://linkedIn.com/Charlesoriih"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/charles.oriih1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com/Charlestone3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/Charlesoriih"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>

            <a
              href="http://wa.me/+2347066270034"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="http://github.com/Charlestone1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </IconList>
        </div>
      </Section>
    </Container>
  );
};

export default Footer;
