import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import videoThemePicker from "../../../vid/theme_picker.mp4";
import videoColorPicker from "../../../vid/color_picker.mp4";
import imgBothPickers from "../../../img/javascript-both-pickers.png";
import imgThemePicker from "../../../img/bootswatch-temavelger.png";
import ScrollToTop from './../../ScrollToTop/ScrollToTop';


const ThemePicker = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="themepicker"></span>
        <h1 className="text-start">Dynamic Theme Picker & Color Customization</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">

                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-50">
                          <a href={imgBothPickers} target="_blank" rel="noopener noreferrer" title="Open the image in a new tab">
                            <img
                              className="img-thumbnail"
                              src={imgBothPickers}
                              alt="Example of the admin menu at the top"
                            />
                          </a>
                        </div>
                        <div className="wordBreakImage w-50">
                          <a href={imgThemePicker} target="_blank" rel="noopener noreferrer" title="Open the image in a new tab">
                            <img
                              className="img-thumbnail"
                              src={imgThemePicker}
                              alt="Example of the theme selection"
                            />
                          </a>
                        </div>
                        <div className="wordBreakText">
                          <p className="text-start">
                            I implemented a dynamic theme picker by integrating Bootswatch with Bootstrap, allowing users to preview different themes through an administration menu before saving their changes. I also developed functionality for adjusting the background color and inverting menu colors, with a user-friendly live preview.
                          </p>
                          <p className="text-start">
                            This reduced the need for developer and design resources by allowing customers to choose and customize themes themselves, rather than requiring manual design changes. It also gave customers greater flexibility to create more unique websites without additional development work.
                          </p>
                          <p className="text-start">
                            The result was an administration solution that gave customers simple control over their design choices while reducing the need for custom changes during onboarding. This contributed to a more streamlined and efficient onboarding process.
                          </p>
                          <p className="text-start">
                            For more details, see the images or watch the videos for a demonstration.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <video className="embed-responsive-item ratio ratio-1x1" controls autoPlay muted>
                        <source src={videoThemePicker} type="video/mp4" />
                        Your browser does not support video playback.
                      </video>
                      <video className="embed-responsive-item ratio ratio-1x1" controls autoPlay muted>
                        <source src={videoColorPicker} type="video/mp4" />
                        Your browser does not support video playback.
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

export default ThemePicker;