import {useParams} from 'react-router-dom';
import PatientReports from './PatientReports'
import PatientDietPlans from './PatientDietPlans';
import PatientPrescriptions from './PatientPrescriptions';
import PatientProfileNav from './PatientProfileNav';
import PatientMammograms from './PatientMammograms';
import ChatPatient from '../Chat/ChatPatient';

import {Col, Row, Table, Form, FormControl, Button } from 'react-bootstrap';

export default function PatientProfile(){
    const {pid} = useParams();

    return(<>
     <PatientProfileNav/>
     <Row>
        <Col md={9}>
            <Row>
                <Col md={6} >
                <PatientReports/>
                </Col>
                <Col md={6}>
                <PatientMammograms/>
                </Col>
            </Row>
            <Row>
                <Col>
                <PatientPrescriptions/>
                </Col>
                <Col>
                <PatientDietPlans/>
                </Col>
            </Row>
        </Col>
        <Col md={3}>
            <ChatPatient pid={pid} />
        </Col>
    </Row>
        </>
    )
}