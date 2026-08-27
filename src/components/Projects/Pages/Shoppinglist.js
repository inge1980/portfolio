import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import videoShoppinglist from "../../../vid/react-native-shoppinglist.mp4";
import ScrollToTop from './../../ScrollToTop/ScrollToTop';


const Shoppinglist = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="nyhetsfelt"></span>
        <h1 className="text-start">React Native Shopping List App</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-9">
                      <p className="text-start">
                        I used <abbr title="React Native Gesture Handler (version 2.x)&#13;A library that simplifies access to the platform's native touch and gesture systems.">react-native-gesture-handler version 2</abbr> and <abbr title="React Native Reanimated (version 3.x)&#13;An animation library for running animations on the UI thread.&#13;(instead of the JS thread, where blocking operations can cause delays or stuttering)">react-native-reanimated version 3</abbr> to create a smooth drag-and-drop experience.<br/>
                        <br/>
                        Users can press and hold the icon on the right side of an item to drag it up or down. The interaction runs on the UI thread to avoid potential stuttering caused by blocking the JavaScript thread.
                        New items can be added using a clearly visible button that is easily accessible with a thumb, while items can be deleted by swiping them to the left.
                      </p>
                      <p className="text-start">
                        The shopping list is stored locally using SQLite and synchronized through Redux with a Supabase Postgres database when the device is online. This is an offline-first app, where the Redux state acts as the <abbr title="Single Source of Truth&#13;Ensures that the application has one central, consistent, and up-to-date source of information.">SSOT</abbr>, while data is loaded from either SQLite or Supabase depending on the connection status.
                        The source code is currently private on GitHub, but selected parts can be shown upon request.
                      </p>
                    </div>
                    <div className="col-md-3">
                      <video className="embed-responsive-item ratio ratio-1x1" controls autoPlay muted>
                        <source src={videoShoppinglist} type="video/mp4" />
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

export default Shoppinglist;