import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import videoThemePicker from "../../../vid/theme_picker.mp4";
import videoColorPicker from "../../../vid/color_picker.mp4";
import imgColorPicker from "../../../img/javascript-both-pickers.png";


const ThemePicker = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="container">
        <span id="themepicker"></span>
        <h1 className="text-start">Dynamisk temavelger & fargetilpasning</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">

                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-50">
                          <a href={imgColorPicker} target="_blank" rel="noopener noreferrer" title="Åpne bildet i ny fane">
                            <img
                              className="img-thumbnail"
                              src={imgColorPicker}
                              alt="Eksempel på redigering av spørreundersøkelse"
                            />
                          </a>
                        </div>
                        <div className="wordBreakText">
                          <p className="text-start">
                            Implementere en dynamisk temavelger ved å integrere Bootswatch med Bootstrap, slik at brukere kunne teste forskjellige temaer via en administrasjonsmeny før de lagret endringene. Utvikle funksjonalitet for å justere bakgrunnsfarge og invertere menyfarger, med en brukervennlig forhåndsvisning.
                          </p>
                          <p className="text-start">
                            Frigjorde designressurser ved å la kundene selv velge og tilpasse temaer, i stedet for at designeren måtte gjøre manuelle tilpasninger. Økte fleksibiliteten for kundene, slik at de kunne skape mer unike nettsider uten ekstra utviklingsarbeid.
                          </p>
                          <p className="text-start">
                            En administrasjonsløsning som gav kundene enkel kontroll over designvalg, samtidig som den reduserte behovet for tilpassede endringer ved kundeoppstart. Bidro til en mer strømlinjeformet og effektiv onboarding-prosess.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <video className="embed-responsive-item ratio ratio-1x1" controls autoplay muted>
                        <source src={videoThemePicker} type="video/mp4" />
                        Beklager, nettleseren din støtter ikke video.
                      </video>
                      <video className="embed-responsive-item ratio ratio-1x1" controls autoplay muted>
                        <source src={videoColorPicker} type="video/mp4" />
                        Beklager, nettleseren din støtter ikke video.
                      </video>
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

export default ThemePicker;