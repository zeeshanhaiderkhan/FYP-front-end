import { Button,Row,Col } from "react-bootstrap"
import { Typography } from "@mui/material"
import './DropShadow.css';

export default function PatientDashboardAppointments(){

    return(<div className="dropShadow">
        <Col>
            <Row style={{textAlign:'center'}}><Typography variant="h5">Appointments</Typography><hr/></Row>
            <Row  style={{textAlign:'center', backgroundColor:'blue',borderRadius:20,padding:'5%'}}><Typography color="white">Upcoming Appointment</Typography><Typography color={'white'} fontWeight={'bold'}>20-May-2022 14:00</Typography></Row>

        </Col>
        
    </div>)
}