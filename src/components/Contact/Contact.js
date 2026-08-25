import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import ScrollToTop from './../ScrollToTop/ScrollToTop';

const Contact = () => {
  const captchaRef = useRef(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    captchaRef.current.getValue();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        ({ status }) => {
          console.log('EmailJS success:', status); // Debugging
          alert(
            "Thank you very much. Your message has been sent. I'll contact you as soon as possible."
          );
          e.target.reset();
        },
        (err) => {
          const errorMessage = err.message || 'An unknown error occurred'; // Default message if no specific message exists
          console.log('EmailJS error:', errorMessage); // Debugging
          alert(
            "Sorry, it looks like you might not be entirely human. Did you forget to check the box? :-)"
          );
        }
      );

    captchaRef.current.reset();
  };

  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="contact"></span>
        <h1 className="h3 mb-3 font-weight-normal">Contact me</h1>
        <form className="form-signin" ref={form} onSubmit={sendEmail}>
          <div className="row">
            <div className="col-md-3 pe-0 text-start text-md-end">
              <label htmlFor="inputName">Name:</label>
            </div>
            <div className="col-md-9 mb-2">
              <input
                type="text"
                name="name"
                placeholder="Enter your name here.."
                id="inputName"
                className="form-control"
                required="required"
              />
            </div>

            <div className="col-md-3 pe-0 text-start text-md-end">
              <label htmlFor="inputEmail">Email:</label>
            </div>
            <div className="col-md-9 mb-2">
              <input
                type="email"
                name="email"
                placeholder="Enter your email here.."
                required="required"
                id="inputEmail"
                className="form-control"
              />
            </div>

            <div className="col-md-3 pe-0 text-start text-md-end">
              <label htmlFor="inputPhone">Phone number:</label>
            </div>
            <div className="col-md-9 mb-2">
              <input
                type="tel"
                name="mobile"
                placeholder="Enter your phone number here.."
                maxLength={8}
                required="required"
                id="inputPhone"
                className="form-control"
              />
            </div>

            <div className="col-md-3 pe-0 text-start text-md-end">
              <label htmlFor="inputMessage">Message:</label>
            </div>
            <div className="col-md-9 mb-2">
              <textarea
                name="message"
                rows="7"
                placeholder="Enter your message here.."
                required="required"
                id="inputMessage"
                className="form-control"
              ></textarea>
            </div>
            <div className="col-md-12 text-end">
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                ref={captchaRef}
                onChange={(token) => {
                  // Bruker har fullført reCAPTCHA, token sendes til EmailJS
                  console.log("reCAPTCHA token:", token);
                }}
              />
              <button className="btn btn-success float-left mt-2" type="submit">
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Contact;
