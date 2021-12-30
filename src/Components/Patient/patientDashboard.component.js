import {GiStethoscope} from 'react-icons/gi'
import {Col, Row, Table, Form, FormControl, Button,Card,Image } from 'react-bootstrap';
import { LongTabButtons, PatientAppointmentSection, PatientCardButtons, PatientDetailSection, PatientInboxSection, PatientReportsSection } from '../Admin/patientProfile.component';
import IconCustom from '../IconCustom.component';
import NotificationBar,{Notification} from '../notifications.component';
import {IoIosNotifications} from 'react-icons/io'
import { FcViewDetails } from 'react-icons/fc';
var doctor={
    id:1,
    name:'Dr. Mahnoor Ghazanfar',
    email:'themahnoorghani@gmail.com',
    phone:'03070156758',
    cnic:'6110121720769',
    sex:'male'
}




function PatientDashboard(){
    return(
        <>
            <Row style={{backgroundColor:"#81ecec"}}>
                <Col sm={3} >
                    <Row>
                        <DoctorDetailSection/>
                    </Row>
                    <Row style={{border:'2px solid #00c7ff', borderRadius:20, backgroundColor:'pink', boxShadow:'5px 5px 15px #00c7ff', padding:10}}>
                          <Row > 
                            <h3 className="text-center" style={{color:'black'}}>Your Next Appointment On:</h3>
                            </Row>
                            <Row>
                            <h4 className="text-center">15-12-2021 @ 14:00</h4>
                            </Row>
                            <Row md={6} className="justify-content-md-center">
                            <Button><IconCustom icon={<FcViewDetails/>} /></Button>
                            </Row>
                        
                    </Row>
                </Col>
                <Col sm={9} >
                    <Row>
                        <Col  sm={9} > 
                            <PatientCardButtons/>
                        </Col>
                        <Col sm={3}>
                            <Notification icon={<IoIosNotifications/>}  title="test" datetime="21-10-2021" message="Hello Test Notification"/>
                            <Notification icon={<IoIosNotifications/>}  title="test" datetime="21-10-2021" message="Hello Test Notification"/>
                            <Notification icon={<IoIosNotifications/>}  title="test" datetime="21-10-2021" message="Hello Test Notification"/>
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

function DoctorDetailSection(){
    return(
        <div style={{border:'2px solid #00c7ff', borderRadius:20, backgroundColor:'white', boxShadow:'5px 5px 15px #00c7ff'}}>
            <Row className="justify-content-center">
                <Col lg={2}>
                <h5 className="text-center">{doctor.id}</h5>
                </Col>
            </Row>
            <Row  className="justify-content-md-center"   >

                    <Col  xs lg="8"> 
                    <Image style={{borderRadius:'50%', border:'5px solid #a29bfe',alignSelf:'center' }}  src="/doctorImage.jpg"/>
                    </Col>
                
            </Row>
            <Row className="justify-content-md-center" >
                <Col lg={4} >
                 <h4 className="text-center" style={{borderTop:'2px solid #a29bfe', marginTop:20}}>{doctor.name}</h4>
                 </Col>
            </Row>
            <Row>
            <Row className="justify-content-md-center">
                <Col lg={12} >
                <h6 className="text-center">{doctor.email}</h6>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col lg={4} >
                <p className="text-center">{doctor.phone}</p>
                </Col>
            </Row>
            </Row>

        </div>
    )
}

export default PatientDashboard;