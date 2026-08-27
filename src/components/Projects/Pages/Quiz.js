import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"
import { useNavigate } from "react-router-dom";
import quiz from "../../../img/php-bootstrap-quiz.png";
import ScrollToTop from './../../ScrollToTop/ScrollToTop';

const Quiz = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="nyhetsfelt"></span>
        <h1 className="text-start">Customer Satisfaction: User Survey</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-25">
                          <a href={quiz} target="_blank" rel="noopener noreferrer" title="Open the image in a new tab">
                            <img
                              className="img-thumbnail"
                              src={quiz}
                              alt="Example of the survey editing interface"
                            />
                          </a>
                        </div>
                        <div className="wordBreakText">
                          <p className="text-start">
                            After running a CMS for a decade without structured user surveys, I took the initiative to use a form builder, I had recently developed, to conduct a user survey and collect feedback from customers. I designed the questions around a 0-5 rating scale to ensure that the results would be consistent and comparable over time. To encourage participation, we also offered an iPhone as a prize in a random draw.
                          </p>
                          <p className="text-start">
                            The survey gave us valuable insight into areas such as the users' experience with the platform and the challenges they encountered. We used this feedback to make targeted improvements, which helped increase customer loyalty and reduce customer churn.
                          </p>
                          <p className="text-start">
                            Based on the survey results, we improved the editing interface by reducing the number of clicks required from five to one, and introduced inline editing. These changes improved usability and likely contributed to a 5% reduction in customer churn over the following three years. The insights from the survey also contributed to increased upselling, making the platform more profitable and competitive.
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

export default Quiz;
