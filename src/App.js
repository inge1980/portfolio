import React from "react";
import BootstrapNavbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Skillsets from "./components/Skillsets/Skill";
import MoreSkills from "./components/MoreSkills/MoreSkills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div class="row mb-3 text-center">
          <BootstrapNavbar />
          <Intro />
          <Projects />
          <Skillsets />
          <MoreSkills />
          <Contact />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};
export default App;
