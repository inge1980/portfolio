import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import iktplan from "../../../img/php-bootstrap-iktplan.png";
import ScrollToTop from './../../ScrollToTop/ScrollToTop';

const Iktplan = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="iktplan"></span>
        <h1 className="text-start">Videreutvikling av IKTplan.no i samarbeid med Utdanningsdirektoratet (2018)</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-50">
                          <a href={iktplan} target="_blank" rel="noopener noreferrer" title="Åpne bildet i ny fane">
                            <img
                              className="img-thumbnail"
                              src={iktplan}
                              alt="Eksempel på UI/UX forbedringer"
                            />
                          </a>
                        </div>
                        <div className="wordBreakText">
                          <p className="text-start">
                            Som en del av utviklingsteamet forbedret jeg brukergrensesnittet og den generelle brukervennligheten på IKTplan.no, en nettressurs for lærere. Jeg implementerte designendringer basert på brukertesting og optimaliserte frontend-komponenter for bedre navigasjon og interaksjon.
                          </p>
                          <p className="text-start">
                            Prosjektet gav lærere et verktøy for å integrere digitale ferdigheter i undervisningen, med ressurser som lærerveiledninger, vurderingskriterier og videoer. Dette støttet skolenes arbeid med å implementere digitale ferdigheter som en grunnleggende del av læreplanen.
                          </p>
                          <p className="text-start">
                            IKTplan.no ble en anerkjent ressurs for å veilede lærere i utviklingen av elevenes digitale kompetanse, og ble senere integrert i Utdanningsdirektoratets nettsider som en del av deres støtte for digitale ferdigheter. Prosjektet bidro til å heve kvaliteten på digital opplæring i skolen.
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

export default Iktplan;
