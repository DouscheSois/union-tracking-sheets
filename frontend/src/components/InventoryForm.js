import React from "react";
import { Form, Col } from "react-bootstrap";

import SmallContainer from "./SmallContainer";

const InventoryForm = () => {
  return (
    <>
      <Form.Row>
        <Form.Group as={Col} controlId="cei_number">
          <Form.Label>CEI Number</Form.Label>
          <Form.Control type="number" placeholder="Enter #CEI Number" />
        </Form.Group>

        <Form.Group as={Col} controlId="cei_desc">
          <Form.Label>Item Description</Form.Label>
          <Form.Control type="text" placeholder="Description" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="cei_measurement">
          <Form.Label>Measurement</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>ft</option>
            <option>in</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="cei_total">
          <Form.Label>Total</Form.Label>
          <Form.Control type="number" placeholder="Enter Total"></Form.Control>
        </Form.Group>
      </Form.Row>
    </>
  );
};

export default InventoryForm;
