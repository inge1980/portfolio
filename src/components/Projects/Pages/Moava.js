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
                        Hos min tidligere arbeidsgiver var jeg med på å lage et
                        omfattende administrativt system, også kalt CMS. Da all
                        koden er eiendom av Moava AS, har jeg istedet valgt å
                        samle linker til endel skoler i område. Disse skolene
                        bruker Moavas CMS til å publisere nyheter og
                        informasjon, men også andre nyttige ting som kan
                        forenkle en lærers digitale hverdag.
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
