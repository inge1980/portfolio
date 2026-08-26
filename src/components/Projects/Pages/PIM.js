import React from "react";
import { Nav } from "react-bootstrap";
//import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import imgPIM from "../../../img/php-bootstrap-PIM_admin_system.png"; 
import ScrollToTop from './../../ScrollToTop/ScrollToTop';

const PIM = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="skjemabygger"></span>
        <h1 className="text-start">Product Information Management (PIM)</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                  <div className="col-md-8">
                      <p className="text-start">
                        I extended an existing&nbsp;
                        <abbr title="Enterprise Resource Planning&#13;Software that supports multiple areas of a business,&#13;including orders, production, inventory, sales, purchasing, and accounting.">ERP</abbr> platform with&nbsp;
                        <abbr title="Product Information Management&#13;A centralized approach to managing product information across ERP systems, online stores, catalogs, and other connected platforms.">PIM</abbr> capabilities, creating a centralized system for managing product information across the ERP and connected online store.
                      </p>
                      <p className="text-start">
                        The ERP remained the authoritative source for product data, while a REST API exposed product information consistently to the storefront. This reduced duplicated data, improved consistency between systems, and made product information easier to maintain without disrupting existing ERP workflows.
                      </p>
                      <p className="text-start">
                        My work included backend development, SQL Server queries, REST API integration, frontend functionality for managing product information, and maintaining compatibility with the existing ERP architecture.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <img
                        className="img-thumbnail"
                        src={imgPIM}
                        alt="Example of the PIM system"
                      />
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

export default PIM;