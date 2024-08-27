import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Imdb = () => {
  return (
    <React.Fragment>
      <p className="text-start">
        "Mastering React"-kurset tok jeg sommeren 2022. Kurset tok omtrent 18 timer fordelt på tre dager, inkludert alle
        videoene og oppgavene, og det var så absolutt å anbefale. Jeg lærte mye om Typescript, og det fikk meg blant annet til å reflektere over
        hvordan jeg kunne ha løst prosjekter anderledes hvis jeg bare hadde hatt kunnskap om React tidligere.
      </p>
      <p className="text-start">
        Klikk her for å{" "}
        <a
          className="link-primary"
          href="https://codewithmosh.com/p/mastering-react#block-6779254"
          target="_blank"
          rel="noreferrer"
        >
          se detaljene om kurset
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
