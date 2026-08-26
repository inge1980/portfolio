import React from "react";
import { Nav } from "react-bootstrap";
//import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import need4sms from "../../../img/perl-cgi-collection-of-jokes-need4sms.png";
import ScrollToTop from './../../ScrollToTop/ScrollToTop';


const Need4sms = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="nyhetsfelt"></span>
        <h1 className="text-start">Searchable SMS Joke Archive in Perl</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-50">
                          <a href={need4sms} target="_blank" rel="noopener noreferrer" title="Open the image in a new tab">
                            <img
                              className="img-thumbnail"
                              src={need4sms}
                              alt="Example of the website"
                            />
                          </a>
                        </div>
                        <div className="wordBreakText">
                          <p className="text-start">
                          Between 2001 and 2003, I built a CMS in Perl to organize and store submitted SMS jokes. I later expanded the project into a searchable archive containing more than 1,100 categorized jokes, pickup lines, and dynamic SMS messages. Users could submit their own content through forms, which an administrator could review and publish with a single click. The website attracted more than 10,000 unique visitors per month and became one of Norway's largest free SMS joke archives at the time.
                          </p>
                          <p className="text-start">
                          The project gave me valuable experience in handling large amounts of text data and making it easily accessible through a searchable database. I learned a great deal about database management, user interaction, and search engine optimization, which helped drive significant traffic to the website. The searchable archive made it easy for users to navigate a large amount of content and helped increase engagement.
                          </p>
                          <p className="text-start">
                          The website eventually became one of the most popular SMS joke archives in Norway and taught me a great deal about building scalable and user-friendly solutions. The project gave me valuable experience in web development and database design. After a security breach, the website eventually had to be taken offline, which taught me the importance of security measures and regular backups, practices I have carried forward into my later projects.
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

export default Need4sms;