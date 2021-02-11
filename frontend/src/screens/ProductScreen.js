import React from "react";
import { Jumbotron, Form, Col, Button } from "react-bootstrap";
import InventoryForm from "../components/InventoryForm";
import MediumContainer from "../components/MediumContainer";

// Create new project with project name, with the inventory necessary and the total amount in-hand.
// After being created, you can edit the amount in total amount and it will synch. can be sub or add.

const ProductScreen = () => {
  return (
    <MediumContainer>
      <Jumbotron className="text-center">
        <h1>Create New Project</h1>
        <Form>
          <Form.Group as={Col} controlId="project_name">
            <Form.Label>Project Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Project Name" />
          </Form.Group>
          <Form.Group as={Col} controlId="project_desc">
            <Form.Label>Project Description</Form.Label>
            <Form.Control type="text" placeholder="Enter Project Description" />
          </Form.Group>

          <Button variant="dark" type="submit">
            Add Inventory ++
          </Button>

          <InventoryForm />

          <Button variant="primary" type="submit">
            Create Project
          </Button>
        </Form>
      </Jumbotron>
    </MediumContainer>
  );
};

export default ProductScreen;
