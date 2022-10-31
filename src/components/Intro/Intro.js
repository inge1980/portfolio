import React from "react";
import { Card, Nav } from "react-bootstrap";
import "./Intro.css";
import image from "../../img/author.jpg";
import { LinkContainer } from "react-router-bootstrap";

const Intro = () => {
  const text = {
    title: "Hvem er jeg?",
    desc: `
      Hei, jeg er en fullstack-utvikler som ser etter fullstack /
      frontend jobbmuligheter.
    `,
    button: "Les mer",
  };

  return (
    <React.Fragment>
      <div className="col-md-12 introCard">
        <Card className="cardSmall">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{text.title}</Card.Title>
            <Card.Text>{text.desc}</Card.Text>
            <LinkContainer to="/portfolio/me/">
              <Nav.Link href="#" className="btn btn-success">
                {text.button}
              </Nav.Link>
            </LinkContainer>
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
                <p className="card-text text-center">
                  <LinkContainer to="/portfolio/me">
                    <Nav.Link href="#" className="btn btn-success">
                      {text.button}
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
