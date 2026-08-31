import React from "react";
import BootstrapNavbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/ProjectsAll-in-one";
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
import EpistemeERP from "./components/Projects/Pages/EpistemeERP";
import Iktplan from "./components/Projects/Pages/Iktplan";
import ExportResults from "./components/Projects/Pages/ExportResults";
import AIRagCandidate from "./components/Projects/Pages/AIRagCandidateAssistant";
import AzureDevOps from "./components/Projects/Pages/AzureDevOpsTerraform";
import LostAndFoundApi from "./components/Projects/Pages/LostAndFoundApi";
import N8nContentGenerator from "./components/Projects/Pages/N8nContentGenerator";
import AllSkills from "./components/AllSkills/AllSkills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      <div className="container">
        <div className="row mb-3 text-center">
          <BootstrapNavbar />
          <Routes>
            <Route path="/"                         element={<Intro />}></Route>
            <Route path="/projects/"                element={<Projects />}></Route>
            <Route path="/projects/js1k/"           element={<Js1k />}></Route>
            <Route path="/projects/imdb/"           element={<Imdb />}></Route>
            <Route path="/projects/moava/"          element={<Moava />}></Route>
            <Route path="/projects/episteme/"       element={<Episteme />}></Route>
            <Route path="/projects/nyhetsfelt/"     element={<Newsfield />}></Route>
            <Route path="/projects/skjemabygger/"   element={<FormBuilder />}></Route>
            <Route path="/projects/shoplet/"        element={<Shoplet />}></Route>
            <Route path="/projects/ordreadmin/"     element={<OrdreAdmin />}></Route>
            <Route path="/projects/PIM/"            element={<PIM />}></Route>
            <Route path="/projects/kantine/"        element={<Kantine />}></Route>
            <Route path="/projects/shoppinglist/"   element={<Shoppinglist />}></Route>
            <Route path="/projects/need4sms/"       element={<Need4sms />}></Route>
            <Route path="/projects/calculator/"     element={<Calculator />}></Route>
            <Route path="/projects/mobilefirst/"    element={<Mobilefirst />}></Route>
            <Route path="/projects/userinsight/"    element={<UserInsight />}></Route>
            <Route path="/projects/osedalen/"       element={<Osedalen />}></Route>
            <Route path="/projects/stackoverflow/"  element={<Stackoverflow />}></Route>
            <Route path="/projects/quiz/"           element={<Quiz />}></Route>
            <Route path="/projects/themepicker/"    element={<ThemePicker />}></Route>
            <Route path="/projects/epistemeerp/"    element={<EpistemeERP />}></Route>
            <Route path="/projects/iktplan/"        element={<Iktplan />}></Route>
            <Route path="/projects/exportresults/"  element={<ExportResults />}></Route>

            <Route path="/projects/airagcandidate/" element={<AIRagCandidate />}></Route>
            <Route path="/projects/azuredevops/"    element={<AzureDevOps />}></Route>
            <Route path="/projects/lostnfoundapi/"  element={<LostAndFoundApi />}></Route>

            <Route path="/projects/n8ncontentgenerator/"  element={<N8nContentGenerator />}></Route>

            <Route path="/skills/" element={<AllSkills />}></Route>
            <Route path="/contact/" element={<Contact />}></Route>
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