import { init } from "ityped";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
// import resume from "../img/resume1.png";
import resume from "../img/dp.jpg";
// import me from "../img/resume2.png";
// import me from "../img/srk.jpg";
import me from "../img/dp3.jpg";
import PrimaryButton from "./PrimaryButton";
import SecondryButton from "./SecondryButton";
import "../App.css";
function ImageSection() {
  const infoo = useRef();
  useEffect(() => {
    init(infoo.current, {
      showCursor: false,
      backSpeed: 100,
      startDelay: 500,
      backDelay: 800,
      strings: ["Sharoof Khan", "A Software Developer", "A Problem Solver"],
    });
  }, []);
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <div className="btn">
          <img src={me} alt="" />
        </div>
      </div>
      <div className="right-content">
        <h4>
          I am <span ref={infoo}></span>
        </h4>
        <p className="paragraph">
          I am Software Devloper. Strong in design and integration with
          intuitive problem-solving skills. Proficient in React and React
          Native, Javascript. Passionate about implementing and launching new
          projects. Ability to translate business requirements into technical
          solutions.
        </p>
        <div className="about-info"></div>
        <PrimaryButton title={"Download Resume"} />
        <SecondryButton title={"View Resume"} />
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 85%;
    img {
      width: 100%;

      object-fit: cover;

      height: 70vh;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
