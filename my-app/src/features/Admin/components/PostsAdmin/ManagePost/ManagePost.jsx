import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, postSelector } from "../../../../Post/PostSlice";
function ManagePost() {
  const postsState = useSelector(postSelector);
  const dispatch = useDispatch;
  useEffect(() => {
    dispatch(getPosts("/posts"));
  }, [dispatch]);
  console.log(postsState);
  return <div>Ahihi123</div>;
}

export default ManagePost;
