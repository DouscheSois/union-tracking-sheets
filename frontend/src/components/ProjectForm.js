import React, { useState } from "react";
import { Form, Col, Jumbotron, Button } from "react-bootstrap";

import MediumContainer from "./MediumContainer";

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    project_name: "",
    project_description: "",
  });

  const { project_name, project_description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(project_name, project_description);
  };

  return (
    <Jumbotron className="text-center">
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Row>
          <Form.Group as={Col} controlId="project_name">
            <Form.Label>Project Name</Form.Label>
            <Form.Control
              type="text"
              name="project_name"
              placeholder="Enter Project Name"
              value={project_name}
              onChange={(e) => onChange(e)}
              className="project-name-input"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="project_desc">
            <Form.Label>Project Description</Form.Label>
            <Form.Control
              type="text"
              name="project_description"
              placeholder="Enter Project Description"
              value={project_description}
              onChange={(e) => onChange(e)}
            />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">
          Create Project
        </Button>
      </Form>
    </Jumbotron>
  );
};
export default ProjectForm;
