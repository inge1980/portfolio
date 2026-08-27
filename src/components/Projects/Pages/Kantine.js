import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"
import { useNavigate } from "react-router-dom";
import imgKatine from "../../../img/php-bootstrap-kantine_adminsystem_2.png";
import ScrollToTop from "./../../ScrollToTop/ScrollToTop";

const Kantine = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <ScrollToTop />

      <div className="container">
        <span id="skjemabygger"></span>

        <h1 className="text-start">
          Canteen Management System with ERP
        </h1>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-50">
                          <a href={imgKatine} target="_blank" rel="noopener noreferrer" title="Open the image in a new tab">
                            <img
                              className="img-thumbnail"
                              src={imgKatine}
                              alt="Example of the canteen management system"
                            />
                          </a>
                        </div>
                        <div className="wordBreakText">
                          <p className="text-start">
                            I developed a fullstack canteen management system for
                            workplace and school canteens, with support for
                            multiple departments, different user roles and
                            integration with an ERP system for inventory
                            management.
                          </p>

                          <p className="text-start">
                            Department managers could manage users and place food
                            orders for their entire department, while individual
                            users had a streamlined interface for placing personal
                            orders. The application was therefore designed around
                            different workflows depending on the user's role and
                            responsibilities.
                          </p>

                          <p className="text-start">
                            The system integrated with an existing ERP solution so
                            that orders could become part of the inventory
                            management process. I worked across the fullstack,
                            including the PHP application, a REST API developed in
                            C# and .NET, SQL Server and the frontend built with
                            JavaScript, CSS and Bootstrap. The API was documented
                            using Swagger.
                          </p>

                          <p className="text-start">
                            A particular challenge was testing the ordering
                            workflow against the live environment. The application
                            used real users, recipes and production data, so test
                            orders were explicitly marked to distinguish them from
                            actual orders. This made it possible to validate
                            realistic ordering scenarios while keeping test
                            activity identifiable.
                          </p>

                          <p className="text-start">
                            The result was a shared canteen platform that could
                            support different organizational structures without
                            requiring separate implementations for workplace and
                            school canteens. The combination of role-based
                            workflows and ERP integration connected the ordering
                            process with the organization's existing inventory
                            management.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12 backLink">
                      <Nav.Link
                        className="link-primary"
                        onClick={() => navigate(-1)}
                      >
                        Go back
                      </Nav.Link>
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

export default Kantine;