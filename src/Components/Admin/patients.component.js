import React from 'react';
import {Col, Row, Table, Form, FormControl, Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {TableWrapper,TableOptions} from '../tableWrapper.component';
import { FcViewDetails } from "react-icons/fc";
import IconCustom from '../IconCustom.component';
import { CustomModalComp } from '../customModal.component';
import { FcPlus } from 'react-icons/fc';
import { PatientDetailSection } from './patientProfile.component';
const patientsData=[
    {
        id:1,
        name:'Zeeshan',
        email:'zee@gmail.com',
        phone:'03070156758',
        cnic:'6110121720769',
        doctor:'Kamran',
        dateRegistered:'25-10-2021' 
    },
    {
        id:2,
        name:'Shehryar',
        email:'sherry@gmail.com',
        phone:'03070156758',
        cnic:'6110121720769',
        doctor:'Kamran',
        dateRegistered:'25-10-2021' 
    },
    {
        id:3,
        name:'Shehryar',
        email:'sherry@gmail.com',
        phone:'03070156758',
        cnic:'6110121720769',    
        doctor:'Kamran',
        dateRegistered:'25-10-2021' 
    },
    {
        id:4,
        name:'Shehryar',
        email:'sherry@gmail.com',
        phone:'03070156758',
        cnic:'6110121720769',  
        doctor:'Kamran',
        dateRegistered:'25-10-2021'   
    },
    {
        id:5,
        name:'Shehryar',
        email:'sherry@gmail.com',
        phone:'03070156758',
        cnic:'6110121720769',
        doctor:'Kamran',
        dateRegistered:'25-10-2021' 
    },
    {
        id:5,
        name:'Taha',
        email:'sherry@gmail.com',
        phone:'03070156758',
        cnic:'6110121720769',
        doctor:'Kamran',
        dateRegistered:'25-10-2021' 
    }
]

//name, email, cnic, phone, doctor, date registered
function Patients(){



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
            <PatientDetailSection/>
        }
        />
        </Row>
        </Col>
      </Row>
    </div>
        <TableWrapper 
        data={patientsData.map((d)=>{
                var objs = Object.values(d);
                objs.push(<Link to="/admin/testpatient"><IconCustom size="2em" icon={<FcViewDetails/>}/></Link> );
                return objs;
            })}   //<Link to="/admin/testpatient">View</Link> 
        head={["ID","Name","Email","Phone","Cnic","Doctor","Date-Registered","View"]} />
        </div>
    );
}

export default Patients;