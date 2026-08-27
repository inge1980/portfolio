import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import videoNewsfield from "../../../vid/newsfield.mp4";
import ScrollToTop from './../../ScrollToTop/ScrollToTop';

const Newsfield = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="nyhetsfelt"></span>
        <h1 className="text-start">News Feed with Inline Editing</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-3">
                      <p className="text-start">
                      I redesigned the news publishing workflow by introducing inline editing inside a modal window, allowing users to create and update articles without leaving the page or reloading the website. The workflow was reduced from five clicks to one while keeping everything in a single workspace.
                      </p>
                      <p className="text-start">
                      The editor was built around CKEditor with file uploads, live previews, automatic saving while typing, visual feedback for unsaved changes, and support for rearranging media content directly inside the article.
                      </p>
                      <p className="text-start">
                      As demonstrated in the video, publishing happens immediately when the modal is closed, updating the live website without requiring a full page refresh.
                      </p>
                    </div>
                    <div className="col-md-9">
                      <video className="embed-responsive-item ratio ratio-1x1" controls autoPlay muted>
                        <source src={videoNewsfield} type="video/mp4" />
                        Sorry, your browser does not support video playback.
                      </video>

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

export default Newsfield;