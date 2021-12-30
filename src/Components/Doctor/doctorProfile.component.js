import React from 'react';
import {Col, Row, Table, Form, FormControl, Button,Card } from 'react-bootstrap';


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

function DoctorProfile(props){
    
    return(
        <>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/doctor.png" />
            <Card.Body>
                <Card.Title>{props.doctorName}</Card.Title>
                <Card.Text>
                {props.email}
                </Card.Text>
                <Card.Text>
                {props.cnic}
                </Card.Text>
                <Card.Text>
                {props.sex}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            <AssignedPatients/>
        </>

    );
}

function AssignedPatients(props){

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
      <th>Edit</th>
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
            <td><a href="lol">Edit</a></td>
        </tr>
        )
    }
  </tbody>
</Table></div>
    );
}

export {AssignedPatients};
export default DoctorProfile;