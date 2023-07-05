// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
// import NavScrollExample from "./components/Navbars";
import User from "./components/User";
import Pagenotfound from "./components/Pagenotfound";
import Nav from "./components/Nav";
import Company from "./components/Company";
import Channel from "./components/Channel";
import Other from "./components/Other";
import Login from "./components/Login";
import Protected from "./components/Protected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavScrollExample /> */}
        <Nav />
        <Routes>
          <Route path="/" element={<Protected Component={Home} />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<Protected Component={About} />} />
          <Route path="/contact" element={<Contact />}>
            <Route path="company" element={<Company />} />
            <Route path="channel" element={<Channel />} />
            <Route path="other" element={<Other />} />
          </Route>
          <Route path="/user/:name" element={<User />} />
          <Route path="/*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
