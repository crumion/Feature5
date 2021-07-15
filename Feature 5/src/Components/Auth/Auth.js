import React from "react";
import { Link, Redirect } from "react-router-dom";

// Checking to see if the user is already logged in or not
const AuthModule = () => {
  var start = window.sessionStorage.getItem("isAuth");

  if (start === "true") {
    var decision = 1;
  } else {
    var decision = 0;
  }

  return (
    <div>
      {decision ? (
        <Redirect to={"/user/Michael/Wicks"} />
      ) : (
        <div>
          <Link to="/register">
            <button>Register</button>
          </Link>
          <br />
          <br />
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AuthModule;
