import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "../../features/Auth/AuthSlice";
function ProtectedRoute({ component: Component, ...rest }) {
  const { authLoading, isAuthenticate } = useSelector(authSelector);

  // if (authLoading) return <div>Loading...</div>;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticate ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default ProtectedRoute;
