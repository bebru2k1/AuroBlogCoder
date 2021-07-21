import React from "react";
import "./PostAdmin.css";
import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";
import * as Icon from "react-feather";
import ManagePost from "./ManagePost/ManagePost";
function PostsAdmin() {
  const { url, path } = useRouteMatch();
  console.log(url);
  return (
    <div className="postadmin">
      <ul className="postadmin__header">
        <li className="postadmin__header__item">
          <NavLink to={`${url}`} activeClassName="activeLink">
            <span className="postadmin__header__item__title ">
              Quản lý bài viết
            </span>
            <Icon.Box className="postadmin__header__item__icon" />
          </NavLink>
        </li>
        <li className="postadmin__header__item">
          <NavLink to={`${url}/create`} activeClassName="activeLink">
            <span className="postadmin__header__item__title">
              Thêm bài viết
            </span>
            <Icon.PlusCircle className="postadmin__header__item__icon" />
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}`} component={ManagePost}></Route>
        <Route path={`${path}/create`}></Route>
      </Switch>
    </div>
  );
}

export default PostsAdmin;
