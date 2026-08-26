import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import imdb from "../../../img/react-movies.png";
import ScrollToTop from './../../ScrollToTop/ScrollToTop';

const Imdb = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="nyhetsfelt"></span>
        <h1 className="text-start">Inge Movie Database (IMDB)</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-50">
                          <a href={imdb} target="_blank" rel="noopener noreferrer" title="Open the image in a new tab">
                            <img
                              className="img-thumbnail"
                              src={imdb}
                              alt="Example of the Inge Movie Database"
                            />
                          </a>
                        </div>
                        <div className="wordBreakText">
                          <p className="text-start">
                            I built the Inge Movie Database as part of an in-depth React and TypeScript course. The project is a movie index that stores data in local storage and includes component-based architecture, state management, React Router, form fields with validation, and reusable React components.
                          </p>
                          <p className="text-start">
                            The project gave me practical experience building a structured React application with TypeScript, functional components and hooks. It also strengthened my understanding of how TypeScript can improve code quality and maintainability through type safety and interfaces.
                          </p>
                          <p className="text-start">
                            I completed both the React and TypeScript courses and earned certifications in each. The project provided a practical foundation for building maintainable React applications and applying modern frontend development practices.
                          </p>
                          <p className="text-start">
                            Click here to view the course details for{" "}
                            <a
                              className="link-primary"
                              href="https://codewithmosh.com/p/the-ultimate-typescript"
                              target="_blank"
                              rel="noreferrer"
                            >
                              TypeScript
                            </a>
                            {" "}or{" "}
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
                          Go back
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
