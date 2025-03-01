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
                        Her har jeg brukt <abbr title="React Native Gesture Handler (versjon 2.x)&#13;Bibliotek for å forenkle måten man får tilgang til plattformens egne berørings- og bevegelsessystem.">react-native-gesture-handler versjon 2</abbr> og <abbr title="React Native Reanimated (versjon 3.x)&#13;Animasjonsbibliotek for å lage animasjoner via UI-tråden.&#13;(i motsetning til JS-tråden som kan forårsake forsinkelser eller hakking)">react-native-reanimated versjon 3</abbr> for å få til en jevn "dra og slipp"-opplevelse.<br/>
                        <br/>
                        Man kan trykke og holde nede ikonet til høyre for å dra en vare opp eller ned, og alt skjer i UI-tråden slik at vi unngår potensiell hakking pga blokkeringer i Javascript-tråden.
                        Det er også mulig å legge til nye varer via godt synlig knapp lett tilgjengelig via et tommeltrykk, eller slette varer via swipe til venstre. 
                        Handlelisten lagres lokalt via SQLite, og synkroniseres ved hjelp av Redux til Supabase Postgres database når man er online. Dette er en offline-first app, hvor Redux state fungerer som systemets <abbr title="Single Source of Truth&#13;Sikrer at koden vi utvikler har en sentral, korrekt og oppdatert informasjonskilde.">SSOT</abbr>, og dataene blir hentet enten fra SQLite eller Supabase, basert på tilkoblingsstatus.
                        Kildekoden er foreløpig privat på github, men utsnitt kan vises på oppfordring.
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