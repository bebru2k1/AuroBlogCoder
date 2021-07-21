import React from "react";
import { Route, Switch } from "react-router-dom";
import Headers from "../Headers/Headers";
import Footer from "../Footer/Footer";
function HFRoute({ ...rest }) {
  console.log("rest", rest);
  return (
    <>
      <Headers />
      <Route {...rest} />
      <Footer />
    </>
  );
}

export default HFRoute;
