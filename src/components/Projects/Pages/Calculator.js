import React from "react";
import { Nav } from "react-bootstrap";
//import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import calculator from "../../../img/react-native-calculator.png";
import ScrollToTop from './../../ScrollToTop/ScrollToTop';


const Calculator = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="nyhetsfelt"></span>
        <h1 className="text-start">PEMDAS Calculator in React Native</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-50">
                          <a href={calculator} target="_blank" rel="noopener noreferrer" title="Open image in new tab">
                            <img
                              className="img-thumbnail"
                              src={calculator}
                              alt="Screenshot of the PEMDAS calculator built with React Native"
                            />
                          </a>
                        </div>
                        <div className="wordBreakText">
                          <p className="text-start">
                            I built a mobile calculator in React Native and TypeScript that evaluates mathematical expressions according to the PEMDAS order of operations: parentheses, exponents, multiplication, division, addition and subtraction. It handles both simple calculations and more complex expressions while providing clear input and accurate results.
                          </p>
                          <p className="text-start">The project was created as a self-development project to deepen my practical experience with React Native and mobile development. I implemented dynamic expression handling and designed the interface with a focus on straightforward input and a smooth mobile user experience.
                          </p>
                          <p className="text-start">The app also integrates the Google Mobile Ads SDK and was developed and tested for Android. The project demonstrates practical experience with React Native, TypeScript, mathematical expression handling, mobile UX and third-party SDK integration.
                          </p>
                          <p className="text-start">
                            <strong>Technology:</strong> React Native, TypeScript, Android, Google Mobile Ads SDK, UX/UI.
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

export default Calculator;