import React, { useEffect, useState } from "react";
import imageMe from "../../assets/image/me.jpg";
import "./Home.css";
import Typer from "../Common/Typing";
function Home() {
  return (
    <div className="banner">
      <div className="banner__left">
        <p className="banner__left__title">Hi, Mình là </p>
        <Typer
          classNames={["box", "box"]}
          content={["Đức Anh", "Web Developer"]}
          speed={200}
        />

        <div className="banner-contact"></div>
      </div>
      <div className="banner__right">
        <img src={imageMe} alt="" />
      </div>
    </div>
  );
}

export default Home;
