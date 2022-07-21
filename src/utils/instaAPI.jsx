import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const useInstaPostsFetch = () => {
  const [posts, setPosts] = useState([]);

  const instaAccessToken =
    "IGQVJWaXBjT2FNMGZAsbzZAfTlp1Um93M3ktV09kS1A2OTVKeGU0YlhPYkJ1XzFZAQ28yQWVNSERXNEdtT21uaFIxTXVLWXBablBJaTZAHNlF5U0wteFEwQ3VyRWZAvUGpWUzhESlpsOFdxaEx1SWJla3NsVwZDZD";

  const getUserPostsEP = `https://graph.instagram.com/me/media?fields=id,posts&access_token=${instaAccessToken}`;

  const getUserTopPosts = async () => {
    const resp = await axios.get(getUserPostsEP);
    const allPosts = await resp.data.data; //all post ids page idx->1

    //filtering top 6
    allPosts.map((post, idx) => {
      if (idx < 6) {
        getPostImg(post.id);
      }
    });
  };
  const getPostImg = async (postID) => {
    const getPostInfoEP = `https://graph.instagram.com/${postID}?fields=id,media_type,media_url,username,timestamp&access_token=${instaAccessToken}`;
    const resp = await axios.get(getPostInfoEP);
    const postImgURL = resp.data.media_url;
    let tmpPosts = [...posts];
    if (!tmpPosts.includes(postImgURL)) {
      tmpPosts.push(postImgURL);
      setPosts(tmpPosts); //storing imgUrl in posts state
    }
  };

  useEffect(() => {
    getUserTopPosts();
    console.log("posts", posts);
  }, []);
  return {
    posts,
  };
};

export default useInstaPostsFetch;
