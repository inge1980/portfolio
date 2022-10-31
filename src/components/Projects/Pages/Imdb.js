import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Imdb = () => {
  return (
    <React.Fragment>
      <p className="text-start">
        "Mastering React"-kurset tok jeg sommeren 2022, og der lærte jeg det
        meste innen React.
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
      <p className="text-start">
        Det tok omtrent 18 timer fordelt på tre dager å komme gjennom alle
        videoene og oppgavene, men så absolutt verdt det. Jeg lærte så mye om
        hvordan jeg ville gjort tidligere prosjekt anderledes hadde jeg bare
        visst om alt som kan gjøres med React litt tidligere.
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
