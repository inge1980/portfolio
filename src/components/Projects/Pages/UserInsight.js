import React from "react";
import { Nav } from "react-bootstrap";
//import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import userinsight from "../../../img/javascript-user-insight-google-analytics.png";
import ScrollToTop from './../../ScrollToTop/ScrollToTop';


const UserInsight = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="nyhetsfelt"></span>
        <h1 className="text-start">Analytics & Traffic Optimization</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-50">
                          <a href={userinsight} target="_blank" rel="noopener noreferrer" title="Open the image in a new tab">
                            <img
                              className="img-thumbnail"
                              src={userinsight}
                              alt="Example of the analytics and traffic optimization"
                            />
                          </a>
                        </div>
                        <div className="wordBreakText">
                          <p className="text-start">
                            At Moava, I took the initiative to implement Google Tag Manager (GTM) together with Google Analytics (GA) to gain insight into how potential customers navigated our website. I mapped the customer journey leading up to the "Book a demo" action and set up tracking for important events such as clicks and page views.
                          </p>
                          <p className="text-start">
                            The project gave us insight into user behavior on the website and helped identify specific areas of the customer journey with high bounce rates or where users were dropping out. Although the project did not result in immediate improvements, it gave us a clear picture of which parts of the website needed optimization. This insight was important for identifying issues and improving the user experience over time.
                          </p>
                          <p className="text-start">
                            Through this project, I developed skills in web analytics and data-driven marketing. I gained practical experience with Google Tag Manager and Google Analytics, and learned how to use data to optimize digital strategies. The project provided a solid foundation for future initiatives aimed at improving the website's conversion rate and contributed to a more data-driven approach within the company.
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

export default UserInsight;