import React from "react";
import { Card, Nav } from "react-bootstrap";
import "./Intro.css";
import image from "../../img/author.png";
import { LinkContainer } from "react-router-bootstrap";
import ScrollToTop from './../ScrollToTop/ScrollToTop';

const Intro = () => {
  const text = {
    title: "Hvem er jeg?",
    desc1: (
      <React.Fragment>
        Jeg er en fullstack-utvikler som ser etter fullstack / frontend
        jobbmuligheter.
        <br />
        <br />I løpet av et langt liv har jeg samlet opp{" "}
      </React.Fragment>
    ),
    linkText:
      "11 års profesjonell arbeidserfaring, pluss 12 år med hobbyerfaring fra diverse programmeringsprosjekter før karrieren startet.",
    desc2: (
      <React.Fragment>
        {" "}
        Så jeg har holdt på med PHP, MySQL, Subversion, HTML, CSS, Javascript, og diverse bibliotek
        som f.eks. Bootstrap og jQuery i 23 år.
        <br />
        <br />
        Jeg liker å holde meg oppdatert på den nyeste teknologien, og de siste
        årene har jeg etterutdannet meg med bl.a. et kurs i Node.js, noen
        omfattende kurs i React og TypeScript, et masterfag i Brukerorientert
        Design, samt noen studiepoeng i matematikk.
        <br />
        <br />
        Matematikk på skolen må jeg innrømme jeg ikke har tatt fordi jeg elsker
        det, men fordi brukervennlighet er såpass interessant og viktig for meg
        at jeg tok 10 studiepoeng matte for å kunne kvalifisere til et masterfag
        innen "Brukerorientert Design".
        <br />
        <br />
        Jeg har en solid kunnskapsbase fra objektorientert programmering, og jeg
        tilegner meg ny kunnskap raskt, derfor ser jeg frem til å spesialisere
        meg i de programmeringsspråk og arbeidsverktøy min fremtidige
        arbeidsgiver bruker.
      </React.Fragment>
    ),
  };

  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="col-md-12 introCard">
        <Card className="cardSmall">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{text.title}</Card.Title>
            <Card.Text className="text-start">
              {text.desc1}
              <LinkContainer to="/portfolio/projects">
                <Nav.Link href="#" className="link-primary">
                  {text.linkText}
                </Nav.Link>
              </LinkContainer>
              {text.desc2}
              <LinkContainer to="/portfolio/contact/">
                <Nav.Link href="#" className="link-primary">
                Kontakt meg
                </Nav.Link>
              </LinkContainer>
            </Card.Text>
          </Card.Body>
        </Card>

        <div className="cardBig card mb-3">
          <div className="row g-0">
            <div className="col-sm-3 col-md-4">
              <img src={image} className="img-fluid" alt="Profilbilde" />
            </div>
            <div className="col-sm-9 col-md-8">
              <div className="card-body">
                <h5 className="card-title">{text.title}</h5>
                <p className="card-text">{text.desc}</p>
                <p className="card-text text-start">
                  {text.desc1}
                  <LinkContainer to="/portfolio/projects">
                    <Nav.Link href="#" className="link-primary">
                      {text.linkText}
                    </Nav.Link>
                  </LinkContainer>
                  {text.desc2}
                </p>
                <p className="card-text text-center">
                  <LinkContainer to="/portfolio/contact/">
                  <Nav.Link href="#" className="link-primary">
                    Kontakt meg
                  </Nav.Link>
                </LinkContainer>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Intro;
