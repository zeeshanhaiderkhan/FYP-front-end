import {Container, Nav, Navbar } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {FaPrescriptionBottle,FaStethoscope,FaBed,FaHospital,FaFileMedical,FaNotesMedical,FaPowerOff,FaTrash,FaSignOutAlt,FaUser} from 'react-icons/fa'
import {RiAdminFill} from 'react-icons/ri'
import {UserContext} from '../../App'
import {useContext} from 'react'

      
export default function PatientDashboardNav(){
    
    const User = useContext(UserContext);

    function SignOut(){
        localStorage.clear();
        User.setUser({role:''});
    }

    return(<Navbar bg="primary" variant="dark" >
    <Container>
    <Navbar.Brand href="/">{User.user.name}</Navbar.Brand>
    <Nav className="justify-content-center">
      <Nav.Link href={"/upload-report/"}>Add Report</Nav.Link>
      <Nav.Link href={"/upload-mammogram/"+User.user._id}>Add Mammogram</Nav.Link>
      <Nav.Link href={"/add-feedback/"}>Add Feedback</Nav.Link>
    </Nav>
    <Navbar.Text>
        <Nav.Link onClick={SignOut}>
          Sign out <FaSignOutAlt/>
        </Nav.Link>
      </Navbar.Text>
    </Container>
  </Navbar>)
}