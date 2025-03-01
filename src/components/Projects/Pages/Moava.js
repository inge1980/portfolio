import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import MoavaData from "./MoavaData";
import skoler from "../../../img/skoler_moava.png";

const Moava = () => {
  return (
    <React.Fragment>
      <div className="container">
        <span id="moava"></span>
        <h1 className="text-start">Moava</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-6">
                      <p className="text-start">
                        Hos min tidligere arbeidsgiver var jeg med på å videreutvikle et
                        omfattende administrativt system, også kalt <abbr title="Content Management System&#13;System som lar deg opprette og redigere innhold på nettsider, intranett og nettbutikker.">CMS</abbr>. 
                        Jeg har samlet endel lenker til skoler i mitt nærområde som bruker Moavas CMS til å publisere nyheter og
                        informasjon, men jeg kan dessverre ikke lenke til administrasjonsdelen som har nyttige verktøy som forenkler en lærers digitale hverdag, da <abbr title="Software as a service&#13;Skybasert løsning som gir brukere tilgang til programvareapplikasjoner uten behov for å installere eller vedlikeholde programvaren.">SaaS</abbr> produktet er eiendom av Moava AS.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <img
                        className="img-thumbnail"
                        src={skoler}
                        alt="Eksempel av skoler nettside"
                      />
                    </div>
                    <div className="col-md-12">
                      <ul className="list-group text-start">
                        {MoavaData.map((item, index) => {
                          return (
                            <React.Fragment>
                              <li className="list-group-item">
                                <Nav.Link
                                  href={item.link}
                                  className="link-primary"
                                  rel="noreferrer"
                                  target="_blank"
                                >
                                  {item.link}
                                </Nav.Link>{" "}
                                ({item.text})
                              </li>
                            </React.Fragment>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="col-md-12 backLink">
                      <React.Fragment>
                        <LinkContainer to="/portfolio/projects/">
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

export default Moava;
