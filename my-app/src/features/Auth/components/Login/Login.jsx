import React, { useState } from "react";
import imageUser from "../../../../assets/image/iconuser.png";
import facebook from "../../../../assets/image/facebook.png";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  const [dataLogin, setDataLogin] = useState({
    username: "",
    password: "",
  });

  const dataChangeForm = (event) => {
    setDataLogin({ ...dataLogin, [event.target.name]: event.target.value });
  };

  return (
    <form className="login">
      <img src={imageUser} className="login__icon" alt="" />

      <p className="login__title">Chào mọi người đến với Aurora Blog</p>

      <div className="login__withapp">
        <Link to="" className="login__withapp__facebook">
          <p>Đăng nhập với facebook</p>
          <img src={facebook} alt="" />
        </Link>
      </div>

      <div className="login__input">
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={dataChangeForm}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={dataChangeForm}
        />
      </div>

      <button className="login__action"> Login</button>
      <div className="signup">
        <p>Nếu bạn chưa có tài khoản</p>
        <Link to="/register">Đăng kí</Link>
      </div>
    </form>
  );
}

export default Login;
