import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from 'react-redux'
import Particles from "react-particles-js";
import Headers from "./components/Headers/Headers";
import Home from "./layouts/Home/Home"
import ProtectedRoute from "./components/Common/ProtectedRoute";
import HFRoute from "./components/Common/HFRoute";
import { loginToken } from "./features/Auth/AuthSlice";
import setAuthToken from "./configs/setAuthToken";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Auth from "./features/Auth/Auth";
import Footer from "./components/Footer/Footer";
import Admin from "./features/Admin/Admin";
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem("aurBlog-acc")) {
      console.log(localStorage.getItem("aurBlog-acc"));
      setAuthToken(localStorage.getItem("aurBlog-acc"));
      dispatch(loginToken({ token: localStorage.getItem("aurBlog-acc") }));
    }
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Particles /> */}
        {/* <Headers /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" render={() => <Auth authRoute="login" />} />
          <Route exact path="/register" render={() => <Auth authRoute="register" />} />

          <Route path="/admin" component={Admin} />
          <ProtectedRoute path='/posts/:id' component={Headers} />
        </Switch>

      </div>
    </BrowserRouter >

  );
}

export default App;
