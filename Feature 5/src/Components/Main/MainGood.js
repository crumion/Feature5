import React from "react";
import { Link, useParams, withRouter } from "react-router-dom";
//import { Redirect, Route } from "react-router-dom";
import { Redirect, useHistory } from "react-router-dom";

const AddGood = () => {
  const { firstname, lastname } = useParams();
  var flag = window.sessionStorage.getItem("isAuth");
  var decision;
  if (flag === "false") {
    decision = 0;
  } else {
    decision = 1;
  }
  return (
    <div>
      {decision ? (
        <Redirect to={"/user/Michael/Wicks"} />
      ) : (
        <Redirect to={"/BadBoy"} />
      )}
      <h1>
        {" "}
        User: {firstname} {lastname}{" "}
      </h1>
      <p>AUTHENTICATED: THIS IS MAIN GOOD</p>
      {/*      <button>
        <Link to="/main">Go back.</Link>
</button> */}
    </div>
  );
};

export default withRouter(AddGood);
