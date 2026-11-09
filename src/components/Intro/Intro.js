import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import image from "../../img/author.png";
import projectsData from "../Projects/ProjectsAll-in-oneData";
import ScrollToTop from "./../ScrollToTop/ScrollToTop";
import "./Intro.css";

const FEATURED_TEXTIDS = ["mobile-first", "familytasktopia", "airagcandidate"];

const proofStats = [
  { value: "12+ years", label: "professional development experience" },
  { value: "~1,300 websites", label: "migrated SaaS to responsive frontend" },
  { value: "20+ modules", label: "modernized in a CMS for schools" },
];

const allProjects = projectsData.flatMap((category) =>
  category.sections.flatMap((section) => section.projects)
);

const featuredProjects = FEATURED_TEXTIDS.map((textid) =>
  allProjects.find((project) => project.textid === textid)
).filter(Boolean);

const githubUrl = `https://github.com/${process.env.REACT_APP_GITHUB_USERNAME}`;
const linkedinUrl = `https://www.linkedin.com/in/${process.env.REACT_APP_LINKEDIN_USERNAME}/`;

const ProjectLink = ({ link }) =>
  link.type === "readmore" ? (
    <Link to={link.url} className="card-link">
      {link.text}
    </Link>
  ) : (
    <a
      href={link.url}
      className="card-link"
      target="_blank"
      rel="noreferrer"
    >
      {link.text}
    </a>
  );

const Intro = () => {
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="col-12 home">
        <section className="hero">
          <img src={image} className="heroImage" alt="Profile" />
          <div className="heroText">
            <h1 className="heroName">{process.env.REACT_APP_AUTHOR_NAME}</h1>
            <p className="heroHeadline">
              Fullstack developer who modernizes ERP, e-commerce and CMS
              platforms. Now available with C#/.NET, Azure and AI/RAG skills.
            </p>
            <p className="heroSub">
              Fullstack and Frontend Developer seeking new opportunities.
            </p>
            <div className="heroButtons">
              <Link to="/contact/" className="btn btn-primary">
                <FaEnvelope aria-hidden="true" /> Contact
              </Link>
              <a
                href={githubUrl}
                className="btn btn-dark"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub aria-hidden="true" /> GitHub
              </a>
              <a
                href={linkedinUrl}
                className="btn btn-outline-primary"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin aria-hidden="true" /> LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section className="proofStrip" aria-label="Key numbers">
          {proofStats.map((stat) => (
            <div className="proofTile" key={stat.value}>
              <span className="proofValue">{stat.value}</span>
              <span className="proofLabel">{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="featured">
          <h2 className="featuredTitle">Featured projects</h2>
          <div className="row g-3">
            {featuredProjects.map((project) => (
              <div className="col-md-4 d-flex" key={project.textid}>
                <div className="card featuredCard border-secondary w-100">
                  <img
                    src={project.image}
                    className="card-img-top featuredImage"
                    alt={project.title}
                  />
                  <div className="card-body text-start d-flex flex-column">
                    <h3 className="h5 card-title">{project.title}</h3>
                    <p className="card-text">{project.description}</p>
                    {Array.isArray(project.links) && project.links.length > 0 && (
                      <p className="card-text featuredLinks mt-auto mb-0">
                        {project.links.map((link) => (
                          <ProjectLink key={link.text} link={link} />
                        ))}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="allProjects">
            <Link to="/projects/">View all projects</Link>
          </p>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Intro;
