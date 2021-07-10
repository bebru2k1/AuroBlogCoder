import React, { useEffect } from "react";
import "./HomePost.css";

import axios from "../../../../configs/axiosConfig";

function HomePost() {
  const getPostHome = async () => {
    const respone = await axios.get("/posts");
    console.log(respone.data.posts);
  };
  useEffect(() => {
    getPostHome();
  }, []);

  return (
    <div className="homepost">
      <p className="homepost__title">Các bài viết của mình</p>
      <div className="homepost__post">
        <div className="homepost__post__item">
          <img
            src="https://images.unsplash.com/photo-1625602187345-8f83e1213bfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt=""
          />
          <p className="homepost__post__item__des">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePost;
