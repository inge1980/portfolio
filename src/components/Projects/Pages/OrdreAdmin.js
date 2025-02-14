import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ordreadmin from "../../../img/php-bootstrap-order_admin_system.png"; 


const OrderAdmin = () => {
  return (
    <React.Fragment>
      <div className="container">
        <span id="skjemabygger"></span>
        <h1 className="text-start">Ordreadministrasjon</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                  <div className="col-md-8">
                      <p className="text-start">
                        Skilte ut eget ordresystem fra et eksisterende&nbsp;
                        <abbr title="Enterprise Resource Planning&#13;Programvare som støtter opp om et flertall av en bedrifts virksomhetsområder,&#13;som ordre, produksjon, lager, salg, innkjøp og økonomi.">ERP</abbr>-system. 
                        Begrenset tilgang, og forenklet brukergrensesnitt som kan brukes av et ordrekontor.
                        <br/><br/>All kode er dessverre firmaets eller kunders eiendom, så derfor kan jeg bare vise til dette bilde.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <img
                        className="img-thumbnail"
                        src={ordreadmin}
                        alt="Eksempel av nettbutikk"
                      />
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

export default OrderAdmin;