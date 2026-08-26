import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import exportresults from "../../../img/excel.png";
import ScrollToTop from './../../ScrollToTop/ScrollToTop';

const ExportResults = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="iktplan"></span>
        <h1 className="text-start">Form Data Export & Consolidation</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-25">
                          <a href={exportresults} target="_blank" rel="noopener noreferrer" title="Open image in new tab">
                            <img
                              className="img-thumbnail"
                              src={exportresults}
                              alt="Example of the form data and the file export"
                            />
                          </a>
                        </div>
                        <div className="wordBreakText">
                          <p className="text-start">
                            After developing a form builder with reusable templates, there was a need to export submitted results in CSV and XLS formats. I implemented the export functionality using PHPSpreadsheet, including support for file attachments. Attachments were packaged into a ZIP file for download, while the exported Excel spreadsheet contained working links to the corresponding files for each submission.
                          </p>
                          <p className="text-start">
                            The solution made it easier for administrators to manage and analyze submitted form data while supporting GDPR-compliant data handling. By allowing customers to take responsibility for further processing of exported data, submitted information could be deleted from our systems according to the agreed retention and consent requirements.
                          </p>
                          <p className="text-start">
                            The result was an efficient and user-friendly export workflow that simplified data processing and reduced manual administration. It also made it easier for customers to consolidate and securely work with submitted data and attachments.
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

export default ExportResults;
