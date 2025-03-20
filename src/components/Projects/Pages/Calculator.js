import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import calculator from "../../../img/react-native-calculator.png";
import ScrollToTop from './../../ScrollToTop/ScrollToTop';


const Calculator = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="nyhetsfelt"></span>
        <h1 className="text-start">Avansert kalkulator med PEMDAS-støtte</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-50">
                          <a href={calculator} target="_blank" rel="noopener noreferrer" title="Åpne bildet i ny fane">
                            <img
                              className="img-thumbnail"
                              src={calculator}
                              alt="Eksempel av kalkulator"
                            />
                          </a>
                        </div>
                        <div className="wordBreakText">
                          <p className="text-start">
                            For å teste mine ferdigheter i React Native, utviklet jeg en mobilapplikasjon som implementerte en kalkulator for å utføre beregninger i henhold til PEMDAS-reglene (parenteser, eksponenter, multiplikasjon, divisjon, addisjon, subtraksjon). Appen måtte håndtere både enkle og komplekse matematiske uttrykk og gi nøyaktige resultater, samtidig som den skulle ha et intuitivt brukergrensesnitt. Jeg implementerte også annonseintegrasjon ved hjelp av Google Mobile Ads SDK.
                          </p>
                          <p className="text-start">
                            Prosjektet gav meg muligheten til å fordype meg i React Native og utvikle en app som demonstrerer mine ferdigheter i mobilutvikling. Kalkulatoren implementerte avansert matematikk, støttet dynamisk input, og ble designet med et brukervennlig grensesnitt som gjør det enkelt for brukeren å utføre beregninger på mobilen.
                          </p>
                          <p className="text-start">
                            Appen ble utviklet og testet med vellykkede resultater, og den viser hvordan komplekse matematiske operasjoner kan implementeres på en enkel måte i en mobilapp. Selv om appen ikke ble publisert på Google Play, er den tilgjengelig på GitHub som et privat prosjekt og fungerer som et praktisk bevis på mine ferdigheter i React Native og mobilutvikling.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 backLink">
                      <React.Fragment>
                        <Nav.Link className="link-primary" onClick={() => navigate(-1)}>
                          Gå tilbake
                        </Nav.Link>
                      </React.Fragment>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Calculator;