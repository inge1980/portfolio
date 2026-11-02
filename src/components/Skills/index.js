import React from "react";
import "./style.css";
import SkillCategories from "./data";
import ScrollToTop from "./../ScrollToTop/ScrollToTop";

// Most months first. On equal months, most projects first.
// Skills without a value go last. Remaining ties keep their data order.
const sortByExperience = (skills) =>
  [...skills].sort(
    (a, b) =>
      (b.monthsOfExperience ?? -1) - (a.monthsOfExperience ?? -1) ||
      (b.projects ?? -1) - (a.projects ?? -1)
  );

const Skills = () => {
  // Combine all category arrays into one array, sorted by experience.
  const Sdata = sortByExperience(Object.values(SkillCategories).flat());

  const featuredSkills = Sdata.filter((item) => item.featured);
  const additionalSkills = Sdata.filter((item) => !item.featured);

  const formatExperience = (months) => {
    if (months < 10) return `+${months} months`;
    const years = Math.floor(months / 12) + (months % 12 >= 10 ? 1 : 0);
    return `+${years} ${years === 1 ? "year" : "years"}`;
  };


  const renderSkill = (item, index) => (
    <div
      className="skills_container-item"
      key={`skills-${item.skillName}-${index}`}
    >
      <div>
        {item.logo && (
          <img src={item.logo} alt={`${item.skillName} logo`} />
        )}
      </div>

      <p>{item.skillName}</p>

      <div className="skill-meta">
        {item.monthsOfExperience != null && (
        <span>{formatExperience(item.monthsOfExperience)}</span>
        )}

        {item.projects != null && (
        <span>
            {item.projects > 20
                ? "+20 projects"
                : `${item.projects} ${item.projects === 1 ? "project" : "projects"}`}
        </span>
        )}
      </div>

      {item.experienceType && (
        <small className="skill-experience-type">
          {item.experienceType}
        </small>
      )}
    </div>
  );

  return (
    <React.Fragment>
      <ScrollToTop />

      <div className="container">
        <span id="development"></span>

        <h1 className="text-start">Skills</h1>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                {/* Featured skills */}
                <div className="skills_container">
                  {featuredSkills.map(renderSkill)}
                </div>

                {/* Additional skills */}
                {additionalSkills.length > 0 && (
                  <details className="additional-skills">
                    <summary>
                      Additional technologies ({additionalSkills.length})
                    </summary>

                    <div className="skills_container">
                      {additionalSkills.map(renderSkill)}
                    </div>
                  </details>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skills;