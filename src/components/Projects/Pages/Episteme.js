import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import MoavaData from "./EpistemeData";
import shoplet from "../../../img/shoplet_episteme.png";

const Episteme = () => {
  return (
    <React.Fragment>
      <div className="container">
        <span id="episteme"></span>
        <h1 className="text-start">Episteme</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-8">
                      <p className="text-start">
                        Hos Systemhuset Episteme AS var jeg med på å videreutviklet et&nbsp; 
                        <abbr title="Enterprise Resource Planning&#13;Programvare som støtter opp om et flertall av en bedrifts virksomhetsområder,&#13;som ordre, produksjon, lager, salg, innkjøp og økonomi.">ERP</abbr> system, 
                        samt redesigne systemet fra bunnen. Jeg redesignet også nettbutikken som tar i bruk nevnte ERP. All kode er dessverre firmaets eller kunders eiendom, så derfor har jeg istedet valgt å 
                        samle linker til noen nettsider som tar i bruk systemet.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <img
                        className="img-thumbnail"
                        src={shoplet}
                        alt="Eksempel av nettbutikk"
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
                                  {item.linktext}
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

export default Episteme;
