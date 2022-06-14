import CardButton from "../cardButton.component";
import React from 'react';
import {Col, Row } from 'react-bootstrap';

// style={{border:'5px solid black'}}
function DashboardButtonsBar(){
    return(<div  className="container">
        <Row className="float-end">
            <Col md={4}>
            <CardButton title="Doctors" icon="/doctors.svg" to="/admin/doctors"/>
            </Col>
            <Col md={4} >
            <CardButton title="Patients" icon="/patients.svg" to="/admin/patients"/>
            </Col>
            <Col md={4}>
            <CardButton title="Reports" icon="/reports.svg" to="/admin/reports "/>
            </Col>
        </Row>
        <Row className="float-end">
            <Col md={4}>
            <CardButton title="Appointments" icon="/appointments.svg" to="/admin/appointments"/>
            </Col>
            <Col md={4}>
            <CardButton title="Diet Plans" icon="/dietplans.svg" to="/admin/diet-plans"/>
            </Col>
            <Col md={4}>
            <CardButton title="Prescriptions" icon="/prescriptions.svg" to="/admin/prescriptions" />
            </Col>
        </Row>

    </div>);
}


export default DashboardButtonsBar;

