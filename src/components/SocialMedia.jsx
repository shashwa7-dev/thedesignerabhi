import React from "react";
import styled from "styled-components";
import post1 from "../Assets/Images/post1.jpeg";
import post2 from "../Assets/Images/post2.jpeg";
import post3 from "../Assets/Images/post3.jpeg";
import post4 from "../Assets/Images/post4.jpeg";
import post5 from "../Assets/Images/post5.jpeg";
import post6 from "../Assets/Images/post6.jpeg";
const SocialMediaCtr = styled.div`
  width: 100%;
  .instaPostsPreview {
    width: 100%;
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, 139px);
    justify-content: space-evenly;
    gap: 2rem;
    .instaPost {
      width: 139px;
      cursor: pointer;
      overflow: hidden;
      img {
        transition: all 0.2s ease;
      }
      &:hover > img {
        border: 2px solid;
        transform: scale(1.1);
      }
    }
  }
  @media screen and (min-width: 50em) {
    .instaPostsPreview {
      justify-content: space-between;
      grid-template-columns: repeat(auto-fill, 220px);
      .instaPost {
        width: 220px;
      }
    }
  }

  @media screen and (min-width: 55em) {
    .instaPostsPreview {
      justify-content: space-between;
      grid-template-columns: repeat(auto-fill, 270px);
      .instaPost {
        width: 270px;
      }
    }
  }
`;
const SocialMedia = () => {
  const instaPosts = [
    {
      postImg: post1,
      postLink: "https://www.instagram.com/p/CW2OTdTqjvc/",
    },
    {
      postImg: post2,
      postLink: "https://www.instagram.com/p/CR5t6SurnVf/",
    },
    {
      postImg: post3,
      postLink: "https://www.instagram.com/p/CSmOlveqCZ4/",
    },
    {
      postImg: post4,
      postLink: "https://www.instagram.com/p/CTlmfYCqEp2/",
    },
    {
      postImg: post6,
      postLink: "https://www.instagram.com/p/CRov22IKjNf/",
    },
    {
      postImg: post5,
      postLink: "https://www.instagram.com/p/COrrQL9he5z/",
    },
  ];
  return (
    <SocialMediaCtr className="contentCtr">
      <p className="title">Social Media Spotlight</p>
      <p className="infoTxt">
        I've always wanted to contribute more back into the design community and
        this seemed like a great way of doing so. I started posting what
        resources, best practices, tutorials were going on in my everyday life
        as well as other relevant information for graphic designers that are
        often difficult or time-consuming to find!
      </p>
      <div className="instaPostsPreview">
        {instaPosts.map((post, idx) => (
          <div
            className="instaPost"
            key={idx}
            onClick={() => window.open(post.postLink, "_blank")}
          >
            <img src={post.postImg} alt="instaPost" />
          </div>
        ))}
      </div>
    </SocialMediaCtr>
  );
};

export default SocialMedia;
