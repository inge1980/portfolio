import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import osedalen from "../../../img/osedalen.png";
import ScrollToTop from './../../ScrollToTop/ScrollToTop';

const Osedalen = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="nyhetsfelt"></span>
        <h1 className="text-start">News Feed from 2013 - Osedalen.org</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-50">
                          <a href={osedalen} target="_blank" rel="noopener noreferrer" title="Open the image in a new tab">
                            <img
                              className="img-thumbnail"
                              src={osedalen}
                              alt="Example of the news feed website"
                            />
                          </a>
                        </div>
                        <div className="wordBreakText">
                          <p className="text-start">
                            I created an automated news aggregator based on WordPress that collected and published local news from various sources, including RSS feeds, weather and traffic alerts, and police updates from Twitter. The system was designed to make reviewing and publishing content as simple as possible.
                          </p>
                          <p className="text-start">
                            Users received continuous updates on local news without requiring manual work from an administrator. The automation reduced the time spent managing news updates and made it easier to keep the content fresh and relevant for the local community.
                          </p>
                          <p className="text-start">
                            The result was an active and easily accessible source of local news for the community until 2018, with automatically updated news and alerts.
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

export default Osedalen;
