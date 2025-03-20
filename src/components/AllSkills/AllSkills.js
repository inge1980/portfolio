import React from "react";
import Skillsets from "./../Skillsets/Skill";
import MoreSkills from "./../MoreSkills/MoreSkills";
import ScrollToTop from './../ScrollToTop/ScrollToTop';

const AllSkills = () => {
  return (
    <React.Fragment>
      <ScrollToTop />
      <Skillsets />
      <MoreSkills />
    </React.Fragment>
  );
};

export default AllSkills;
