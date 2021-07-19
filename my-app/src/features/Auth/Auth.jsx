import React from "react";
import Register from "../Auth/components/Register/Register";
import Login from "../Auth/components/Login/Login";
import { Redirect } from "react-router-dom";
import { authSelector } from "./AuthSlice";
import { useSelector } from "react-redux";
function Auth({ authRoute }) {
  const { authLoading, isAuthenticate } = useSelector(authSelector);
  if (isAuthenticate) return <Redirect to="/" />;
  else {
    return <div>{authRoute === "register" ? <Register /> : <Login />}</div>;
  }
}

export default Auth;
