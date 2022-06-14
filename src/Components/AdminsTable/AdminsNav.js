import {Container, Nav, Navbar } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {FaPrescriptionBottle,FaStethoscope,FaBed,FaHospital,FaFileMedical,FaNotesMedical,FaPowerOff,FaTrash} from 'react-icons/fa'
import {RiAdminFill} from 'react-icons/ri'


      
export default function AdminsNav(){
    
    return(<Navbar bg="primary" variant="dark" >
    <Container>
    <Navbar.Brand href="/"></Navbar.Brand>
    <Nav className="justify-content-center">
      <Nav.Link href={"/add-user/admin"}>Add Admin</Nav.Link>
    </Nav>
    <Navbar.Text>
        <Nav.Link >
         
        </Nav.Link>
      </Navbar.Text>
    </Container>
  </Navbar>)
}