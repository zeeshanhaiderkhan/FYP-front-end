import React,{useState,useEffect} from 'react';
import {Col, Row, Table, Form, FormControl, Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {TableWrapper,TableOptions} from '../tableWrapper.component';
import { FcViewDetails } from "react-icons/fc";
import IconCustom from '../IconCustom.component';
import { CustomModalComp } from '../customModal.component';
import { FcPlus } from 'react-icons/fc';
import { PatientDetailSection } from './patientProfile.component';

//name, email, cnic, phone, doctor, date registered
function Patients(){

    const[patients,setPatients] = useState([])
    const[toDelete,setToDelete] =useState("");

    useEffect(()=>{
        fetch("http://localhost:8700/patient/all").then(response => response.json()).then(data => setPatients(data));
        console.log(patients);
    },[]);

    
    return(
        <div className="container">
       <div class="container">
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
        <CustomModalComp title={<IconCustom icon={<FcPlus/>} size="3em" />} heading="Patient Registration Form" 
        body={
            <PatientDetailSection edit={false}/>
        }
        />
        </Row>
        </Col>
      </Row>
    </div>
        <TableWrapper 
        data={patients.map((d)=>{
                var objs = [d._id,d.name,d.contact,d.email,d.cnic,d.password]
                objs.push(<Link to={`/admin/patient/profile/${d._id}`}><IconCustom size="2em" icon={<FcViewDetails/>}/></Link> );
                objs.push(<Link to={`/admin/patient/delete/${d._id}`}>Delete</Link> );
                return objs;
            })}   //<Link to="/admin/testpatient">View</Link> 
        head={["ID","Name","Contact","Email","Cnic","Password","View","Delete"]} />
        </div>
    );
}

export default Patients;