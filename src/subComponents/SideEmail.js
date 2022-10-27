import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { light } from "../styles/Themes";
import { motion } from "framer-motion";
import { Facebook, Github, Twitter, YouTube } from "../components/AllSvgs";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

// const SideEmail = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   position: fixed;
//   bottom: 0;
//   right: 2rem;

//   z-index: 3;

//   line-height: 1.3;
//   p {
//     color: ${(props) => props.theme.slate};
//     /* right: 0rem; */
//     transform: rotate(90deg);
//     margin-bottom: 2rem;
//     /* position: fixed; */
//   }

//   /* & > *:not(:last-child) {
//     margin: 1rem 0;
//   } */
// `;

// const Line = styled(motion.span)`
//   width: 2px;
//   height: 8rem;
//   background-color: ${(props) =>
//     props.color === "light" ? light.text : light.slate};
// `;

const IconsRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  right: 2rem;

  z-index: 3;

  line-height: 1.3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const LineRight = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "light" ? light.text : light.slate};
`;

const sideEmail = (props) => {
  return (
    <IconsRight>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "http://github.com/Charlestone1" }}
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "light" ? light.text : light.slate}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "mailto:charlesorih@gmail.com" }}
        >
          <MdEmail
            className="mail"
            width={25}
            height={25}
            fill={props.theme === "light" ? light.text : light.slate}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "http://linkedIn.com/Charlesoriih" }}
        >
          <BsLinkedin
            className="linkdn"
            width={25}
            height={25}
            fill={props.theme === "light" ? light.text : light.slate}
          />
        </NavLink>
      </motion.div>

      <LineRight
        color={props.theme}
        initial={{ height: 0 }}
        animate={{ height: "8rem" }}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
      />
    </IconsRight>
  );
};

export default sideEmail;
