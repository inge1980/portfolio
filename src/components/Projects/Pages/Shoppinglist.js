import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import videoShoppinglist from "../../../vid/react-native-shoppinglist.mp4";


const Shoppinglist = () => {
  return (
    <React.Fragment>
      <div className="container">
        <span id="nyhetsfelt"></span>
        <h1 className="text-start">Handleliste-app i React Native</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-9">
                      <p className="text-start">
                      Her har jeg brukt react-native-gesture-handler versjon 2 og react-native-reanimated versjon 3 for å få til en flytende "dra og slipp"-opplevelse. 
                      Trykk og hold nede ikonet til høyre for å dra en vare opp eller ned, alt skjer i UI-tråden, slik at vi unngår potensiell lagg via JS-tråden.
                      <br/>
                      <br/>
                      Handlelisten lagres lokalt via SQLite, og synkroniseres ved hjelp av Redux til Supabase Postgres database når man er online. 
                      Legg til nye varer via knapp, eller slett varer via swipe til venstre. Kildekoden er foreløpig privat på github, men utsnitt kan vises på oppfordring.
                      </p>
                    </div>
                    <div className="col-md-3">
                      <video className="embed-responsive-item ratio ratio-1x1" controls autoplay muted>
                        <source src={videoShoppinglist} type="video/mp4" />
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

export default Shoppinglist;