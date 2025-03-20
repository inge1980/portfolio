import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import stackoverflow from "../../../img/react-stackoverflow.png";

const Stackoverflow = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="container">
        <span id="nyhetsfelt"></span>
        <h1 className="text-start">Datavisualisering med Stack Overflow-API</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-50">
                          <a href={stackoverflow} target="_blank" rel="noopener noreferrer" title="Åpne bildet i ny fane">
                            <img
                              className="img-thumbnail"
                              src={stackoverflow}
                              alt="Eksempel av mobiltilpasset forbedring"
                            />
                          </a>
                        </div>
                        <div className="wordBreakText">
                          <p className="text-start">
                            Jeg bygget en applikasjon for å hente og visualisere brukerdata fra Stack Overflow API ved hjelp av React og Chart.js. Dataene ble presentert i et lettfattelig kakediagram som viste en oversikt over mine bidrag på plattformen.
                          </p>
                          <p className="text-start">
                            Dette prosjektet gjorde det mulig å vise frem egne bidrag og engasjement på Stack Overflow på en mer visuell og intuitiv måte. Brukeren får raskt en oversikt over hva de har bidratt med, og hvordan de er engasjert med andre utviklere.
                          </p>
                          <p className="text-start">
                            Økt synlighet og personlig merkevarebygging som utvikler, ettersom jeg kunne bruke applikasjonen til å vise mine tekniske ferdigheter og kunnskap på en enkel måte. Prosjektet gav meg også innsikt i hvordan man håndterer API-integrasjoner i React.                            
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

export default Stackoverflow;
