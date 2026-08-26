import React from "react";
import { Nav } from "react-bootstrap";
//import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import MoavaData from "./MoavaData";
import skoler from "../../../img/skoler_moava.png";
import ScrollToTop from './../../ScrollToTop/ScrollToTop';

const Moava = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="moava"></span>
        <h1 className="text-start">Moava CMS</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-6">
                      <p className="text-start">
                        At my previous employer, I was part of the development team responsible for further developing a
                        large-scale administrative system, also known as a <abbr title="Content Management System&#13;A system for creating and managing content for websites, intranets and online stores.">CMS</abbr>.
                        I have collected links to schools in my local area that use Moava's CMS to publish news and
                        information. Unfortunately, I cannot link to the administration interface, which contains tools
                        designed to simplify teachers' day-to-day digital work, as the <abbr title="Software as a service&#13;A cloud-based solution that provides access to software applications without requiring users to install or maintain the software.">SaaS</abbr>
                        product is owned by Moava AS.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <img
                        className="img-thumbnail"
                        src={skoler}
                        alt="Example of a school website"
                      />
                    </div>
                    <div className="col-md-12">
                      <ul className="list-group text-start">
                        {MoavaData.map((item, index) => {
                          return (
                            <React.Fragment>
                              <li className="list-group-item">
                                <Nav.Link
                                  href={item.link}
                                  className="link-primary"
                                  rel="noreferrer"
                                  target="_blank"
                                >
                                  {item.link}
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

export default Moava;
