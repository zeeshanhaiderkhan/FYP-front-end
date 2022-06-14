import React from 'react';
import {Col, Row, Stack, Button, Form } from 'react-bootstrap';
import CardButton from '../cardButton.component';

import 'react-chat-elements/dist/main.css';
// MessageBox component
import { MessageBox, ChatItem } from 'react-chat-elements';
import UserDetailForm from './userDetailForm.component';
import {FcPlus} from 'react-icons/fc'
import IconCustom from '../IconCustom.component';
import CustomModal from '../customModal.component';
import {useParams} from 'react-router-dom';

function PatientProfile(){
    var patientID=useParams().id;

    return(
        <>
            <Row style={{backgroundColor:"#ffc1e3"}}>
                <Col sm={3} >
                    <PatientDetailSection edit={true}  name="test" email="test@gmail.com" cnic="61101-2172076-9" phone="03070156758" id={patientID} />
                </Col>
                <Col sm={9} >
                    <Row>
                        <Col  sm={9} > 
                            <PatientCardButtons/>
                        </Col>
                        <Col>
                            <PatientAppointmentSection/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={9}>
                            <PatientReportsSection/>
                        </Col>
                        <Col>
                            <PatientInboxSection/>
                        </Col>
                        
                    </Row>
                </Col>
                
            </Row>
        </>
    );
}

/*<>
            <Row>
                <Col sm={3}>
                    <PatientDetailSection name="test" email="test@gmail.com" cnic="61101-2172076-9" phone="03070156758" id={1} />
                </Col>
                <Col sm={6} >
                    <Row>
                        <PatientCardButtons/>
                    </Row>
                    <Row>
                        <PatientReportsSection/>
                    </Row>
                </Col>
                <Col sm={3}>
                    <Row>
                        <PatientAppointmentSection/>
                    </Row>
                    <Row>
                        <PatientInboxSection/>
                    </Row>
                </Col>
            </Row>
        </>*/

function PatientDetailSection(props){ //id,name,email,cnic,phone ,,img
    /*<Container >
        <Stack >
            <div ><h3>{props.id}</h3></div>
            <div><h4>{props.name}</h4></div>
            <div><h5>{props.email}</h5></div>
            <div><h6>{props.cnic}</h6></div>
            <div><h6>{props.phone}</h6></div>
        </Stack>
        </Container> */
    return(
        <div style={{padding:20, boxShadow:"10px black", borderRadius:20}}>
        <UserDetailForm id={props.id} edit={props.edit} />
        </div>
    );
}

function PatientReportsSection(){

    return(
        <div style={{ padding:20, borderRadius:20}}>
            <LongTabButtons title="View" href="/testReportPDF.pdf" data="1. Blood-CP"/>
            <LongTabButtons title="View" href="/testReportPDF.pdf" data="2. X-Ray Chest"/>
            <LongTabButtons title="View" href="/testReportPDF.pdf" data="3. Ultrasound Abdomen"/>
        </div>
    );
}
//<Button href={props.href}>{props.title}</Button>
function LongTabButtons(props){
    return(
        <div className="row"   style={{backgroundColor:'#a29bfe', borderRadius:'10px', margin:10, boxShadow:"-10px -5px 10px grey", }}> 
                
                <Col md={4} className="align-self-center"><h5 style={{color:'white'}}>{props.data}</h5></Col>
                <Col  className="align-self-center"><Row className="justify-content-end" ><Col md={2}>

                    {props.modal ? <CustomModal title={props.title} heading={props.heading} />:<Button href={props.href} >{props.title}</Button>}
                    
                    
                    </Col></Row></Col>
        </div>
    );
}

function PatientCardButtons(){
    return(
        <Stack style={{ borderRadius:20}}>
            <LongTabButtons title={<IconCustom icon={<FcPlus/>} size="2em"/> } heading="Upload Report" data="Add New Report" modal={true}/>

            <Stack direction="horizontal" gap={2}  className="justify-content-center" style={{marginTop:50, marginBottom:50}}>
                <CardButton to="#" title="Appointments" icon="/appointments.svg"/>
                <CardButton to="#" title="Prescriptions" icon="/prescriptions.svg" />
                <CardButton to="#" title="Diet Plans" icon="/dietPlans.svg"/>
            </Stack>
        </Stack>
        
    );
}

function PatientAppointmentSection(){

    return(
        <div style={{backgroundColor:'#ffc1e3'}}>
            <Stack>
                <h3>
                    Next Appointment
                </h3>
                <h4>
                    10:00
                </h4>
                <h5>
                    25-May-2021
                </h5>
            </Stack>
        </div>
    );
}






function PatientInboxSection(){

    return(
        <div style={{backgroundColor:'#f48fb1', padding:10, borderRadius:20}}>
        <ChatItem
    avatar={'/patients.svg'}
    alt={'Reactjs'}
    title={'Dr Mahnoor Ghazanfar'}
    subtitle={'How are you doing?'}
    date={new Date()}
    unread={0}  />

<ChatItem
    avatar={'/ribbon.png'}
    alt={'Reactjs'}
    title={'Admin Arshad'}
    subtitle={'Are you good with the issue?'}
    date={new Date()}
    unread={0}  />
    
    <ChatItem
    avatar={'/patients.svg'}
    alt={'Reactjs'}
    title={'Dr Mahnoor Ghazanfar'}
    subtitle={'How are you doing?'}
    date={new Date()}
    unread={0}  />
    
        </div>
    );
}

export{
    PatientInboxSection,
    PatientAppointmentSection,
    PatientCardButtons,
    LongTabButtons,
    PatientReportsSection,
    PatientDetailSection,
}

export default PatientProfile;

