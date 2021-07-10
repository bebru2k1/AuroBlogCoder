import React from "react";
import logo from "../../assets/image/glow.png";
import "./Headers.css";
import { Link } from "react-router-dom";
const Headers = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="header__bar"></div>
      <ul className="header__menu">
        <li className="header__menu__link">
          <Link to="/" className="menu__home">
            Trang chủ
          </Link>
        </li>
        <li className="header__menu__link ">
          <Link to="/post" className="menu__post ">
            Bài viết của tôi
          </Link>
        </li>
        <li className="header__menu__link ">
          <Link to="/about" className="menu__about">
            CV của tôi
          </Link>
        </li>
        <li className="header__menu__link">
          <Link to="/about" className="menu__project">
            Một số dự án của tôi
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Headers;
