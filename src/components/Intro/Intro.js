import React from "react";
import { Card, Nav } from "react-bootstrap";
import "./Intro.css";
import image from "../../img/author.png";
import { LinkContainer } from "react-router-bootstrap";
import ScrollToTop from "./../ScrollToTop/ScrollToTop";

const Intro = () => {
  const text = {
    title: "Who am I?",
    desc1: (
      <React.Fragment>
        I am a fullstack developer looking for fullstack and frontend
        opportunities.
        <br />
        <br />
        Over the years, I have built up{" "}
      </React.Fragment>
    ),
    linkText:
      "12 years of professional development experience, plus several years of hobby experience from various programming projects before and throughout my career.",
    desc2: (
      <React.Fragment>
        {" "}
        I have worked extensively with CMS customization, ERP and PIM
        integrations, primarily using PHP with MySQL and SQL Server. HTML, CSS,
        JavaScript, and libraries such as Bootstrap and jQuery have therefore
        been a natural part of my work for many years.
        <br />
        <br />
        I like keeping up with modern technology, and in recent years I have
        expanded my skills through courses in Node.js, React and TypeScript,
        as well as a master's-level course in User-Oriented Design and
        university-level mathematics.
        <br />
        <br />
        My recent projects have also given me hands-on experience with React,
        React Native, C# and .NET, REST APIs, Azure, Docker, PostgreSQL, and
        modern AI technologies such as RAG, embeddings, vector databases, and
        semantic search.
        <br />
        <br />
        I have a solid foundation in object-oriented programming and learn new
        technologies quickly. I am therefore looking forward to specializing
        further in the languages, frameworks, and tools used by my future
        employer.
      </React.Fragment>
    ),
  };

  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="col-md-12 introCard">
        <Card className="cardSmall">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{text.title}</Card.Title>
            <Card.Text className="text-start">
              {text.desc1}
              <LinkContainer to="/portfolio/projects">
                <Nav.Link href="#" className="link-primary">
                  {text.linkText}
                </Nav.Link>
              </LinkContainer>
              {text.desc2}
              <LinkContainer to="/portfolio/contact/">
                <Nav.Link href="#" className="link-primary">
                  Contact me
                </Nav.Link>
              </LinkContainer>
            </Card.Text>
          </Card.Body>
        </Card>

        <div className="cardBig card mb-3">
          <div className="row g-0">
            <div className="col-sm-3 col-md-4">
              <img
                src={image}
                className="img-fluid"
                alt="Profile"
              />
            </div>
            <div className="col-sm-9 col-md-8">
              <div className="card-body">
                <h5 className="card-title">{text.title}</h5>
                <p className="card-text">{text.desc}</p>
                <p className="card-text text-start">
                  {text.desc1}
                  <LinkContainer to="/portfolio/projects">
                    <Nav.Link href="#" className="link-primary">
                      {text.linkText}
                    </Nav.Link>
                  </LinkContainer>
                  {text.desc2}
                </p>
                <p className="card-text text-center">
                  <LinkContainer to="/portfolio/contact/">
                    <Nav.Link href="#" className="link-primary">
                      Contact me
                    </Nav.Link>
                  </LinkContainer>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Intro;