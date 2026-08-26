import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import iktplan from "../../../img/php-bootstrap-iktplan.png";
import ScrollToTop from './../../ScrollToTop/ScrollToTop';

const Iktplan = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="iktplan"></span>
        <h1 className="text-start">IKTplan.no improvements with <abbr title="The Norwegian Directorate for Education and Training&#13;The executive agency for the Ministry of Education and Research in Norway, responsible for kindergartens, as well as primary and secondary education.">Utdanningsdirektoratet</abbr></h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-50">
                          <a href={iktplan} target="_blank" rel="noopener noreferrer" title="Open the image in a new tab">
                            <img
                              className="img-thumbnail"
                              src={iktplan}
                              alt="Example of the UI/UX improvements"
                            />
                          </a>
                        </div>
                        <div className="wordBreakText">
                          <p className="text-start">
                            As part of the development team in 2018, I improved the user interface and overall usability of IKTplan.no, a web resource for teachers. I implemented design changes based on user testing and optimized frontend components to improve navigation and interaction.
                          </p>
                          <p className="text-start">
                            The project provided teachers with a resource for integrating digital skills into their teaching, including teacher guides, assessment criteria and videos. This supported schools in implementing digital skills as a fundamental part of the curriculum.
                          </p>
                          <p className="text-start">
                            IKTplan.no became a recognized resource for helping teachers develop students' digital competence and was later integrated into <abbr title="The Norwegian Directorate for Education and Training&#13;The executive agency for the Ministry of Education and Research in Norway, responsible for kindergartens, as well as primary and secondary education.">the Norwegian Directorate for Education and Training</abbr>'s websites as part of its support for digital skills. The project contributed to improving the quality of digital education in schools.
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

export default Iktplan;
