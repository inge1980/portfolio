import React from "react";
import "./../style.css";
import Sdata from "./data";

const Development = () => {
  return (
    <div className="container">
      <span id="more"></span>
      <h1 className="text-start">Additional Technologies</h1>
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

export default Development;