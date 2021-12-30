import React from 'react';
import {Col, Row, Table, Form, FormControl, Button,Card, Stack, Container } from 'react-bootstrap';
import NotificationBar,{Notification} from '../notifications.component';
import {IoIosNotifications} from 'react-icons/io';
import { AssignedPatients } from './doctorProfile.component';
import { TableOptions } from '../tableWrapper.component';
import Patients from '../Admin/patients.component';

function DoctorDashboard(){
    
    return(
        <>
            <Row>
                <Col>
                    <DoctorStats/>
                </Col>
                <Col>
                    <Today/>
                </Col>
                <Col>
                   <h3>Notifications</h3>
                    <Notification icon={<IoIosNotifications/>}  title="test" datetime="21-10-2021" message="Hello Test Notification"/>
                            <Notification icon={<IoIosNotifications/>}  title="test" datetime="21-10-2021" message="Hello Test Notification"/>
                            <Notification icon={<IoIosNotifications/>}  title="test" datetime="21-10-2021" message="Hello Test Notification"/>

                </Col>
            </Row>
            <Row>
                <Container>
                    <Patients/>
                </Container>
            </Row>
        </>
    )
}

function DoctorStats(){
    return(<Container>
        
        <Row>
            <Col>
                <StatCard header="Patients" title={13}/>
            </Col>
            <Col>
                <StatCard header="Appointments" title={7}/>
            </Col>
        </Row>
        <Row>
            <Col>
                <StatCard header="New Reports" title={17}/>
            </Col>
            <Col>

                <StatCard header="Patients Today" title={5} />
            </Col>
        </Row>
        </Container>
    );
}

function Today(){
    
    return(<>
        <Stack>
            <h4 className="text-center"> Today</h4>
            <Row className="justify-content-center"><p hover className="text-center" style={{backgroundColor:'lightseagreen', width:'60%', borderRadius:20, padding:10,}}>Appointment with Shazia Ahmed-27</p></Row>
            <Row className="justify-content-center"><p className="text-center" style={{backgroundColor:'lightseagreen', width:'60%', borderRadius:20, padding:10}}>Appointment with Shazia Ahmed-27</p></Row>
            <Row className="justify-content-center"><p className="text-center" style={{backgroundColor:'lightseagreen', width:'60%', borderRadius:20, padding:10}}>Appointment with Shazia Ahmed-27</p></Row>

        </Stack>
    </>)
}

function StatCard(props){
    
    return(
        <>
        <Card border="primary" >
    <Card.Header className="text-center">{props.header}</Card.Header>
    <Card.Body>
      <Card.Title className="text-center">{props.title}</Card.Title>
    </Card.Body>
  </Card>
        </>
    );
}



export default DoctorDashboard;