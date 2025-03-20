import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import need4sms from "../../../img/perl-cgi-collection-of-jokes-need4sms.png";


const Need4sms = () => {
  return (
    <React.Fragment>
      <div className="container">
        <span id="nyhetsfelt"></span>
        <h1 className="text-start">Søkbart SMS-vitsearkiv i Perl</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-50">
                          <img
                            className="img-thumbnail"
                            src={need4sms}
                            alt="Eksempel av nettside"
                          />
                        </div>
                        <div className="wordBreakText">
                          <p className="text-start">
                          I perioden 2001-2003 bygde jeg et CMS i Perl for å organisere og lagre innsendte SMS-vitser. Jeg utvidet prosjektet til et søkbart arkiv med over 1 100 kategoriserte gratis sms-vitser, sjekkereplikker og dynamiske SMS. Prosjektet inkluderte muligheten for brukere å sende inn egne vitser via skjemaer, som administrator godkjente og publiserte via kun et trykk på en knapp. Nettsiden tiltrakk seg over 10 000 unike besøkende per måned, og ble et av Norges største gratis SMS-arkiv på den tiden.
                          </p>
                          <p className="text-start">
                          Prosjektet gav meg innsikt i hvordan man kan håndtere store mengder tekstdata og gjøre det lett tilgjengelig for brukere gjennom en søkbar database. Jeg lærte mye om effektiv databasestyring og brukerinteraksjon, samt hvordan man kan optimalisere innholdet for søkemotorer, noe som førte til høy trafikk på nettstedet. Brukerne kunne enkelt navigere i det store arkivet, noe som økte engasjementet.
                          </p>
                          <p className="text-start">
                          Nettsiden ble da et av de mest populære bibliotekene for SMS-vitser, og det lærte meg mye om å bygge skalerbare og brukervennlige løsninger. Prosjektet gav meg verdifull erfaring med webutvikling og databasedesign. Etter et sikkerhetsbrudd måtte siden til slutt legges ned, noe som lærte meg viktigheten av sikkerhetstiltak og regelmessige sikkerhetskopier - en praksis jeg har videreført i alle mine senere prosjekter.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 backLink">
                      <React.Fragment>
                        <LinkContainer to="/portfolio/projects2/">
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

export default Need4sms;