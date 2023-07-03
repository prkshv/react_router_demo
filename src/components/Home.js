import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Home(props) {
  const location = useLocation();
  console.log(location);
  // const navigate = useNavigate();

  // let navToPage = (url) => {
  //   navigate(url);
  // };

  return (
    <div>
      <h1>This is home component</h1>
      {/* <Link to="/about">About Link</Link> */}

      <br />
      <br />

      {/* <button onClick={() => navToPage("/about")}>About 1</button>
      <button onClick={() => navigate("/about")}>About 1</button> */}
    </div>
  );
}

export default Home;
