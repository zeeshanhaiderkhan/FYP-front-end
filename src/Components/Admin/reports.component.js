import React from 'react';
import {Col, Row, Table, Form, FormControl, Button, FloatingLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {TableWrapper,TableOptions, TableOptionsCustom} from '../tableWrapper.component';
import { FcViewDetails } from "react-icons/fc";
import IconCustom from '../IconCustom.component';
import { CustomModalComp } from '../customModal.component';
import { FcPlus } from 'react-icons/fc';
import { PatientDetailSection } from './patientProfile.component';

const patientsData=[
    {
        id:'1',
       title:'Blood CP',
       patient:'Zeeshan Haider Khan',
       doctor:'Shehryar Amer Butt',
       uploaded:'31-10-2021',
    },
    {
        id:'2',
       title:'X-ray',
       patient:'Zeeshan Haider Khan',
       doctor:'Shehryar Amer Butt',
       uploaded:'31-10-2021',
    },
    
]

//name, email, cnic, phone, doctor, date registered
function Reports(){



    return(
        <div className="container">
       <div class="container">
        <Row>
            <TableOptionsCustom button={<CustomModalComp title={<IconCustom icon={<FcPlus/>} size="3em" />} heading="Add New Report" body={<ReportUploadForm/>} /> } />
      </Row>
    </div>
        <TableWrapper 
        data={patientsData.map((d)=>{
                var objs = Object.values(d);
                objs.push(<a href="/testReportPDF.pdf"><IconCustom size="2em" icon={<FcViewDetails/>}/></a> );
                return objs;
            })}   //<Link to="/admin/testpatient">View</Link> 
        head={["ID","Title","Patient","Doctor","Uploaded"]} />
        </div>
    );
}

function ReportUploadForm(){

    return(
        <>
            <FormControl type="Text" placeholder="Report Title" style={{margin:5}}/>
            <FormControl type="file" style={{margin:5}}/>
            <FloatingLabel controlId="floatingSelect" label="Doctor" style={{margin:5}}> 
                <Form.Select aria-label="Floating label select example">
                    
                    <option value="1">Dr. Shehryar</option>
                    <option value="2">Dr. Junaid Ali Khan</option>
                    <option value="3">Dr. Umar Nauman</option>
                </Form.Select>
            </FloatingLabel>
            <FloatingLabel controlId="floatingSelect" label="Patient" style={{margin:5}}>
                <Form.Select aria-label="Floating label select example">
                    
                    <option value="1">Zeeshan Haider Khan</option>
                    <option value="2">Imran Ali Khan</option>
                    <option value="3">Kamran Ali Khan</option>
                </Form.Select>
            </FloatingLabel>
            <Row className="justify-content-md-center" lg={4}>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Row>
        </>
    )
}

export default Reports;