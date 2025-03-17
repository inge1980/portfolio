import React, { Component } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Navbar.css";

class BootstrapNavbar extends Component {
  state = {
    expanded: false,
  };
  setExpanded = (expanded) => this.setState({ expanded: expanded });
  handleClose = () => this.setState({ expanded: false });

  render() {
    var expand = "md";
    return (
      <Navbar
        sticky="top"
        key={expand}
        bg="light"
        expand={expand}
        className="mb-3"
        onToggle={this.setExpanded}
        expanded={this.state.expanded}
      >
        <Container fluid>
          <LinkContainer to="/portfolio/">
            <Navbar.Brand href="#" onClick={this.handleClose}>
              {process.env.REACT_APP_AUTHOR_NAME}
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Collapse id={`offcanvasNavbar-expand-${expand}`}>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <LinkContainer to="/portfolio">
                <Nav.Link href="#" onClick={this.handleClose}>
                  Hjem
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/portfolio/projects/">
                <Nav.Link href="#projects_1" onClick={this.handleClose}>
                  Prosjekter
                </Nav.Link>
              </LinkContainer>
{/*               <LinkContainer to="/portfolio/projects2/">
                <Nav.Link href="#projects_2" onClick={this.handleClose}>
                  Prosjekter2
                </Nav.Link>
              </LinkContainer> */}
              <LinkContainer to="/portfolio/skills/">
                <Nav.Link href="#skills" onClick={this.handleClose}>
                  Ferdigheter
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/portfolio/contact/">
                <Nav.Link href="#contact" onClick={this.handleClose}>
                  Kontakt
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default BootstrapNavbar;
