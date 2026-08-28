import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import azuredevops from "../../../img/azuredesktop.png";
import ScrollToTop from "./../../ScrollToTop/ScrollToTop";

const AzureDevOps = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="nyhetsfelt"></span>
        <h1 className="text-start">Azure .NET DevOps Platform</h1>
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
                            href={azuredevops}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Open image in new tab"
                          >
                            <img
                              className="img-thumbnail"
                              src={azuredevops}
                              alt="Screenshot of the Azure .NET DevOps deployment platform"
                            />
                          </a>
                        </div>

                        <div className="wordBreakText">
                          <p className="text-start">
                            I built an ASP.NET Core Web API and deployed it to
                            Microsoft Azure using Docker, Terraform and
                            GitHub Actions. The project focused on
                            infrastructure as code, containerized deployment
                            and automated CI/CD rather than application
                            complexity.
                          </p>

                          <p className="text-start">
                            Terraform defines the Azure infrastructure,
                            including the resource group, networking, Linux
                            Virtual Machine, Azure Container Registry and
                            managed identity. This makes the environment
                            reproducible and keeps the infrastructure
                            configuration under version control.
                          </p>

                          <p className="text-start">
                            GitHub Actions builds and publishes the Docker
                            image and deploys it to the Azure Virtual Machine.
                            OpenID Connect is used for GitHub-to-Azure
                            authentication instead of storing a long-lived
                            Azure client secret, while the VM uses a managed
                            identity with AcrPull permissions to access the
                            container registry.
                          </p>

                          <p className="text-start">
                            <strong>Technology:</strong> C#, ASP.NET Core,
                            Azure, Terraform, Docker, GitHub Actions, Linux,
                            Azure Container Registry and Managed Identity.
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

export default AzureDevOps;