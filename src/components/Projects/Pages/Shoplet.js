import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import shoplet from "../../../img/php-bootstrap-shoplet.png"; 


const Shoplet = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="container">
        <span id="skjemabygger"></span>
        <h1 className="text-start">Nettbutikk</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-8">
                      <p className="text-start">
                        Hos Systemhuset Episteme AS redesignet jeg <a href="https://shoplet.flytcatering.no/" target="_blank" alt="Nettbutikk designet av Episteme, som tar i bruk ERP systemet.">en nettbutikk tilpasset mobilbruk</a>, og var med på å utvikle REST API som også ble tatt i bruk her. Nettsiden blir ikke lengre vedlikeholdt, da dette kun var en midlertidig løsning i overgangen til REST API, men ta gjerne en titt via lenken. All kode er dessverre firmaets eller kunders eiendom. 
                      </p>
                    </div>
                    <div className="col-md-4">
                      <img
                        className="img-thumbnail"
                        src={shoplet}
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

export default Shoplet;