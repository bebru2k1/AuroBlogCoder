import React, { useEffect, useState } from "react";
import "./HomePost.css";
import { Link } from "react-router-dom";
import axios from "../../../../configs/axiosConfig";
import { postSelector, getHomePost } from "../../PostSlice";
import { useSelector, useDispatch } from "react-redux";
function HomePost() {
  const dispatch = useDispatch();
  const { posts } = useSelector(postSelector);

  useEffect(() => {
    dispatch(getHomePost("/posts"));
  }, [dispatch]);
  console.log(posts);
  return (
    <div className="homepost">
      <p className="homepost__title">Các bài viết của mình</p>
      <div className="homepost__post">
        {posts?.map((posts) => (
          <figure className="homepost__post__item" key={posts._id}>
            <img src={posts.image} alt="" />
            <Link
              to={`/posts/${posts._id}`}
              className="homepost__post__item__subcard"
            >
              <p className="homepost__post__item__des" key={posts._id}>
                {posts.title}
              </p>
              <div className="flex">
                <p className="homepost__post__item__time">
                  {posts.createdAt.slice(0, 10)}
                </p>
                {/* <p className="homepost__post__item__author">
                  {posts.user.displayName}
                </p> */}
              </div>
            </Link>
          </figure>
        ))}
      </div>
      <div className="homepost_addlink">
        <Link to="/posts">Xem Thêm Bài Viết </Link>
      </div>
    </div>
  );
}

export default HomePost;
