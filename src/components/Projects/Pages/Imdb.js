import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Imdb = () => {
  return (
    <React.Fragment>
      <p className="text-start">
        Jeg tok Typescript og "Mastering React"-kurs sommeren 2022. Kursene tok omtrent 24 timer fordelt på fire dager, inkludert alle
        videoene og oppgavene, og det er så absolutt å anbefale. Det fikk meg blant annet til å reflektere over
        hvordan jeg kunne ha løst prosjekter anderledes hvis jeg bare hadde hatt inngående kunnskap om Typescript og React tidligere.
      </p>
      <p className="text-start">
        Klikk her for å se kursdetaljene om{" "}
        <a
          className="link-primary"
          href="https://codewithmosh.com/p/the-ultimate-typescript"
          target="_blank"
          rel="noreferrer"
        >
          Typescript
        </a>
        {" "}eller{" "}
        <a
          className="link-primary"
          href="https://codewithmosh.com/p/mastering-react"
          target="_blank"
          rel="noreferrer"
        >
          React
        </a>
        .
      </p>
      <LinkContainer to="/portfolio/projects/">
        <Nav.Link className="link-primary" href="#projects">
          Gå tilbake
        </Nav.Link>
      </LinkContainer>
    </React.Fragment>
  );
};

export default Imdb;
