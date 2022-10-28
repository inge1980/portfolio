import React from "react";
import "./Skill.css";
import Sdata from "./SkillData";

const Skill = () => {
  return (
    <div className="container">
      <span id="skills"></span>
      <h1>Ferdigheter</h1>
      <div class="card">
        <div class="card-body">
          <div className="skillsContainer row justify-content-md-center">
            {Sdata.map((item, index) => {
              return (
                <div
                  className="col-4 col-sm-3 col-md-3 col-lg-2"
                  key={item.skillName}
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
  );
};

export default Skill;
