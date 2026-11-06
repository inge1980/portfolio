import React from "react";
import { Nav } from "react-bootstrap";
// eslint-disable-next-line no-unused-vars
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import videoShoppinglist from "../../../vid/react-native-shoppinglist.mp4";
import ScrollToTop from './../../ScrollToTop/ScrollToTop';


const Familytasktopia = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="nyhetsfelt"></span>
        <h1 className="text-start">FamilyTasktopia: Shared Hierarchical Lists</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-9">
                      <p className="text-start">
                        Scan a QR code and the whole family is on the list. What started as a simple shopping list is now an Android app for shared, nested lists that work just as well offline.
                      </p>
                      <ul className="text-start">
                        <li>
                          <strong>Lists inside lists.</strong> Shopping holds the store, the store holds the groceries. Tap to tick, long-press to edit, swipe to delete, with undo and a 30-day trash.
                        </li>
                        <li>
                          <strong>Drag and drop that never stutters.</strong> Built with <abbr title="React Native Gesture Handler (version 2.x)&#13;A library that simplifies access to the platform's native touch and gesture systems.">gesture-handler 2</abbr> and <abbr title="React Native Reanimated (version 3.x)&#13;An animation library for running animations on the UI thread.&#13;(instead of the JS thread, where blocking operations can cause delays or stuttering)">reanimated 3</abbr>, running on the UI thread.
                        </li>
                        <li>
                          <strong>Share in a scan.</strong> Show a QR code or send an email invite, which arrives as a push notification or as a link with install instructions. Members edit together while the owner stays in control.
                        </li>
                        <li>
                          <strong>Offline-first.</strong> SQLite on the device, Redux as the <abbr title="Single Source of Truth&#13;Ensures that the application has one central, consistent, and up-to-date source of information.">SSOT</abbr>, and Supabase sync in bulk once online. Pull down to refresh whenever you like.
                        </li>
                        <li>
                          <strong>Built like a product.</strong> Separate dev and production environments, scheduled backups, a Google Play version gate, nine themes, English and Norwegian.
                        </li>
                      </ul>
                      <p className="text-start">
                        <strong>Want to try it?</strong> The app is in closed testing on Google Play, and Google requires 12 testers for 14 days in a row before it can go public. On Android? It takes a minute:
                      </p>
                      <ol className="text-start">
                        <li>
                          Join the <a href="https://groups.google.com/g/familytasktopia-testers" target="_blank" rel="noopener noreferrer">test group</a>.
                        </li>
                        <li>
                          Open the <a href="https://play.google.com/apps/testing/com.hippotalelabs.familytasktopia" target="_blank" rel="noopener noreferrer">testing link</a> and become a tester.
                        </li>
                        <li>
                          Download the app and stay opted in for 14 days. Opening it once is a great help.
                        </li>
                      </ol>
                      <p className="text-start">
                        It is free, and your email will be visible to me as owner of the test group. Thank you!
                      </p>
                      <p className="text-start">
                        <strong>Technology:</strong> React Native, TypeScript, Redux, SQLite, Supabase, PostgreSQL, Firebase Cloud Messaging, Next.js, GitHub Actions, Jest, React Native Gesture Handler and React Native Reanimated. The source code is private on GitHub, but selected parts can be shown upon request.
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

export default Familytasktopia;
