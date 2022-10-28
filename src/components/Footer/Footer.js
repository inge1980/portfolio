import React from "react";
import FData from "./FooterData";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container footerContainer">
      <div class="row mb-3 text-center">
        <footer>
          <span className="footer_logo">INGE</span>

          <div className="footer_container">
            {FData.map((item) => {
              return (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  key={item.img}
                >
                  <img src={item.img} alt="" />
                </a>
              );
            })}
          </div>

          <div className="footer_copyright">
            <p className="text">&copy; {process.env.REACT_APP_AUTHOR_NAME}</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
