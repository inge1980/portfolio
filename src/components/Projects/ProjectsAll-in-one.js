import React, { useState } from 'react';
import { Link } from 'react-scroll';
import LazyLoad from 'react-lazyload';
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import projectsData from "./ProjectsAll-in-oneData";
import BackToTop from "../Hooks/BackToTopButton";

// Memoized ProjectItem-komponent
const ProjectItem = React.memo(({ data, projectIndex, scrollToAnchor, projectToLoad, getDebounceValue, setScrollToAnchor }) => {
  return (
    <div key={projectIndex} id={`project_${data.textid}`} className="card mb-3 border-secondary" /* style={{maxWidth: '540px'}} */>
      <div className="row g-0">
        <div className="col-md-4">
          <LazyLoad
            height={200}
            offset={200} // Start lastebildet 200px før det er synlig
            debounce={getDebounceValue(projectIndex)} // Bruk dynamisk debounce verdi
            once // Last kun én gang
            isVisible={scrollToAnchor && projectToLoad === projectIndex} // Når anchor-klikk skjer, simuler at prosjektet er synlig
            onContentVisible={() => {
              if (scrollToAnchor && projectToLoad === projectIndex) {
                setScrollToAnchor(false); // Når vi har scrollet til prosjektet, avslutt scrollToAnchor
              }
            }}
          >

            {data.image ? (
              <img
                src={`${data.image}`}
                className="rounded-start"
                alt={`Project ${projectIndex}`}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              ) : (
                  <img
                  src={`https://fakeimg.pl/400x200?text=${data.textid}`}
                  className="rounded-start"
                  alt={`Project ${projectIndex}`}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
              )}
          </LazyLoad>
        </div>
        <div className="col-md-8">
          <div className="card-body" style={{ height: "200px", position: 'relative' }}>
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.description}</p>
            {/* {data.links && <a href="#" className="card-link">({data.links})</a>} */}
            {Array.isArray(data.links) && data.links.length > 0 && (
              <p className="card-text" style={{ position: 'absolute', bottom: '10px', left: 0, right: 0, marginInline: 'auto', width: 'fit-content' }}>
                {data.links.map((link, index) => (
                  link.text === "Les mer" ? (
                    <LinkContainer to={link.url} key={index}>
                      <Nav.Link className="card-link">{link.text}</Nav.Link>
                    </LinkContainer>
                  ) : (
                    <a 
                      key={index} 
                      href={link.url} 
                      className="card-link" 
                      rel="noreferrer" 
                      target="_blank"
                    >
                      {link.text}
                    </a>
                  )
                ))}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

function ProjectPage() {
  const [scrollToAnchor, setScrollToAnchor] = useState(false);
  const [projectToLoad, setProjectToLoad] = useState(null);

  // Når en anchor-lenke klikkes, setter vi scrollToAnchor til true og sporer hvilket prosjekt som skal lastes
  const handleAnchorClick = (projectIndex) => {
    setScrollToAnchor(true);
    setProjectToLoad(projectIndex); // Angir hvilket prosjekt som skal lastes umiddelbart
  };

  // Bestem debounce-verdi: 0 for anchor-lenker (umiddelbar lasting for det spesifikke prosjektet), 200 for manuell scrolling
  const getDebounceValue = (index) => {
    // Hvis vi har klikket på et prosjekt, skal dette prosjektet ha debounce 0 (umiddelbar lasting), de andre 200ms
    if (scrollToAnchor && projectToLoad === index) {
      return 0; // Ingen forsinkelse ved anchor-klikk for det spesifikke prosjektet
    }
    return 200; // 200ms forsinkelse for manuell scrolling, og for andre prosjekter
  };
  let projectCounter = 0;
  let projectCounterLink=0;
  return (
    <div>
    <div className="experience-container">
      {projectsData.map((category, catIndex) => (
        <section key={catIndex} className="category">
          <header>
            <h2>{category.category}</h2>
            {category.description && <p>({category.description})</p>}
          </header>

          {category.sections.map((section, secIndex) => (
            <article key={secIndex} className="section">
              <header>
                {section.company ? (
                  <h3>
                    {section.company} ({section.periodstart}-{section.periodend}) - {section.role}
                  </h3>
                ) : (
                  <h3>
                    {section.periodstart} - {section.title} ({section.periodstart}-{section.periodend})
                  </h3>
                )}
                {section.description && <p>({section.description})</p>}
              </header>

              <ul className="project-list">
                {section.projects.map((project) => {
                  projectCounterLink++;
                  return(
                    <li key={projectCounterLink} className="project">
                      <h4>
                          <Link
                              to={`project_${project.textid}`}
                              smooth={true}
                              duration={500}
                              offset={-60}
                              onClick={() => handleAnchorClick(projectCounterLink)}
                          >
                              {project.title}
                          </Link> 
                      </h4>
                      {project.description && <p>- {project.description}</p>}
                    </li>
                  )
                })}
              </ul>
            </article>
          ))}
        </section>
      ))}
    </div>

        <div style={{ textAlign: 'left'}}>
            {/* Prosjektene med bilder */}
            {projectsData.map((category, index) => {
                const catIndex = index + 1;

                return (
                    <div key={catIndex}>
                        {category.sections.map((section, secIndex) => (
                            <div key={secIndex}>
                                {/* <h3>{section.title} ({section.period})</h3>
                                {section.description && <p>{section.description}</p>} */}

                                {section.projects.map((project) => {
                                  projectCounter++;
                                  return (
                                    <ProjectItem
                                          key={`project-${catIndex}-section-${secIndex}-proj-${projectCounter}`}
                                          data={project}
                                          projectIndex={projectCounter}
                                          scrollToAnchor={scrollToAnchor}
                                          projectToLoad={projectToLoad}
                                          getDebounceValue={getDebounceValue}
                                          setScrollToAnchor={setScrollToAnchor}
                                      />
                                    )
                                })}
                            </div>
                        ))}
                    </div>
                );
            })}

        </div>
        
      <BackToTop />
    </div>
  );
}

export default ProjectPage;