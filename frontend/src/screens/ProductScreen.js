import React from "react";

import { Jumbotron, Form, Col, Button } from "react-bootstrap";

import ProjectForm from "../components/ProjectForm";
import ProjectList from "../components/ProjectList";

const ProductScreen = () => {
  const listEntries = [
    {
      _id: 1,
      project_name: "Testing 1",
      project_description: "Yes this is dog 1",
    },
    {
      _id: 2,
      project_name: "Testing 2",
      project_description: "Yes this is dog 2",
    },
  ];

  return (
    <>
      <ProjectForm />
      {listEntries.map((entry) => (
        <ProjectList entry={entry} key={entry._id} />
      ))}
    </>
  );
};

export default ProductScreen;
