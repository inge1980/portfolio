import React from "react";
import { Nav } from "react-bootstrap";
//import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import videoFormBuilder from "../../../vid/form_builder.mp4";
import ScrollToTop from './../../ScrollToTop/ScrollToTop';


const FormBuilder = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="skjemabygger"></span>
        <h1 className="text-start">GDPR-Compliant Form Builder</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">


                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-75">
                          <video className="embed-responsive-item ratio ratio-1x1" controls autoPlay muted>
                            <source src={videoFormBuilder} type="video/mp4" />
                            Sorry, your browser does not support video.
                          </video>
                        </div>
                        <div className="wordBreakText">
                          <p className="text-start">
                            While working at Moava AS, I developed a form builder for their administration system. Users could start by choosing 
                            from a range of templates, then edit or duplicate individual fields inline. Fields could be organized using drag-and-drop, 
                            while fields with unsaved changes were highlighted in a subtle red color. To comply with GDPR requirements, data retention periods 
                            were enforced on the company's servers, and customers could view submitted results for each form, reply directly to the sender, and 
                            export all results.
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

export default FormBuilder;