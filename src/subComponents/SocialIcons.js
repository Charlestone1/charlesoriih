import React from "react";
// import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Twitter } from "../components/AllSvgs";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { light } from "../styles/Themes";
import { motion } from "framer-motion";
// import { FaGithubSquare } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  line-height: 1.3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }

  .insta {
    font-size: 1.8rem;
    &:hover {
      fill: ${(props) => props.theme.text};
    }
  }

  .twitter {
    &:hover {
      fill: ${(props) => props.theme.text};
    }
  }
  .whatsapp {
    font-size: 1.7rem;
    &:hover {
      fill: ${(props) => props.theme.text};
    }
  }

  @media (max-width: 48em) {
    display: none;
  }
`;

const Line = styled(motion.span)`
  width: 1px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "light" ? light.text : light.slate};
`;

const IconsRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  right: 2rem;

  z-index: 3;

  line-height: 1.3;

  &:hover {
    fill: ${(props) => props.theme.text};
    /* background-color: ${(props) => props.theme.text}; */
  }

  .gith {
    font-size: 1.5rem;
    /* &:hover {
      fill: ${(props) => props.theme.text};
    } */
  }
  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }

  .linkdn {
    font-size: 1.4rem;
    &:hover {
      fill: ${(props) => props.theme.text};
    }
  }

  .mail {
    font-size: 1.6rem;
    &:hover {
      fill: ${(props) => props.theme.text};
    }
  }

  @media (max-width: 48em) {
    display: none;
  }
`;

const LineRight = styled(motion.span)`
  width: 1px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "light" ? light.text : light.slate};
`;

const SocialLink = styled.a``;

const SocialIcons = (props) => {
  return (
    <>
      <Icons>
        <motion.div
          initial={{ transform: "scale(0)" }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1.2 }}
        >
          <SocialLink
            style={{ color: "inherit" }}
            target="_blank"
            href="https://twitter.com/Charlesoriih"
          >
            <span className="twitter">
              <Twitter
                width={25}
                height={25}
                onMouseOver={({ target }) => (target.style.fill = "#61dafb")}
                onMouseOut={({ target }) => (target.style.fill = "#8892b0")}
                fill={props.theme === "light" ? light.text : light.slate}
              />
            </span>
          </SocialLink>
        </motion.div>
        <motion.div
          initial={{ transform: "scale(0)" }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1.4 }}
        >
          <SocialLink
            style={{ color: "inherit" }}
            target="_blank"
            href="http://wa.me/+2347066270034"
          >
            <span className="whatsapp">
              <FaWhatsapp
                width={25}
                height={25}
                onMouseOver={({ target }) => (target.style.fill = "#61dafb")}
                onMouseOut={({ target }) => (target.style.fill = "#8892b0")}
                fill={props.theme === "light" ? light.text : light.slate}
              />
            </span>
          </SocialLink>
        </motion.div>
        <motion.div
          initial={{ transform: "scale(0)" }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1.6 }}
        >
          <SocialLink
            style={{ color: "inherit" }}
            target="_blank"
            href="https://instagram.com/Charlestone3"
          >
            <span className="insta">
              <AiFillInstagram
                width={25}
                height={25}
                onMouseOver={({ target }) => (target.style.fill = "#61dafb")}
                onMouseOut={({ target }) => (target.style.fill = "#8892b0")}
                fill={props.theme === "light" ? light.text : light.slate}
              />
            </span>
          </SocialLink>
        </motion.div>

        <Line
          color={props.theme}
          initial={{ height: 0 }}
          animate={{ height: "8rem" }}
          transition={{ type: "spring", duration: 1, delay: 0.8 }}
        />
      </Icons>

      <IconsRight>
        <motion.div
          initial={{ transform: "scale(0)" }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1.2 }}
        >
          <SocialLink
            style={{ color: "inherit" }}
            target="_blank"
            href="https://www.linkedin.com/in/charles-oriih-17887316a/"
          >
            <BsLinkedin
              className="linkdn"
              width={25}
              height={25}
              fill={props.theme === "light" ? light.text : light.slate}
            />
          </SocialLink>
        </motion.div>
        <motion.div
          initial={{ transform: "scale(0)" }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1.4 }}
        >
          <SocialLink
            style={{ color: "inherit" }}
            target="_blank"
            href="https://github.com/Charlestone1"
          >
            <span className="gith">
              <VscGithub
                width={25}
                height={25}
                onMouseOver={({ target }) => (target.style.fill = "#61dafb")}
                onMouseOut={({ target }) => (target.style.fill = "#8892b0")}
                fill={props.theme === "light" ? light.text : light.slate}
              />
            </span>
          </SocialLink>
        </motion.div>
        <motion.div
          initial={{ transform: "scale(0)" }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1.6 }}
        >
          <SocialLink
            style={{ color: "inherit" }}
            target="_blank"
            href="mailto: charlesorih007@gmail.com"
          >
            <MdEmail
              className="mail"
              width={25}
              height={25}
              fill={props.theme === "light" ? light.text : light.slate}
            />
          </SocialLink>
        </motion.div>

        <LineRight
          color={props.theme}
          initial={{ height: 0 }}
          animate={{ height: "8rem" }}
          transition={{ type: "spring", duration: 1, delay: 0.8 }}
        />
      </IconsRight>
    </>
  );
};

export default SocialIcons;
