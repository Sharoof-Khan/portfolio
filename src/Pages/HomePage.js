import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import GithubIcon from "@material-ui/icons/GitHub";
import Particle from "../Components/Particle";
import { motion } from "framer-motion";
import { init } from "ityped";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { SiLeetcode } from "react-icons/si";
// import Style from './HomePage.module.css';
// import  './HomePage.module.css';
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.6, duration: 0.6 },
  },
  exit: {
    y: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
function HomePage({ theme }) {
  const info = useRef();

  useEffect(() => {
    init(info.current, {
      showCursor: false,
      backSpeed: 100,
      startDelay: 500,
      backDelay: 800,
      strings: ["A Software Developer", "A Problem Solver"],
    });
  }, []);
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <HomePageStyled>
        <div className="particle-con">
          <Particle theme={theme} />
        </div>
        <div className="typography">
          <h1>Hi, I'm</h1>
          {/* className={Style.nm} */}
          <h1
            style={{ fontSize: 65, color: "var(--primary-color)" }}
            className="nm"
          >
            SHAROOF KHAN
          </h1>
          <span
            ref={info}
            style={{ fontSize: 35, display: "block", minHeight: 50 }}
          ></span>
          <p>
            It's Nice To Meet You. I Design And Code Beautifully And I Love What
            I Do.
          </p>
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/sharoof-khan-0703/"
              className="icon i-linked"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/sharoof-khan"
              className="icon i-github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </HomePageStyled>
    </motion.div>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-linked {
        &:hover {
          border: 2px solid rgb(10, 102, 194);
          color: rgb(10, 102, 194);
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
      .i-leetcode {
        &:hover {
          border: 2px solid rgb(250, 157, 22);
          color: rgb(250, 157, 22);
        }
      }
    }
  }

  @media screen and (max-width: 400px) and (min-width: 250) {
    /* .typography >::nth-child(2) { */
    .nm {
      overflow-x: hidden;
      flex-wrap: wrap;

      font-size: 50px;
      /* font-style: italic; */
    }
  }

  @media screen and (max-width: 500px) {
    overflow-x: hidden;
    flex-wrap: wrap;
  }
  /* @media screen and (min-width:100px) and (max-width: 400px) {
    overflow-x: hidden;
    flex-wrap: wrap;
  } */
`;

export default HomePage;
