import React from "react";
import "./MoreSkills.css";
import Sdata from "./MoreSkillsData";

const MoreSkills = () => {
  return (
    <div className="container">
      <span id="moreskills"></span>
      <h4 className="heading">Ogs&aring; kjent med...</h4>
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

export default MoreSkills;
