import React from "react";
import { Link, useParams, withRouter } from "react-router-dom";

// You must make sure to check this protected route even when manually typing in url
// or you can easily bypass the auth
const BadBoy = () => {
  const { firstname, lastname } = useParams();
  return (
    <div>
      <h1>
        {" "}
        User: {firstname} {lastname}{" "}
      </h1>
      <p>Kicked, you don't belong here</p>
      <button>
        <Link to="/main">Go back.</Link>
      </button>
    </div>
  );
};

export default withRouter(BadBoy);
