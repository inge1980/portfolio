import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

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
            "Tusen takk, beskjeden er sendt. Jeg vil kontakte deg snart som mulig."
          );
          e.target.reset();
        },
        (err) => {
          const errorMessage = err.message || 'En ukjent feil oppstod'; // Default message if no specific message exists
          console.log('EmailJS error:', errorMessage); // Debugging
          alert(
            "Beklager, det kan virke som om du ikke er helt menneskelig. Glemte du kanskje \u00E5 klikke i boksen? :-)"
          );
        }
      );

    captchaRef.current.reset();
  };

  return (
    <React.Fragment>
      <div className="container">
        <span id="contact"></span>
        <h1 className="h3 mb-3 font-weight-normal">Kontakt meg</h1>
        <form className="form-signin" ref={form} onSubmit={sendEmail}>
          <div className="row">
            <div className="col-md-3 pe-0 text-start text-md-end">
              <label htmlFor="inputName">Navn:</label>
            </div>
            <div className="col-md-9 mb-2">
              <input
                type="text"
                name="name"
                placeholder="Skriv ditt navn her.."
                id="inputName"
                className="form-control"
                required="required"
              />
            </div>

            <div className="col-md-3 pe-0 text-start text-md-end">
              <label htmlFor="inputEmail">Epost:</label>
            </div>
            <div className="col-md-9 mb-2">
              <input
                type="email"
                name="email"
                placeholder="Skriv din epost her.."
                required="required"
                id="inputEmail"
                className="form-control"
              />
            </div>

            <div className="col-md-3 pe-0 text-start text-md-end">
              <label htmlFor="inputPhone">Telefonnummer:</label>
            </div>
            <div className="col-md-9 mb-2">
              <input
                type="tel"
                name="mobile"
                placeholder="Skriv ditt telefonnummer her.."
                maxLength={8}
                required="required"
                id="inputPhone"
                className="form-control"
              />
            </div>

            <div className="col-md-3 pe-0 text-start text-md-end">
              <label htmlFor="inputMessage">Beskjed:</label>
            </div>
            <div className="col-md-9 mb-2">
              <textarea
                name="message"
                rows="7"
                placeholder="Skriv inn din beskjed her.."
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
                Send beskjed
              </button>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Contact;
