import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import stackoverflow from "../../../img/react-stackoverflow.png";
import ScrollToTop from './../../ScrollToTop/ScrollToTop';

const Stackoverflow = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="nyhetsfelt"></span>
        <h1 className="text-start">Data Visualization with the Stack Overflow API</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-50">
                          <a href={stackoverflow} target="_blank" rel="noopener noreferrer" title="Open the image in a new tab">
                            <img
                              className="img-thumbnail"
                              src={stackoverflow}
                              alt="Example of the Data Visualization"
                            />
                          </a>
                        </div>
                        <div className="wordBreakText">
                          <p className="text-start">
                            I built an application that retrieves and visualizes user data from the Stack Overflow API using React and Chart.js. The data was presented in an easy-to-understand pie chart, providing an overview of my contributions to the platform.
                          </p>
                          <p className="text-start">
                            The project provided a more visual and intuitive way to showcase my contributions and activity on Stack Overflow (<a href="https://inge1980.github.io/stackoverflow-tags/" target="_blank" rel="noreferrer" alt="Demo of the live data visualization">demo</a>). It gives users a quick overview of what I have contributed and how I have interacted with other developers on the platform.
                          </p>
                          <p className="text-start">
                            The project also gave me practical experience with API integration in React and demonstrated how external data can be retrieved, processed, and presented in a clear visual format.
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

export default Stackoverflow;
