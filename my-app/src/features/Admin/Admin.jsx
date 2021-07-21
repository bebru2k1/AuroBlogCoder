import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NavbarAdmin from "./components/NavbarAdmin/NavbarAdmin";
import PostsAdmin from "./components/PostsAdmin/PostsAdmin";
function Admin() {
  const { url, path } = useRouteMatch();
  return (
    <div className="admin" style={{ backgroundColor: "white", width: "100vh" }}>
      <NavbarAdmin />

      <Switch>
        <Route exact path={`${path}/posts`} component={PostsAdmin} />
      </Switch>
    </div>
  );
}

export default Admin;
