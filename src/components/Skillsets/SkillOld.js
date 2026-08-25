import React from "react";
import "./Skill.css";
import Sdata from "./SkillData";

const Skill = () => {
  return (
    <div className="container">
      <span id="skills"></span>
      <h1 className="text-start">Mine ferdigheter</h1>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="skills_container">
                {Sdata.map((item, index) => {
                  return (
                    <div
                      className="skills_container-item"
                      key={`skills-${index}`}
                    >
                      <div>
                        <img src={item.logo} alt="" />
                      </div>
                      <p>{item.skillName}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
