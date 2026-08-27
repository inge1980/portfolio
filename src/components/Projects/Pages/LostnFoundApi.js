import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import lostandfoundapi from "../../../img/react-native-calculator.png";
import ScrollToTop from "./../../ScrollToTop/ScrollToTop";

const LostAndFoundApi = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="nyhetsfelt"></span>
        <h1 className="text-start">Lost &amp; Found API</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-50">
                          <a
                            href={lostandfoundapi}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Open image in new tab"
                          >
                            <img
                              className="img-thumbnail"
                              src={lostandfoundapi}
                              alt="Screenshot of the Lost and Found API"
                            />
                          </a>
                        </div>

                        <div className="wordBreakText">
                          <p className="text-start">
                            I built a Lost &amp; Found backend API using
                            ASP.NET Core, C# and PostgreSQL. The API supports
                            registering found items, searching and filtering
                            them, and managing their lifecycle through claim,
                            return and deletion operations.
                          </p>

                          <p className="text-start">
                            The application uses Entity Framework Core for
                            PostgreSQL persistence and a repository abstraction
                            to separate the API from the persistence layer. A
                            separate in-memory repository is used by the
                            automated tests so the core test suite does not
                            depend on a running database.
                          </p>

                          <p className="text-start">
                            Item status is controlled by backend business
                            rules, preventing invalid operations based on the
                            current state of an item. The project also includes
                            request validation, UTC timestamps, Swagger API
                            documentation and a Docker Compose development
                            environment for running the API and PostgreSQL
                            together.
                          </p>

                          <p className="text-start">
                            <strong>Technology:</strong> C#, ASP.NET Core,
                            Entity Framework Core, PostgreSQL, Docker, xUnit
                            and Swagger.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12 backLink">
                      <React.Fragment>
                        <Nav.Link
                          className="link-primary"
                          onClick={() => navigate(-1)}
                        >
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

export default LostAndFoundApi;