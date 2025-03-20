import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import osedalen from "../../../img/osedalen.png";

const Osedalen = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="container">
        <span id="nyhetsfelt"></span>
        <h1 className="text-start">Nyhetsfeed fra 2013 - Osedalen.org</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-50">
                          <a href={osedalen} target="_blank" rel="noopener noreferrer" title="Åpne bildet i ny fane">
                            <img
                              className="img-thumbnail"
                              src={osedalen}
                              alt="Eksempel av mobiltilpasset forbedring"
                            />
                          </a>
                        </div>
                        <div className="wordBreakText">
                          <p className="text-start">
                            Opprettet en automatisert nyhetsaggregator basert på WordPress som samlet og publiserte lokalnyheter fra forskjellige kilder, inkludert RSS-feeder, vær- og trafikkvarsler, samt Twitter-meldinger fra politiet. Systemet var designet for enkel godkjenning og publisering.
                          </p>
                          <p className="text-start">
                            Brukerne fikk en effektiv og kontinuerlig oppdatering av lokalnyheter uten behov for manuelt arbeid fra administrator. Automatiseringen reduserte tiden brukt på nyhetsoppdateringer og gjorde det lettere å holde innholdet friskt og relevant for lokalsamfunnet.                            
                          </p>
                          <p className="text-start">
                            Skapte en aktiv og lett tilgjengelig nyhetskilde for lokalbefolkningen frem til 2018, med automatisk oppdaterte nyheter og varsler.                            
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

export default Osedalen;
