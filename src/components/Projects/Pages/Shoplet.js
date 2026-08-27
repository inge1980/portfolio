import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import shoplet from "../../../img/php-bootstrap-shoplet.png"; 
import ScrollToTop from './../../ScrollToTop/ScrollToTop';

const Shoplet = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="skjemabygger"></span>
        <h1 className="text-start">Responsive Online Store with ERP Integration</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-25">
                          <a href={shoplet} target="_blank" rel="noopener noreferrer" title="Open the image in a new tab">
                            <img
                              className="img-thumbnail"
                              src={shoplet}
                              alt="Example of the online store"
                            />
                          </a>
                        </div>
                        <div className="wordBreakText">
                          <p className="text-start">
                            At Systemhuset Episteme AS, I redesigned an existing online store to deliver a fully responsive experience across mobile and desktop devices while improving everyday usability for customers.
                          </p>
                          <p className="text-start">
                            I contributed to the REST API integration connecting the storefront with the ERP platform, enabling inventory management, centralized product information, and dynamic pricing based on customer groups and ERP-defined discounts. I also implemented features such as allergen filtering, user authentication, and favorite lists to streamline repeat ordering.
                          </p>
                          <p className="text-start">
                            Although the storefront was intended as a temporary solution during the transition to the new API architecture and is no longer actively maintained, it demonstrates how the customer-facing application was modernized while preserving the ERP as the underlying business system. The <a href="https://flytcatering.no/" target="_blank" rel="noreferrer" title="The online store redesigned by external company.">current online store is design by an external company</a>, but still uses the same REST API we developed.
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

export default Shoplet;