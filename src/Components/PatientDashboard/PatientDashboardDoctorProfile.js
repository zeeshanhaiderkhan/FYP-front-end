import {FaUser, FaUserMd} from 'react-icons/fa'
import './DropShadow.css'
import {Row,Col} from 'react-bootstrap'
import Typography from '@mui/material/Typography';

export default function PatientDashboardDoctorProfile(){


    return(<div className='dropShadow'>
        <Col>
            <Row>
                <FaUserMd size={100}/>
            </Row>
            <Row style={{textAlign:'center'}}>
                <Typography fontWeight="bold" fontFamily={'sans-serif'} variant='h5'>Dr. Taha Rashid</Typography>
            </Row>
            <Row style={{textAlign:'center'}}>
                <Typography variant='h6'>03070156758</Typography>
                <Typography variant='h6'>taha@gmail.com</Typography>
            </Row>
        </Col>


    </div>)
}