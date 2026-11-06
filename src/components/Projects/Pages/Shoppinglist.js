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
                        FamilyTasktopia started as a simple React Native shopping list and has grown into an Android app for shared family lists. Lists can be nested as deep as you like, so Shopping can hold the groceries, while Wishes, Todo and anything else get their own branches.
                        Items are checked off with a tap, long-pressed to edit, and swiped to the left to delete, with a convenient undo option after a few seconds. Deleted lists move to a trash bin where they can be restored, deleted permanently or emptied, and are cleaned up automatically after 30 days.
                      </p>
                      <p className="text-start">
                        I used <abbr title="React Native Gesture Handler (version 2.x)&#13;A library that simplifies access to the platform's native touch and gesture systems.">react-native-gesture-handler version 2</abbr> and <abbr title="React Native Reanimated (version 3.x)&#13;An animation library for running animations on the UI thread.&#13;(instead of the JS thread, where blocking operations can cause delays or stuttering)">react-native-reanimated version 3</abbr> to create a smooth drag-and-drop experience.
                        Press and hold the handle on the right side of an item to drag it up or down. The interaction runs on the UI thread to avoid stuttering caused by a blocked JavaScript thread, and new items are added with a clearly visible button that is easy to reach with a thumb.
                      </p>
                      <p className="text-start">
                        Lists are shared one at a time, including the whole branch beneath them. The owner can send an invitation by email, show fast-share with a QR code. The invitiation arrives as a push notification if the recipient is already registered and has the app installed, and if not the recipient receives a link via email that shows instructions on how to install the app. With a QR code The other person scans the code inside the app, or accepts the invitation from a card on their list. Members can add, edit, reorder and delete items in the list, see who shared the list with them, and leave whenever they like, while the owner can see everyone with access and withdraw both access and active invitations.
                      </p>
                      <p className="text-start">
                        The app is offline-first. The lists are stored locally using SQLite and synchronized through Redux with a Supabase Postgres database when the device is online, and you can pull down in the user interface to force refresh the list. The synchronization works on a 10 second debounce interval, meaning that the app will wait 10 seconds before synchronizing all changes in bulk to reduce number of API calls. Redux state acts as the <abbr title="Single Source of Truth&#13;Ensures that the application has one central, consistent, and up-to-date source of information.">SSOT</abbr>, while data is loaded from either SQLite or Supabase depending on the connection status. The local database evolves through versioned migrations, so installed apps can be updated without losing data.
                        Sign-in is email and password with confirmation, and there are nine themes, English and Norwegian, and a switch for notifications.
                      </p>
                      <p className="text-start">
                        It is built and released like a real product. Development and production run against separate Supabase environments, GitHub Actions handle scheduled database backups and trash cleanup, and the app ships through Google Play with a version gate that requires an in-app update when needed.
                        The source code is currently private on GitHub, but selected parts can be shown upon request.
                      </p>
                      <p className="text-start">
                        <strong>Technology:</strong> React Native, TypeScript, Redux, SQLite, Supabase, PostgreSQL, Firebase Cloud Messaging, Next.js, GitHub Actions, Jest, React Native Gesture Handler and React Native Reanimated.
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
