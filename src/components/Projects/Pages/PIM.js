import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import imgPIM from "../../../img/php-bootstrap-PIM_admin_system.png"; 


const PIM = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="container">
        <span id="skjemabygger"></span>
        <h1 className="text-start">PIM - Product Information Management</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                  <div className="col-md-8">
                      <p className="text-start">
                        Videreutviklet et&nbsp;
                        <abbr title="Enterprise Resource Planning&#13;Programvare som støtter opp om et flertall av en bedrifts virksomhetsområder,&#13;som ordre, produksjon, lager, salg, innkjøp og økonomi.">ERP</abbr>-system til et&nbsp;
                        <abbr title="Product Information Management&#13;Sentral håndtering av produktinformasjon for nettbutikker, ERP-systemer, trykte kataloger og mer.">PIM</abbr>-system for å skape bedre oversikt ved å samle informasjon på et sted.
                        <br/><br/>All kode er dessverre firmaets eller kunders eiendom, så derfor kan jeg bare vise til dette bilde.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <img
                        className="img-thumbnail"
                        src={imgPIM}
                        alt="Eksempel av nettbutikk"
                      />
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

export default PIM;