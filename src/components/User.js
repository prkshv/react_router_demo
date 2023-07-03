import React from "react";
import { useLocation, useParams } from "react-router-dom";

function User(props) {
  const location = useLocation();
  console.log(location);

  const param = useParams();
  const { name } = param;
  return (
    <div>
      <h1>This is {name}'s profile page</h1>
    </div>
  );
}

export default User;
