import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [checknull, setChecknull] = useState(false);
  // const [login, setLogin] = useState(false);

  const navigate = useNavigate();

  function loginHandler(e) {
    e.preventDefault();
    console.log(user, password);
    console.log(user.length, password.length);

    if (user.length < 1 || password.length < 1) {
      setChecknull(true);
    } else {
      setChecknull(false);
      if (user === "prksh" && password === "prksh") {
        navigate("/");
        localStorage.setItem("login", true);
      } else {
        if (user !== "" || password !== "") {
          alert("Wrong username or password");
          console.log("Wrong username or password");
        }
      }
    }
  }

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  });

  return (
    <>
      <center>
        <div style={{ padding: "24px", width: "50%" }}>
          <h1>Sign In</h1>
          <form onSubmit={loginHandler}>
            <input
              className="form-control mt-2"
              onChange={(e) => setUser(e.target.value)}
              type="text"
              placeholder="username"
            />

            <input
              className="form-control mt-2"
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="password"
            />

            {checknull ? (
              <h6
                className="form-control"
                style={{
                  textAlign: "center",
                  marginTop: "8px",
                  backgroundColor: "lightpink",
                }}
              >
                Username or Password can't be blank
              </h6>
            ) : (
              ""
            )}
            <button
              className="btn btn-outline-primary mt-2"
              style={{ width: "24%", marginRight: "8px" }}
              type="submit"
            >
              Sign In
            </button>
            <button className="btn btn-outline-danger mt-2" type="reset">
              Clear
            </button>
          </form>
        </div>
      </center>
    </>
  );
}

export default Login;
