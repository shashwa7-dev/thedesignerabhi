import React from "react";
import proj1 from "../Assets/Images/proj1.svg";
import proj2 from "../Assets/Images/proj2.svg";
import proj3 from "../Assets/Images/proj3.svg";
import proj4 from "../Assets/Images/proj4.svg";
import proj5 from "../Assets/Images/proj5.svg";
import proj6 from "../Assets/Images/proj6.svg";
import proj7 from "../Assets/Images/proj7.svg";
import proj8 from "../Assets/Images/proj8.svg";
import proj9 from "../Assets/Images/proj9.svg";
import proj10 from "../Assets/Images/proj10.svg";
import styled from "styled-components";

const ProjectsCtr = styled.div`
  .projectShowcase {
    .project {
      margin-top: 3rem;
      border: 2px solid var(--color-primary);
      padding: 2rem;
      display: grid;
      place-items: center;
      position: relative;
      padding-bottom: clamp(4rem, 7vw, 6rem); //project-title height
      cursor: pointer;
      overflow: hidden;
      &:hover > img {
        transform: scale(1.05);
      }
      .project_thumbnail {
        transition: all 0.2s ease;
      }
      .project_title {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        padding: 1rem;
        height: clamp(3.5rem, 6vw, 5rem);
        font-weight: var(--fw-m);
        font-size: clamp(1.25rem, 3vw, 2rem);
        display: flex;
        background: linear-gradient(90.99deg, #57585c 0.49%, #2b2d35 95.26%);
        align-items: center;
      }
    }
  }
`;
const Projects = () => {
  const allProjects = [
    {
      projectID: 1,
      projectTitle: "Polygon Studios HubHunt",
      projectThumbnail: proj1,
      projectLink: "https://nft-nyc.onrender.com/",
    },
    {
      projectID: 2,
      projectTitle: "The Product House Drop",
      projectThumbnail: proj2,
      projectLink: "https://believers.theproduct.house/",
    },
    {
      projectID: 3,
      projectTitle: "eDAO NH7 x Bacardi NFT Drop",
      projectThumbnail: proj3,
      projectLink: "https://nh7xwn.dehidden.com/",
    },
    {
      projectID: 4,
      projectTitle: "Web3rescue",
      projectThumbnail: proj4,
      projectLink:
        "https://www.figma.com/file/XVAlWqhuVJcbGh2d5hDs7M/Web3Rescue?node-id=0%3A1",
    },
    {
      projectID: 5,
      projectTitle: "Let it Snow ETH Denver",
      projectThumbnail: proj5,
      projectLink: "https://letitsnow.dehidden.com/",
    },
    {
      projectID: 6,
      projectTitle: "vybe wallet",
      projectThumbnail: proj6,
      projectLink:
        "https://www.figma.com/file/btwSZQwtctXxZnfWLRxWxz/VYBEwallet?node-id=0%3A1",
    },
    {
      projectID: 7,
      projectTitle: "Vester",
      projectThumbnail: proj7,
      projectLink:
        "https://www.figma.com/file/lzg3q0zTCU0ngiVxInkwVK/Vester?node-id=0%3A1",
    },
    {
      projectID: 8,
      projectTitle: "ETH Denver Phygitals (Frames)",
      projectThumbnail: proj8,
      projectLink: "",
    },
    {
      projectID: 9,
      projectTitle: "Mock Project News App",
      projectThumbnail: proj9,
      projectLink: "",
    },
    {
      projectID: 10,
      projectTitle: "Crypto Wallet & Exchange ",
      projectThumbnail: proj10,
      projectLink: "",
    },
  ];
  return (
    <ProjectsCtr className="contentCtr projects">
      <p className="title">Projects (Web3)</p>
      <p className="infoTxt">
        While working as a Product designer in Dehidden, I got the opportunity
        to work for various renowned companies entering the web3 space, such as
        Bacardi Weekender, Mercedes, etc.
      </p>
      <p className="infoTxt">
        Also, I worked on various POAP, NFT drops, and Phygital Modules for
        different clients. One of my best achievements was to design a
        Web3-based Scavenger Hunt game (Polygon Studios HUB HUNT) which is now a
        web3 module in itself.
      </p>
      <div className="projectShowcase">
        {allProjects.map((project) => (
          <div
            className="project"
            key={project.projectID}
            onClick={() => {
              if (project.projectLink !== "")
                window.open(project.projectLink, "_blank");
            }}
          >
            <img
              src={project.projectThumbnail}
              alt=""
              className="project_thumbnail"
            />
            <p className="project_title">{project.projectTitle}</p>
          </div>
        ))}
      </div>
    </ProjectsCtr>
  );
};

export default Projects;
