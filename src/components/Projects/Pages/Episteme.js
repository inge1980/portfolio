import React from "react";
import { Nav } from "react-bootstrap";
//import { LinkContainer } from "react-router-bootstrap"
import { useNavigate } from "react-router-dom";
import EpistemeData from "./EpistemeData";
import shoplet from "../../../img/shoplet_episteme.png";
import ScrollToTop from './../../ScrollToTop/ScrollToTop';

const Episteme = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="episteme"></span>
        <h1 className="text-start">Episteme</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-8">
                      <p className="text-start">
                        At Systemhuset Episteme AS, I worked on further developing an&nbsp;
                        <abbr title="Enterprise Resource Planning&#13;Software that supports multiple areas of a business,&#13;such as orders, production, inventory, sales, purchasing and finance.">ERP</abbr> system, 
                        including redesigning the system from the ground up. I also redesigned the webshop connected to the ERP system. All code is unfortunately owned by the company or its customers, so instead I have 
                        collected links to some websites that use the system.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <img
                        className="img-thumbnail"
                        src={shoplet}
                        alt="Example of the webshop"
                      />
                    </div>
                    <div className="col-md-12">
                      <ul className="list-group text-start">
                        {EpistemeData.map((item, index) => {
                          return (
                            <React.Fragment>
                              <li className="list-group-item">
                                <Nav.Link
                                  href={item.link}
                                  className="link-primary"
                                  rel="noreferrer"
                                  target="_blank"
                                >
                                  {item.linktext}
                                </Nav.Link>{" "}
                                ({item.text})
                              </li>
                            </React.Fragment>
                          );
                        })}
                      </ul>
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

export default Episteme;
