import React from "react";
import BootstrapNavbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Projects2 from "./components/Projects/ProjectsAll-in-one";
import Js1k from "./components/Projects/Pages/Js1k";
import Imdb from "./components/Projects/Pages/Imdb";
import Moava from "./components/Projects/Pages/Moava";
import Episteme from "./components/Projects/Pages/Episteme";
import Newsfield from "./components/Projects/Pages/Newsfield";
import FormBuilder from "./components/Projects/Pages/FormBuilder";
import Shoplet from "./components/Projects/Pages/Shoplet";
import OrdreAdmin from "./components/Projects/Pages/OrdreAdmin";
import PIM from "./components/Projects/Pages/PIM";
import Kantine from "./components/Projects/Pages/Kantine";
import Shoppinglist from "./components/Projects/Pages/Shoppinglist";
import Need4sms from "./components/Projects/Pages/Need4sms";
import Calculator from "./components/Projects/Pages/Calculator";
import Mobilefirst from "./components/Projects/Pages/Mobilefirst";
import UserInsight from "./components/Projects/Pages/UserInsight";
import Osedalen from "./components/Projects/Pages/Osedalen";
import Stackoverflow from "./components/Projects/Pages/Stackoverflow";
import Quiz from "./components/Projects/Pages/Quiz";
import ThemePicker from "./components/Projects/Pages/ThemePicker";
import AllSkills from "./components/AllSkills/AllSkills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes  } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      <div className="container">
        <div className="row mb-3 text-center">
          <BootstrapNavbar />
          <Routes>
            <Route path="/portfolio/"                         element={<Intro />}></Route>
            <Route path="/portfolio/projects/"                element={<Projects />}></Route>
            <Route path="/portfolio/projects2/"               element={<Projects2 />}></Route>
            <Route path="/portfolio/projects/js1k/"           element={<Js1k />}></Route>
            <Route path="/portfolio/projects/imdb/"           element={<Imdb />}></Route>
            <Route path="/portfolio/projects/moava/"          element={<Moava />}></Route>
            <Route path="/portfolio/projects/episteme/"       element={<Episteme />}></Route>
            <Route path="/portfolio/projects/nyhetsfelt/"     element={<Newsfield />}></Route>
            <Route path="/portfolio/projects/skjemabygger/"   element={<FormBuilder />}></Route>
            <Route path="/portfolio/projects/shoplet/"        element={<Shoplet />}></Route>
            <Route path="/portfolio/projects/ordreadmin/"     element={<OrdreAdmin />}></Route>
            <Route path="/portfolio/projects/PIM/"            element={<PIM />}></Route>
            <Route path="/portfolio/projects/kantine/"        element={<Kantine />}></Route>
            <Route path="/portfolio/projects/shoppinglist/"   element={<Shoppinglist />}></Route>
            <Route path="/portfolio/projects/need4sms/"       element={<Need4sms />}></Route>
            <Route path="/portfolio/projects/calculator/"     element={<Calculator />}></Route>
            <Route path="/portfolio/projects/mobilefirst/"    element={<Mobilefirst />}></Route>
            <Route path="/portfolio/projects/userinsight/"    element={<UserInsight />}></Route>
            <Route path="/portfolio/projects/osedalen/"       element={<Osedalen />}></Route>
            <Route path="/portfolio/projects/stackoverflow/"  element={<Stackoverflow />}></Route>
            <Route path="/portfolio/projects/quiz/"           element={<Quiz />}></Route>
            <Route path="/portfolio/projects/themepicker/"    element={<ThemePicker />}></Route>
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
