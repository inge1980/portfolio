import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"
import { useNavigate } from "react-router-dom";
import js1k from "../../../img/javascript-1016-byte-game.png";
import ScrollToTop from './../../ScrollToTop/ScrollToTop';

const Js1k = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="nyhetsfelt"></span>
        <h1 className="text-start">JavaScript Game Under 1024 Bytes</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-50">
                          <a href={js1k} target="_blank" rel="noopener noreferrer" title="Open the image in a new tab">
                            <img
                              className="img-thumbnail"
                              src={js1k}
                              alt="Example of the JavaScript game"
                            />
                          </a>
                        </div>
                        <div className="wordBreakText">
                          <p className="text-start">
                            In 2012, just before Valentine's Day, I entered a competition to create a
                            simple JavaScript game in under 1 kilobyte. I didn't win, but it was a fun
                            challenge and gave me an opportunity to learn more about how the HTML5 canvas
                            worked. The game displays the score on the left and the number of lives on the
                            right. Cupid has to hit as many hearts as possible before they freeze into ice.
                            The game was designed for desktop computers, with the arrow following the mouse
                            pointer.
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

export default Js1k;
