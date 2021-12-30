import CardButton from "../cardButton.component";
import React from 'react';
import {Col, Row, Table, Form, FormControl, Button, } from 'react-bootstrap';
import IconCustom from "../IconCustom.component";
import { Link } from "react-router-dom";
import { FcPlus, FcViewDetails } from "react-icons/fc";
import { CustomModalComp } from "../customModal.component";
import { PatientDetailSection } from "./patientProfile.component";

const doctorData=[
    {
        id:1,
        name:'Zeeshan',
        email:'zee@gmail.com',
        phone:'03070156758',
        cnic:'6110121720769',
        sex:'male'
    },
    {
        id:2,
        name:'Shehryar',
        email:'sherry@gmail.com',
        phone:'03070156758',
        cnic:'6110121720769',
        sex:'male'
    },
    {
        id:3,
        name:'Shehryar',
        email:'sherry@gmail.com',
        phone:'03070156758',
        cnic:'6110121720769',
        sex:'male'
    },
    {
        id:4,
        name:'Shehryar',
        email:'sherry@gmail.com',
        phone:'03070156758',
        cnic:'6110121720769',
        sex:'male'
    },
    {
        id:5,
        name:'Shehryar',
        email:'sherry@gmail.com',
        phone:'03070156758',
        cnic:'6110121720769',
        sex:'male'
    }
]

function DoctorOptions(){
    return(<div class="container">
        <Row>
            <Col md={3}>
            <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form></Col>
        <Col>
        <Row className="float-end">
        <CustomModalComp title={<IconCustom icon={<FcPlus/>} size="3em" />} heading="Doctor Form" 
        body={
            <PatientDetailSection/>
        }
        />
        </Row>
        </Col>
      </Row>
    </div>);
}




function DoctorsTable(){
    return(
        <div className="container">
       
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>E-mail</th>
      <th>Phone</th>
      <th>CNIC</th>
      <th>Sex</th>
      <th>View</th>
    </tr>
  </thead>
  <tbody>
    {
        doctorData.map((doc)=>
        <tr>
            <td>{doc.id}</td>
            <td>{doc.name}</td>
            <td>{doc.email}</td>
            <td>{doc.phone}</td>
            <td>{doc.cnic}</td>
            <td>{doc.sex}</td>
            <td><Link to="/doctor/dashboard"><IconCustom size="2em" icon={<FcViewDetails/>}/></Link></td>
        </tr>
        )
    }
  </tbody>
</Table></div>
    );
}

function Doctors(){
    return(
        <div>
            <DoctorOptions/>
            <DoctorsTable/>
        </div>
    );
}


export default Doctors;
