import React from "react";

import MediumContainer from "./MediumContainer";

const ProjectList = ({ entry: { _id, project_name, project_description } }) => {
  return (
    <MediumContainer>
      <small>Project Id: {_id}</small>
      <p>Project Name: {project_name}</p>
      <p>Project Desc: {project_description}</p>
    </MediumContainer>
  );
};

export default ProjectList;
