import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import userinsight from "../../../img/javascript-user-insight-google-analytics.png";


const UserInsight = () => {
  return (
    <React.Fragment>
      <div className="container">
        <span id="nyhetsfelt"></span>
        <h1 className="text-start">Analyse & trafikkoptimalisering</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-50">
                          <img
                            className="img-thumbnail"
                            src={userinsight}
                            alt="Eksempel på analyse & trafikkoptimalisering"
                          />
                        </div>
                        <div className="wordBreakText">
                          <p className="text-start">
                            Hos Moava tok jeg initiativ til å implementere Google Tag Manager (GTM) sammen med Google Analytics (GA) for å få innsikt i hvordan potensielle kunder navigerte på nettstedet vårt. Jeg kartla kundereisen frem til handlingen "Bestill demo" og satte opp sporing for viktige hendelser som klikk og sidevisninger.
                          </p>
                          <p className="text-start">
                            Prosjektet gav oss innsikt i brukeradferden på nettstedet, og identifiserte spesifikke områder i kundereisen som hadde høy avvisningsfrekvens eller der brukerne droppet ut. Selv om prosjektet ikke resulterte i umiddelbare forbedringer, gav det oss et klart bilde av hvilke deler av nettstedet som måtte optimaliseres. Denne innsikten var viktig for å identifisere utfordringer og forbedre brukeropplevelsen på lang sikt.
                          </p>
                          <p className="text-start">
                            Gjennom prosjektet utviklet jeg ferdigheter innen webanalyse og data-drevet markedsføring. Jeg fikk praktisk erfaring med Google Tag Manager og Google Analytics, og lærte hvordan vi kan bruke data for å optimere digitale strategier. Prosjektet la et solid grunnlag for fremtidige tiltak som kan forbedre konverteringsraten på nettstedet, og har vært et viktig skritt mot en mer datadrevet tilnærming i selskapet.                            
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 backLink">
                      <React.Fragment>
                        <LinkContainer to="/portfolio/projects2/">
                          <Nav.Link className="link-primary" href="#projects">
                            Gå tilbake
                          </Nav.Link>
                        </LinkContainer>
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

export default UserInsight;