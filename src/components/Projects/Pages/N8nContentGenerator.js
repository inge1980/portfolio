import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import n8ncontentcreatorworkflow from "../../../img/n8n-content-creator-workflow.png";
import n8ncontentcreatorspreadsheet from "../../../img/n8n-content-creator-spreadsheet.png";
import n8ncontentcreatorrailwaydashboard from "../../../img/n8n-content-creator-railway-dashboard.png";
import n8ncontentcreatormemeexample from "../../../img/n8n-content-creator-meme-example.png";
import ScrollToTop from "./../../ScrollToTop/ScrollToTop";

const N8nContentGenerator = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="nyhetsfelt"></span>
        <h1 className="text-start">Automated Content Generator Pipeline with n8n</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-50">
                            <a href={n8ncontentcreatorworkflow} target="_blank" rel="noopener noreferrer" title="Open image in new tab">
                              <img
                                className="img-thumbnail"
                                src={n8ncontentcreatorworkflow}
                                alt="Screenshot of the n8n Social Content Generator workflow"
                              />
                            </a>

                          <div className="smallImages">
                            <div className="smallImage">
                              <a href={n8ncontentcreatormemeexample} target="_blank" rel="noopener noreferrer" title="Open image in new tab">
                                <img
                                  className="img-thumbnail"
                                  src={n8ncontentcreatormemeexample}
                                  alt="Screenshot of the n8n Social Content Generator workflow"
                                />
                              </a>
                            </div>
                            <div className="smallImage">
                              <a href={n8ncontentcreatorrailwaydashboard} target="_blank" rel="noopener noreferrer" title="Open image in new tab">
                                <img
                                  className="img-thumbnail"
                                  src={n8ncontentcreatorrailwaydashboard}
                                  alt="Screenshot of the n8n Social Content Generator workflow"
                                />
                              </a>
                            </div>
                            <div className="smallImage">
                              <a href={n8ncontentcreatorspreadsheet} target="_blank" rel="noopener noreferrer" title="Open image in new tab">
                                <img
                                  className="img-thumbnail"
                                  src={n8ncontentcreatorspreadsheet}
                                  alt="Screenshot of the n8n Social Content Generator workflow"
                                />
                              </a>
                            </div>
                          </div>

                        </div>


                        <div className="wordBreakText">
                          <p className="text-start">
                            I built an automated social media content pipeline
                            using n8n, Google Gemini and Pexels. The workflow
                            generates structured content ideas, retrieves
                            relevant stock-image candidates and uses Gemini to
                            select the most suitable image based on the
                            generated content.
                          </p>

                          <p className="text-start">
                            The selected image is downloaded, processed with
                            generated text and uploaded to Google Drive, while
                            Google Sheets stores the content, image metadata,
                            source attribution and generated asset reference.
                            Previous subjects and image IDs are also used as
                            context to reduce repeated content and images.
                          </p>

                          <p className="text-start">
                            Google Sheets acts as both persistence and a
                            lightweight human-review interface, with separate
                            creation and posting states. The workflow supports
                            scheduled and manual execution but does not
                            implement automated social media publishing.
                          </p>

                          <p className="text-start">
                            <strong>Technology:</strong> n8n, JavaScript,
                            Google Gemini, Pexels API, Google Sheets, Google
                            Drive and Railway.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12 backLink">
                      <React.Fragment>
                        <Nav.Link
                          className="link-primary"
                          onClick={() => navigate(-1)}
                        >
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

export default N8nContentGenerator;