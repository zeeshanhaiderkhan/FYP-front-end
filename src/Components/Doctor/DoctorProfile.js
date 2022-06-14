import DoctorEditForm from "./DoctorEditForm"
import AssignedPatients from "./AssignedPatients"
import { useParams } from 'react-router-dom';
import React,{useState} from 'react';
import {Col, Row, Table, Form, FormControl, Button } from 'react-bootstrap';

import AssignPatient from './AssignPatient';

export default function DoctorProfile(){
    const {did} = useParams();
    return(
        <>
            <Row>
                <Row>
                <Col md={9}>
                <AssignPatient did={did} />
                    <Row>
                    <AssignedPatients did={did} />
                    </Row>
                    <Row>
                    <AssignedPatients did={did} />
                    </Row>
                    
                </Col>
                <Col md={3}>
                    <DoctorEditForm/>
                   
                </Col>
                </Row>
            </Row>
        </>
    )
}