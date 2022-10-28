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
          alert(
            "Tusen takk, beskjeden er sendt. Jeg vil kontakte deg snart som mulig."
          );
          e.target.reset();
        },
        (err) => {
          alert(
            "Beklager, det kan virke som om du ikke er helt menneskelig. Glemte du kanskje \u00E5 klikke i boksen? :-)"
          );
        }
      );

    captchaRef.current.reset();
  };

  return (
    <section>
      <span id="contact"></span>
      <h1>Kontakt meg</h1>

      <div className="container contact_container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Navn" required />
          <input type="email" name="email" placeholder="Epost" required />
          <input
            type="tel"
            name="mobile"
            placeholder="Telefonnummer"
            maxLength={8}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Beskjed"
            required
          ></textarea>
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
            ref={captchaRef}
          />
          <button type="submit" className="btn btn-success">
            Send beskjed
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
