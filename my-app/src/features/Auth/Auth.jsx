import React from "react";
import Register from "../Auth/components/Register/Register";
import Login from "../Auth/components/Login/Login";

function Auth({ authRoute }) {
  return <div>{authRoute === "register" ? <Register /> : <Login />}</div>;
}

export default Auth;
