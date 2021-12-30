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
       date:"10-12-2021",
       time:"10:00",
       patient:'Zeeshan Haider Khan',
       doctor:'Shehryar Amer Butt',
       bookedOn:'31-10-2021',
    },
    {
        id:'2',
       date:"11-12-2021",
       time:"15:00",
       patient:'Zeeshan Haider Khan',
       doctor:'Shehryar Amer Butt',
       bookedOn:'28-11-2021',
    },
    
]

//name, email, cnic, phone, doctor, date registered
function Appointments(){



    return(
        <div className="container">
       <div class="container">
        <Row>
           
            <TableOptionsCustom button={<CustomModalComp title={<IconCustom icon={<FcPlus/>} size="3em" />} heading="Add New Appointment" body={<ApppointmentBookForm/> } />}/>
        </Row>
    </div>
        <TableWrapper 
        data={patientsData.map((d)=>{
                var objs = Object.values(d);
                objs.push(<a href="/testReportPDF.pdf"><IconCustom size="2em" icon={<FcViewDetails/>}/></a> );
                return objs;
            })}   //<Link to="/admin/testpatient">View</Link> 
        head={["ID","Date","Time","Doctor","Patient", "Booked On"]} />
        </div>
    );
}

function ApppointmentBookForm(){

    return(
        <>
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
        <Row>
        
         <Col>
         <input type="date" style={{ padding:5, height:60}}/>
         </Col>
         <Col>
            <FloatingLabel controlId="floatingSelect" label="TimeSlot" > 
                <Form.Select aria-label="Floating label select example">
                    
                    <option value="1">10:00</option>
                    <option value="2">11:00</option>
                    <option value="3">13:00</option>
                </Form.Select>
            </FloatingLabel>
            </Col>
        </Row>
        
            <Row className="justify-content-md-center" lg={4}>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Row>
        
            
        </>
    )
}

export default Appointments;