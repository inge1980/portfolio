import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import erp from "../../../img/php-erp-blurry.png";

const ERP = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="container">
        <span id="nyhetsfelt"></span>
        <h1 className="text-start">ERP Videreutvikling & Serveradministrasjon</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-25">
                          <a href={erp} target="_blank" rel="noopener noreferrer" title="Åpne bildet i ny fane">
                            <img
                              className="img-thumbnail"
                              src={erp}
                              alt="Eksempel på ERP"
                            />
                          </a>
                        </div>
                        <div className="wordBreakText">
                          <p className="text-start">
                            Gjennomførte kontinuerlige forbedringer og tilpasninger av et ERP-system basert på kundenes behov. Håndterte også serveradministrasjon via IIS og SQL Server, inkludert databaseoptimalisering og driftssikring. Denne oppdateringen inkluderte også integrasjoner med nettbutikken for å sikre at begge systemene fungerte optimalt sammen.
                          </p>
                          <p className="text-start">
                            Sikret at ERP-systemet forble oppdatert og relevant for virksomhetene som brukte det, samtidig som ytelse og sikkerhet ble optimalisert. Gjennom god serveradministrasjon ble både ERP-systemet og nettbutikken stabile og sikre.
                          </p>
                          <p className="text-start">
                            Bedre respons og stabilitet i ERP-systemet, raskere databaseforespørsler og forbedret driftssikkerhet. Brukerne fikk et mer tilpasset system som møtte deres spesifikke krav, og begge systemene (ERP og nettbutikk) fungerte sømløst sammen.
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

export default ERP;
