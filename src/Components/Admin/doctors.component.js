import CardButton from "../cardButton.component";
import React from 'react';
import {Col, Row, Table, Form, FormControl, Button,Accordion } from 'react-bootstrap';
import IconCustom from "../IconCustom.component";
import { Link } from "react-router-dom";
import { FcPlus, FcViewDetails } from "react-icons/fc";
import { CustomModalComp } from "../customModal.component";
import { PatientDetailSection } from "./patientProfile.component";
import { useState, useEffect } from "react";
import DoctorAddForm from './doctorAddForm.component';

import API_URL from "../../config";

function DoctorOptions(props){
  const [doctorsBackup,setDoctorsBackup] = props.doctorBackupHook;
  const [doctors,setDoctors] = props.doctorHook;
  const [searchText,setSearchText] = useState();
  

  const searchFunction=(text)=>{
    if(text.length<=0){
      setDoctors(doctorsBackup);
    }
    else{
      setDoctors(doctorsBackup.filter((x)=>
        x.name.toLowerCase().includes(text.toLowerCase()) || x.email.toLowerCase().includes(text.toLowerCase()) || x.phone.toLowerCase().includes(text.toLowerCase())
      ))
    }
    
  }

    return(<div class="container">
        <Row>
            <Col md={3}>
            <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(event)=>{
              searchFunction(event.target.value)
          }}
        />
      </Form></Col>
        <Col>
        <Row className="float-end">
        <CustomModalComp title={<IconCustom icon={<FcPlus/>} size="3em" />} heading="Doctor Form" 
        body={
            <DoctorAddForm/>
        }
        />
        
        </Row>
        </Col>
      </Row>
    </div>);
}




function DoctorsTable(props){


  const [doctors,setDoctors] = props.doctorHook;
  const [doctorsBackup,setDoctorsBackup] =props.doctorBackupHook;
        useEffect(()=>{
            fetch(API_URL+"/doctor/all").then(response => response.json()).then(data => {setDoctors(data);setDoctorsBackup(data)});
            console.log(doctors);
        },[]);
    

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
        doctors.map((doc)=>
        <tr>
            <td >{doc._id}</td>
            <td>{doc.name}</td>
            <td>{doc.email}</td>
            <td>{doc.phone}</td>
            <td>{doc.cnic!=""?"-":doc.cnic}</td>
            <td>{doc.sex!=""?"-":doc.sex}</td>
            <td><Link to="/doctor/dashboard"><IconCustom size="2em" icon={<FcViewDetails/>}/></Link></td>
        </tr>
        )
    }
  </tbody>
</Table></div>
    );
}

function Doctors(){
  const[doctors,setDoctors] = useState([])
  const[toDelete,setToDelete] =useState("");
  const [doctorsBackup,setDoctorsBackup] =useState([]);
    return(
        <div>
            <DoctorOptions doctorHook={[doctors,setDoctors]}  doctorBackupHook={[doctorsBackup,setDoctorsBackup]}/>
            <DoctorsTable doctorHook={[doctors,setDoctors]}   doctorBackupHook={[doctorsBackup,setDoctorsBackup]}/>
        </div>
    );
}


export default Doctors;
