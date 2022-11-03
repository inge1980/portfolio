import React from "react";
import BootstrapNavbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
//import Js1k from "./components/Projects/Pages/Js1k";
import Imdb from "./components/Projects/Pages/Imdb";
import Moava from "./components/Projects/Pages/Moava";
import AllSkills from "./components/AllSkills/AllSkills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row mb-3 text-center">
          <BootstrapNavbar />
          <ScrollToTop />
          <Routes>
            <Route path="/portfolio/" element={<Intro />}></Route>
            <Route path="/portfolio/projects/" element={<Projects />}></Route>
            {/*<Route path="/portfolio/projects/js1k/" element={<Js1k />}></Route>*/}
            <Route path="/portfolio/projects/imdb/" element={<Imdb />}></Route>
            <Route
              path="/portfolio/projects/moava/"
              element={<Moava />}
            ></Route>
            <Route path="/portfolio/skills/" element={<AllSkills />}></Route>
            <Route path="/portfolio/contact/" element={<Contact />}></Route>
            <Route path="/" exact element={<Intro />}></Route>
            <Route
              path="*"
              element={<div>Denne siden finnes ikke.</div>}
            ></Route>
          </Routes>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};
export default App;
