import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"
import { useNavigate } from "react-router-dom";
import mobilefirst from "../../../img/php-bootstrap-mobile-first.png";
import ScrollToTop from "./../../ScrollToTop/ScrollToTop";

const Mobilfirst = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <ScrollToTop />

      <div className="container">
        <span id="nyhetsfelt"></span>

        <h1 className="text-start">
          Bootstrap Modernization of a Large-Scale School CMS
        </h1>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-50">
                          <a
                            href={mobilefirst}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Open the image in a new tab"
                          >
                            <img
                              className="img-thumbnail"
                              src={mobilefirst}
                              alt="Example of the mobile-friendly improvements"
                            />
                          </a>
                        </div>

                        <div className="wordBreakText">
                          <p className="text-start">
                            At Moava, I took primary responsibility for
                            modernizing the frontend of a SaaS-based CMS used
                            by approximately 1,300 schools in Norway. The
                            existing platform was built around fixed-width
                            layouts, table-based structures, pixel dimensions
                            and custom CSS, making it difficult to support
                            modern responsive design.
                          </p>

                          <p className="text-start">
                            I modernized the page structure and more than 20
                            reusable CMS modules, including navigation, news,
                            articles, images, galleries, video, forms, tables
                            and calendars. The new frontend was built around
                            Bootstrap 3 and responsive design principles, with
                            responsive columns, mobile navigation, responsive
                            images and tables, touch-friendly controls and
                            improved accessibility and usability.
                          </p>

                          <p className="text-start">
                            A key requirement was that existing customer
                            content should remain unchanged. I therefore
                            implemented a per-school frontend switch that
                            allowed the legacy and responsive frontends to run
                            simultaneously against the same customer data.
                            This made it possible to migrate schools
                            independently, test the new frontend with pilot
                            customers and roll individual schools back to the
                            legacy frontend when necessary.
                          </p>

                          <p className="text-start">
                            Another significant challenge was the existing
                            column configuration system. Approximately 1,000
                            existing customer configurations contained
                            percentages, pixel values, mixed units and
                            technically invalid combinations. I analyzed the
                            production data, identified six recurring
                            configuration patterns and developed an algorithm
                            to convert the historical values into valid
                            Bootstrap 12-column layouts while preserving the
                            intended proportions as closely as possible.
                          </p>

                          <p className="text-start">
                            To prevent new invalid configurations, I also
                            developed a custom multi-handle slider based on
                            Bootstrap's 12-column grid. The number of handles
                            was determined by the number of columns, and the
                            handles snapped to valid Bootstrap grid positions.
                            This deliberately replaced the old free-form input
                            with a more predictable configuration model.
                          </p>

                          <p className="text-start">
                            The new frontend was introduced through internal
                            testing, remote test servers and pilot customers
                            before being rolled out progressively to the
                            remaining schools. Approximately three months after
                            the new frontend was introduced, all schools had
                            transitioned to the responsive version.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12 backLink">
                      <Nav.Link
                        className="link-primary"
                        onClick={() => navigate(-1)}
                      >
                        Go back
                      </Nav.Link>
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

export default Mobilfirst;