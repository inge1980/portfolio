import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import js1k from "../../../img/javascript-1016-byte-game.png";
import ScrollToTop from './../../ScrollToTop/ScrollToTop';

const Js1k = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="nyhetsfelt"></span>
        <h1 className="text-start">Spill på under 1024 byte</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-50">
                          <a href={js1k} target="_blank" rel="noopener noreferrer" title="Åpne bildet i ny fane">
                            <img
                              className="img-thumbnail"
                              src={js1k}
                              alt="Eksempel på spillet"
                            />
                          </a>
                        </div>
                        <div className="wordBreakText">
                          <p className="text-start">
                            Tilbake i 2012 før Valentines prøvde jeg meg i en konkurranse for å lage
                            et primitivt javascript-spill på under 1 kilobyte. Jeg vant ikke, men
                            det var gøy å lære litt om hvordan canvas fungerte. I spillet er poeng
                            til venstre, og antall liv til høyre, og "Cupid" skulle prøve å treffe
                            så mange hjerter som mulig før de fryser til is. Beregnet kun for pc, og
                            pilen følger musepekeren.
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

export default Js1k;
