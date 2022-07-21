import React from "react";
import styled from "styled-components";
import { SiteContent } from "../common/cmnstyles";
import projectsPreviewBG from "../Assets/Images/projectsPreview.svg";
import Nav from "./Nav";
import { motion } from "framer-motion";
import SocialMedia from "./SocialMedia";
import Projects from "./Projects";
import FooterForm from "./FooterForm";
const ContentCtr = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .heroSlide {
    width: 100%;
    height: 100vh;
    min-height: fit-content;
    position: relative;
    padding-top: 4rem;
    .heroTitle {
      max-width: 1020px;
    }
    .artistInfo {
      color: var(--color-content);
      font-weight: var(--fw-lt);
      .artistName {
        font-size: var(--fs-m);
      }
      .artistProfession {
        font-size: var(--fs-rg);
      }
    }
  }

  .projectPreview {
    width: 100%;
    height: 50vh;
    display: grid;
    place-items: center;
    text-align: center;
    position: relative;
    background: url(${projectsPreviewBG}) no-repeat center;
    background-size: cover;
    background-attachment: fixed;

    @media screen and (min-width: 50em) {
      height: 100vh;
    }
  }

  .careerSection {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-between;

    .leftContent {
      .info {
        margin-top: 2rem;
        display: grid;
        gap: 2rem;
        max-width: 500px;
      }
    }
    .rightContent {
      color: var(--color-content);
      font-weight: var(--fw-m);
      font-size: clamp(2rem, 4vw, 2.75rem);
      display: grid;
      gap: 1rem;
    }
  }
  .experienceSection {
    gap: 4rem;
    .workIntro {
      .info {
        margin-top: 2rem;
        display: grid;
        gap: 2rem;
      }
    }
    .workProfile {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      flex-direction: row;
      flex-wrap: wrap;

      .workInfo {
        text-align: left;
      }
    }
  }
`;

const ContentSection = () => {
  const _ax_heroSlide = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <ContentCtr>
      <motion.div
        className="heroSlide"
        variants={_ax_heroSlide}
        initial="hidden"
        animate="show"
      >
        <Nav />
        <div className="contentCtr">
          <div className="artistInfo">
            <p className="artistName">Abhishek Singh</p>
            <p className="artistProfession">Product Designer</p>
          </div>
          <p className="titleXl heroTitle">
            What’s my design goal? That I don’t have to explain my design to
            you.
          </p>
        </div>
      </motion.div>
      <div className="projectPreview">
        <p className="titleMd">
          Not “Just Another <br /> Designer”
        </p>
      </div>
      <div className="contentCtr careerSection">
        <div className="leftContent">
          <p className="title">My Career so far</p>
          <div className="info">
            <p className="infoTxt">
              With a Bachelors in Computer Engineering and my passion for UI/UX
              Designing.
            </p>
            <p className="infoTxt">
              I have the knowledge to help you reach out to a new audience by
              designing products that are both visually appealing and User
              Friendly.
            </p>
          </div>
        </div>
        <div className="rightContent">
          <p className="skills">Graphic Design</p>
          <p className="skills">UX/UI Design</p>
          <p className="skills">Print Design</p>
          <p className="skills">Brand Design</p>
        </div>
      </div>
      <div className="contentCtr experienceSection">
        <div className="workIntro">
          <p className="title">My Experience</p>
          <div className="info">
            <p className="infoTxt">
              I've been working with various clients and companies and, I love
              how each of them is so unique and brings their own flavor to the
              table! It helps me learn more and expand my domain to various
              niches.
            </p>
            <p className="infoTxt">
              In the process of expanding my domain I was introduced to new web
              - the Web3. Here I worked for designing various web3 modules, such
              as POAP (Proof of Attendence), NFT drops, etc. My goal here was to
              give more meaning and use cases to NFTs. It has been awesome
              working in this space since then.
            </p>
          </div>
        </div>
        <div className="workProfile">
          <div className="workInfo">
            <p className="orgTitle title">Thedesignerabhi</p>
            <p className="orgDesignation infoTxt">Freelancer</p>
            <p className="timeline infoTxt">2019 - Present</p>
          </div>
          <div className="workInfo">
            <p className="orgTitle title">Dehidden</p>
            <p className="orgDesignation infoTxt">Product Designer</p>
            <p className="timeline infoTxt">Dec 2021 - July 2022</p>
          </div>
          <div className="workInfo">
            <p className="orgTitle title">Truts</p>
            <p className="orgDesignation infoTxt">Product Designer</p>
            <p className="timeline infoTxt">July 2022 - Present</p>
          </div>
        </div>
      </div>
      <SocialMedia />
      <Projects />
      <FooterForm />
    </ContentCtr>
  );
};

export default ContentSection;
