import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import imgKatine from "../../../img/php-bootstrap-kantine_adminsystem_2.png"; 

const Kantine = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="container">
        <span id="skjemabygger"></span>
        <h1 className="text-start">Kantine admin</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                  <div className="col-md-8">
                      <p className="text-start">
                        Utviklet et kantinesystem med mulighet for flere avdelinger hvor avdelingsleder kunne legge til brukere og bestille for hele avdelingen,
                        og enkeltbrukere kunne bestille mat for seg selv via et forenklet grensesnitt.
                        <br /><br />
                        All kode er dessverre firmaets eller kunders eiendom, så derfor kan jeg bare vise til dette bilde.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <img
                        className="img-thumbnail"
                        src={imgKatine}
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

export default Kantine;