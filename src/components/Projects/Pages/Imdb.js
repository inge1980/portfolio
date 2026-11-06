import React from "react";
import { Nav } from "react-bootstrap";
// eslint-disable-next-line no-unused-vars
import { LinkContainer } from "react-router-bootstrap"
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
                            I built the Inge Movie Database as part of two in-depth React and TypeScript courses. The project is a movie index built with JavaScript, React and React Router, with component-based architecture, form fields validated with Joi, and reusable React components. React component state manages the UI-related data, while the movie data is held in a JavaScript array in memory. No backend API, database or persistent storage is connected, so data changes are lost when the application is reloaded.
                          </p>
                          <p className="text-start">
                            The project gave me practical experience building a structured React application with JavaScript, functional components and hooks. I used Joi for form validation, Lodash as a utility library and Bootstrap for the interface.
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
                          <p className="text-start">
                            <strong>Technology:</strong> React, React Router, Bootstrap, Joi, Lodash, HTML, CSS and JavaScript.
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
