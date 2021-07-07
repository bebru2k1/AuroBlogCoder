import React, { useEffect } from "react";
import "./App.css";
import Particles from "react-particles-js";
import Headers from "./components/Headers/Headers";
import Home from "./components/Home/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Particles />
        <Headers />
        <Home />
        <Switch>
          <Route path="/home">
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
