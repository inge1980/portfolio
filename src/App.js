import React from "react";
import BootstrapNavbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Me from "./components/Intro/Me/Me";
import Projects from "./components/Projects/Projects";
//import Js1k from "./components/Projects/Pages/Js1k";
import Imdb from "./components/Projects/Pages/Imdb";
import AllSkills from "./components/AllSkills/AllSkills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row mb-3 text-center">
          <BootstrapNavbar />
          <Routes>
            <Route path="/portfolio/" element={<Intro />}></Route>
            <Route path="/portfolio/me/" element={<Me />}></Route>
            <Route path="/portfolio/projects/" element={<Projects />}></Route>
            {/*<Route path="/portfolio/projects/js1k/" element={<Js1k />}></Route>*/}
            <Route path="/portfolio/projects/imdb/" element={<Imdb />}></Route>
            <Route path="/portfolio/skills/" element={<AllSkills />}></Route>
            <Route path="/portfolio/contact/" element={<Contact />}></Route>
            <Route path="/" exact element={<App />}></Route>
          </Routes>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};
export default App;
