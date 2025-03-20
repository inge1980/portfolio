import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import quiz from "../../../img/php-bootstrap-quiz.png";
import ScrollToTop from './../../ScrollToTop/ScrollToTop';

const Quiz = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="nyhetsfelt"></span>
        <h1 className="text-start">Kundetilfredshet: Spørreundersøkelse</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-25">
                          <a href={quiz} target="_blank" rel="noopener noreferrer" title="Åpne bildet i ny fane">
                            <img
                              className="img-thumbnail"
                              src={quiz}
                              alt="Eksempel på redigering av spørreundersøkelse"
                            />
                          </a>
                        </div>
                        <div className="wordBreakText">
                          <p className="text-start">
                            I et CMS som hadde vært i drift i over 10 år uten noen form for kundeundersøkelse, tok jeg initiativ til å bruke en egenutviklet skjemabygger for å gjennomføre en spørreundersøkelse til innsamling av tilbakemeldinger fra brukerne. Jeg utformet spørsmålene basert på en 0-5-skala for å sikre konsistente og sammenlignbare statistikker over tid. For å øke deltakelsen ble det også lagt til en premiering med trekning av en iPhone.
                          </p>
                          <p className="text-start">
                            Undersøkelsen gav oss innsikt i viktige områder som brukernes opplevelse og utfordringer med plattformen. Denne informasjonen ble brukt til å gjøre målrettede forbedringer, som igjen bidro til økt kundelojalitet og redusert kundefrafall.
                          </p>
                          <p className="text-start">
                            På bakgrunn av undersøkelsen utviklet vi forbedringer i redigeringsgrensesnittet, blant annet ved å redusere antall klikk fra fem til ett og innføre inline-redigering. Dette bidro til økt brukervennlighet og reduserte med all sannsynlighet kundefrafall med 5% over de neste 3 årene. I tillegg førte innsikten fra undersøkelsen til økt mersalg, noe som gjorde plattformen mer lønnsom og konkurransedyktig.
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

export default Quiz;
