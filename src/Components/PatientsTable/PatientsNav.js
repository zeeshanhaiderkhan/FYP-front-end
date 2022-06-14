import {Container, Nav, Navbar } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {FaPrescriptionBottle,FaStethoscope,FaBed,FaHospital,FaFileMedical,FaNotesMedical,FaPowerOff,FaTrash} from 'react-icons/fa'
import {RiAdminFill} from 'react-icons/ri'


      
export default function PatientsNav(){
    
    return(<Navbar bg="primary" variant="dark" >
    <Container>
    <Navbar.Brand href="/"></Navbar.Brand>
    <Nav className="justify-content-center">
      <Nav.Link href={"/add-user/patient"}>Add Patient</Nav.Link>
    </Nav>
    <Navbar.Text>
        <Nav.Link >
         
        </Nav.Link>
      </Navbar.Text>
    </Container>
  </Navbar>)
}