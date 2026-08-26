import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import erp from "../../../img/php-erp-blurry.png";
import ScrollToTop from './../../ScrollToTop/ScrollToTop';

const ERP = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="nyhetsfelt"></span>
        <h1 className="text-start">ERP Platform Development & Modernization</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-25">
                          <a href={erp} target="_blank" rel="noopener noreferrer" title="Open the image in a new tab">
                            <img
                              className="img-thumbnail"
                              src={erp}
                              alt="Example of the ERP platform"
                            />
                          </a>
                        </div>
                        <div className="wordBreakText">
                          <p className="text-start">
                            I worked on the continuous development and modernization of a business-critical ERP platform supporting warehouse management, retail, ordering, invoicing, and e-commerce. A major part of the project involved replacing direct database communication between the online store and ERP with a dedicated REST API, reducing system coupling while preserving established business workflows.
                          </p>
                          <p className="text-start">
                            My responsibilities included extending ERP functionality, developing SQL queries and data access logic, redesigning the customer-facing online store, implementing customer-specific features, and maintaining production environments hosted on IIS with SQL Server. I also investigated and resolved production issues while ensuring compatibility with existing business processes.
                          </p>
                          <p className="text-start">
                            The modernization created a cleaner architectural boundary between customer-facing applications and the ERP, making the platform easier to maintain and extend without requiring a full system replacement. It also established a foundation for dedicated applications such as Product Information Management and Order Office interfaces built on top of the REST API.
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

export default ERP;
