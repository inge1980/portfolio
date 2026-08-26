import React from "react";
import { Nav } from "react-bootstrap";
//import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import ordreadmin from "../../../img/php-bootstrap-order_admin_system.png"; 
import ScrollToTop from './../../ScrollToTop/ScrollToTop';

const OrderAdmin = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="skjemabygger"></span>
        <h1 className="text-start">Order Office Interface</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                  <div className="col-md-8">
                      <p className="text-start">
                        I developed a dedicated Order Office interface on top of an existing&nbsp;
                        <abbr title="Enterprise Resource Planning&#13;Software that supports multiple areas of a business,&#13;including orders, production, inventory, sales, purchasing, and accounting.">ERP</abbr> platform, creating a focused workspace for order processing without exposing the full ERP interface.
                      </p>
                      <p className="text-start">
                        The application communicated with the ERP through the same REST API architecture used across the platform, allowing order-office staff to work with a simplified interface while the ERP remained responsible for the underlying business logic, order processing, and invoicing.
                      </p>
                      <p className="text-start">
                        My work included frontend development, REST API integration, role-based access, and adapting the interface to fit established ERP workflows while reducing unnecessary complexity for daily users.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <img
                        className="img-thumbnail"
                        src={ordreadmin}
                        alt="Example of the Order Office interface"
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

export default OrderAdmin;