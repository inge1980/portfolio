import React from "react";
import * as Skillsets from "../Skillsets";
import ScrollToTop from './../ScrollToTop/ScrollToTop';

const AllSkills = () => {
  return (
    <React.Fragment>
      <ScrollToTop />
      <Skillsets.Development />
      <Skillsets.Infrastructure />
      <Skillsets.Ai />
      <Skillsets.Tools />
      <Skillsets.Design />
      <Skillsets.More />
    </React.Fragment>
  );
};

export default AllSkills;
