import React, { useState } from "react";
import { Nav, Navbar, Container, Offcanvas } from "react-bootstrap";
import "./Navbar.css";

const BootstrapNavbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          sticky="top"
          key={expand}
          bg="light"
          expand={expand}
          className="mb-3"
        >
          <Container fluid>
            <Navbar.Brand href="#">
              {process.env.REACT_APP_AUTHOR_NAME}
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={handleShow}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              responsive="md"
              show={show}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Meny
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#projects_1" onClick={handleClose}>
                    React prosjekt
                  </Nav.Link>
                  <Nav.Link href="#projects_2" onClick={handleClose}>
                    Andre prosjekt
                  </Nav.Link>
                  <Nav.Link href="#skills" onClick={handleClose}>
                    Ferdigheter
                  </Nav.Link>
                  <Nav.Link href="#contact" onClick={handleClose}>
                    Kontakt
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default BootstrapNavbar;
