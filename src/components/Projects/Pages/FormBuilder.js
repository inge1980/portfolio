import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import videoFormBuilder from "../../../vid/form_builder.mp4";
import ScrollToTop from './../../ScrollToTop/ScrollToTop';


const FormBuilder = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="skjemabygger"></span>
        <h1 className="text-start">Skjemabygger</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">


                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-75">
                          <video className="embed-responsive-item ratio ratio-1x1" controls autoplay muted>
                            <source src={videoFormBuilder} type="video/mp4" />
                            Beklager, nettleseren din støtter ikke video.
                          </video>
                        </div>
                        <div className="wordBreakText">
                          <p className="text-start">
                            Da jeg jobber hos Moava AS kodet jeg en skjemabygger til deres administrasjonssystem. Her kunne du starte med å velge 
                            blant mange maler, deretter redigere eller duplikere hvert enkelt felt inline. Man kunne organisere feltene via drag'n'drop, og 
                            felt med ulagrede endringer ble markert med svak rødfarge. For å overholde GDPR-regler ble det lagt inn tidsbegrensing på hvor 
                            lenge dataene ble lagret på bedriftens servere, og kunden fikk mulighet til å se innsendte resultater per skjema, kunne svare 
                            direkte til innsender og evt. eksportere alle resultatene.
                          </p>
                        </div>
                      </div>
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

export default FormBuilder;