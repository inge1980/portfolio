import React from "react";
import "./MoreSkills.css";
import Sdata from "./MoreSkillsData";

const MoreSkills = () => {
  return (
    <div className="container">
      <span id="moreskills"></span>
      <h4 className="heading text-start">Jeg er ogs&aring; godt kjent med</h4>
      <div className="row">
        <div className="col-12">
          <div class="card">
            <div class="card-body">
              <div className="skills_container">
                {Sdata.map((item, index) => {
                  return (
                    <div
                      className="skills_container-item"
                      key={`moreskills-${index}`}
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

export default MoreSkills;
