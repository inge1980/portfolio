import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import airagcandidate from "../../../img/ai-candidate-assistant.png";
import ScrollToTop from "./../../ScrollToTop/ScrollToTop";

const AIRagCandidate = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="nyhetsfelt"></span>
        <h1 className="text-start">AI Candidate Assistant with RAG</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="subpage_container w-100">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="wordBreakWrapper">
                        <div className="wordBreakImage w-50">
                          <a
                            href={airagcandidate}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Open image in new tab"
                          >
                            <img
                              className="img-thumbnail"
                              src={airagcandidate}
                              alt="Screenshot of the AI Candidate Assistant with RAG"
                            />
                          </a>
                        </div>

                        <div className="wordBreakText">
                          <p className="text-start">
                            I built an AI-powered candidate assistant using
                            ASP.NET Core, PostgreSQL and pgvector. The system
                            uses Retrieval-Augmented Generation (RAG) to
                            retrieve relevant candidate information before
                            passing the context to a language model.
                          </p>

                          <p className="text-start">
                            The project was created to explore how an AI
                            application can combine traditional backend
                            development with vector search and large language
                            models. Candidate data is stored in PostgreSQL,
                            while pgvector provides vector similarity search
                            for retrieving relevant information.
                          </p>

                          <p className="text-start">
                            The backend also supports multiple LLM providers
                            through a fallback strategy. This allows the
                            application to continue operating when the
                            preferred provider is unavailable and demonstrates
                            practical handling of external AI service
                            dependencies.
                          </p>

                          <p className="text-start">
                            <strong>Technology:</strong> C#, ASP.NET Core,
                            PostgreSQL, pgvector, RAG, LLM APIs and vector
                            search.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12 backLink">
                      <React.Fragment>
                        <Nav.Link
                          className="link-primary"
                          onClick={() => navigate(-1)}
                        >
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

export default AIRagCandidate;