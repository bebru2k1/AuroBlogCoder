import React, { useEffect } from "react";
import "./App.css";
import Particles from "react-particles-js";
import Headers from "./components/Headers/Headers";
import Home from "./layouts/Home/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Auth from "./features/Auth/Auth";
function App() {
  return (
    <Router>
      <div className="App">
        <Particles />
        <Headers />

        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/login" render={() => <Auth authRoute="login" />} />

          <Route exact path="/register" render={() => <Auth authRoute="register" />} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
