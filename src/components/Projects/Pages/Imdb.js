import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import imdb from "../../../img/react-movies.png";

const Imdb = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="container">
        <span id="nyhetsfelt"></span>
        <h1 className="text-start">Inge Movie Database</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-50">
                          <a href={imdb} target="_blank" rel="noopener noreferrer" title="Åpne bildet i ny fane">
                            <img
                              className="img-thumbnail"
                              src={imdb}
                              alt="Eksempel av mobiltilpasset forbedring"
                            />
                          </a>
                        </div>
                        <div className="wordBreakText">
                          <p className="text-start">
                          Jeg tok Typescript og "Mastering React"-kurs sommeren 2022. Kursene tok omtrent 24 timer fordelt på fire dager, inkludert alle
        videoene og oppgavene, og det er så absolutt å anbefale. Det fikk meg blant annet til å reflektere over
        hvordan jeg kunne ha løst tidligere prosjekter anderledes hvis jeg bare hadde hatt inngående kunnskap om Typescript og React.
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

export default Imdb;
