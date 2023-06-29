// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import NavScrollExample from "./components/Navbars";
import User from "./components/User";
import Pagenotfound from "./components/Pagenotfound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavScrollExample />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:name" element={<User />} />
          <Route path="/*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
