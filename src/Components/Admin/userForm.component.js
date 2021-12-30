import CardButton from "../cardButton.component";
import React from 'react';
import {Form,Button, Row, Col} from 'react-bootstrap';

const data ={
    id:1,
    name:'Zeeshan',
    email:'zee@gmail.com',
    phone:'03070156758',
    cnic:'6110121720769',
    sex:'male'
}

function UserRegisterForm(){

    return(
        <>
            <Form>
            <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Name" />
    </Form.Group>
  </Row>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
  </Row>

  <Row className="mb-3">
  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Phone</Form.Label>
    <Form.Control placeholder="0312-456789" />
  </Form.Group>
        </Row>
  <Row className="mb-3">
  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>CNIC</Form.Label>
    <Form.Control placeholder="61101-2172076-9" />
  </Form.Group>
  </Row>
  <Row className="mb-3">
  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  </Row>
  
  <fieldset>
    <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={12}>
        Gender
      </Form.Label>
      <Col sm={1}>
        <Form.Check
          type="radio"
          label="Male"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          
        />
        
      </Col>
      <Col sm={1}>
      <Form.Check
          type="radio"
          label="Female"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          
        />
      </Col>
    </Form.Group>
  </fieldset>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>

</Form>
        </>
    );
}

export default UserRegisterForm;