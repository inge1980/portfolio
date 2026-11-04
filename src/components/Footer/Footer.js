import React from "react";
import FData from "./FooterData";
import "./Footer.css";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
/*
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
JSX:
            <p><Button variant="contained">Hello world</Button></p>
            <p>
              <Icon>add_circle</Icon>
              <Icon color="primary">add_circle</Icon>
              <Icon fontSize="small">add_circle</Icon>
              <Icon sx={{ fontSize: 30 }}>add_circle</Icon>
            </p>
*/

const Footer = () => {
  return (
    <div className="container footerContainer">
      <div className="row pt-4 mb-3 text-center">
        <footer>
          <div className="footer_container">
            {FData.map(({ Icon, label, link }) => (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                key={label}
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className="footer_copyright">
            <p className="text">
              &copy; {new Date().getFullYear()} {process.env.REACT_APP_AUTHOR_NAME}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
