import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import videoFormBuilder from "../../../vid/form_builder.mp4";


const FormBuilder = () => {
  return (
    <React.Fragment>
      <div className="container">
        <span id="skjemabygger"></span>
        <h1 className="text-start">Skjemabygger</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-3">
                      <p className="text-start">
                      Da jeg jobber hos Moava AS kodet jeg en skjemabygger til deres administrasjonssystem. Her kunne du starte med å velge 
                      blant mange maler, deretter redigere eller duplikere hvert enkelt felt inline. Man kunne organisere feltene via drag'n'drop, og 
                      felt med ulagrede endringer ble markert med svak rødfarge. For å overholde GDPR-regler ble det lagt inn tidsbegrensing på hvor 
                      lenge dataene ble lagret på bedriftens servere, og kunden fikk mulighet til å se innsendte resultater per skjema, kunne svare 
                      direkte til innsender og evt. eksportere alle resultatene.
                      </p>
                    </div>
                    <div className="col-md-9">
                      <video className="embed-responsive-item ratio ratio-1x1" controls autoplay muted>
                        <source src={videoFormBuilder} type="video/mp4" />
                        Beklager, nettleseren din støtter ikke video.
                      </video>

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

export default FormBuilder;