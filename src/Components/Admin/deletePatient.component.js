import React,{useState,useEffect, Nav} from 'react';
import {Col, Row, Table, Form, FormControl, Button, } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {TableWrapper,TableOptions} from '../tableWrapper.component';
import { FcViewDetails } from "react-icons/fc";
import IconCustom from '../IconCustom.component';
import { CustomModalComp } from '../customModal.component';
import { FcPlus } from 'react-icons/fc';
import { PatientDetailSection } from './patientProfile.component';

//name, email, cnic, phone, doctor, date registered
function DeletePatient(){
    var id=useParams().id;
    const navigate = useNavigate();

   function deletePatient(){
       fetch("http://localhost:8700/patient/"+id,{
           method:"DELETE",
           headers:{
               "Content-Type":"application/json"
           }
       }).then(function(response){
           if(response.ok){
               navigate('/admin/patients');
           }else{
                console.log("error");
           }
       });
   }

   return(<div className="container" style={{margin:20}}>
    <Button onClick={deletePatient} >Confirm Delete</Button>
   </div>)
}

export default DeletePatient;