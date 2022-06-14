import PatientDashboardReports from './PatientDashboardReports'
import PatientDashboardMammograms from './PatientDashboardMammograms';
import PatientDashboardNav from './PatientDashboardNav';
import PatientDashboardAppointments from './PatientDashboardAppointments';
import PatientDashboardDoctorProfile from './PatientDashboardDoctorProfile';
import PatientDashboardPrescriptions from './PatientDashboardPrescriptions';


import { useContext } from 'react';
import {UserContext} from '../../App';
import Typography from '@mui/material/Typography';
import Accordion from '@material-ui/core/Accordion/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Row,Col} from 'react-bootstrap';

import ChatDoctor from '../Chat/ChatDoctor';

import './DropShadow.css';
import PatientDashboardDietPlans from './PatientDashboardDietPlans';

function AccordionWrap(props){

    return(
        <Accordion >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography>{props.title}</Typography></AccordionSummary>
            <AccordionDetails>{props.component}</AccordionDetails>
        </Accordion>
    )
}
/*<Row style={{justifyContent:'right'}}>
            <Col className="align-self-end" md={4}>
                <ChatDoctor/>
            </Col>
        </Row>*/

export default function PatientDashboard(){
    const User = useContext(UserContext)
    const pid = User.user._id;

    return(<>
        <df-messenger
            intent="WELCOME"
            chat-title="BCCAD"
            agent-id="b4d84cac-5fd8-45e3-9dd3-ff5e66818bb1"
            language-code="en"
            ></df-messenger>
        <Row>
            <Col>
            <div className="dropShadow">
                <AccordionWrap  component={<PatientDashboardReports pid={pid}/>} title="Reports"/>
                <AccordionWrap component={<PatientDashboardMammograms pid={pid}/>} title="Mammograms"/>
                <AccordionWrap component={<PatientDashboardPrescriptions pid={pid}/>} title="Prescriptions"/>
                <AccordionWrap component={<PatientDashboardDietPlans pid={pid}/>} title="Diet Plans"/>
               
            </div>
            </Col>
            <Col>
                <PatientDashboardAppointments/>
                
            
         </Col>
            <Col>
                <PatientDashboardDoctorProfile/>
                <ChatDoctor/>
            </Col>
        </Row>
        
        
    </>)
}