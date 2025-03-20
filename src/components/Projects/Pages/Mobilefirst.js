import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import mobilefirst from "../../../img/php-bootstrap-mobile-first.png";


const Mobilfirst = () => {
  return (
    <React.Fragment>
      <div className="container">
        <span id="nyhetsfelt"></span>
        <h1 className="text-start">Bootstrap-migrering & mobilvennlig design</h1>
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
                            src={mobilefirst}
                            alt="Eksempel av mobiltilpasset forbedring"
                          />
                        </div>
                        <div className="wordBreakText">
                          <p className="text-start">
                            I overgangen fra vanlig CSS til Bootstrap rammeverket, støtte vi på problemer med å tilpasse eksisterende kolonnebredder som tidligere hadde blitt skrevet inn manuelt i plattformen. Etter å ha fått tilbakemeldinger fra pilotkundene som testet den mobilvennlige versjonen, oppdaget vi at flere hadde brukt inkonsistente verdier. Jeg analyserte dataene fra 1000 kunder, identifiserte 6 tydelige mønstre, og utviklet en algoritme for å konvertere de feilaktige verdiene til riktige Bootstrap-bredder. De resterende kolonnene ble satt til standard Bootstrap-innstillinger basert på antall kolonner.
                          </p>
                          <p className="text-start">
                            Løsningen forenklet overgangen til responsivt design, og bidro til å redusere feilene som oppstod på grunn av tidligere manuell inntasting av kolonnebredder. Den automatiserte prosessen frigjorde tid for utviklerne og forbedret brukeropplevelsen for skolene som brukte plattformen.
                          </p>
                          <p className="text-start">
                            Den automatiserte algoritmen tilpasset kolonnebreddene tilnærmet likt hva de hadde vært tidligere, og de ble fremover satt innenfor fastsatte rammer. Løsningen bidro til en raskere og mer konsistent overgang til et mobilvennlig design. Pilotkundene gav oss verdifulle tilbakemeldinger før full implementering, noe som bidro til å unngå store feil og gi en mer kontrollert utrulling.
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

export default Mobilfirst;