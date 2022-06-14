import {Container, Nav, Navbar } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {FaPrescriptionBottle,FaStethoscope,FaBed,FaHospital,FaFileMedical,FaNotesMedical,FaPowerOff,FaTrash} from 'react-icons/fa'
import {RiAdminFill} from 'react-icons/ri'

//<Navbar.Brand href="/"><RiAdminFill/>   </Navbar.Brand>
/*<Navbar.Text>
        <Nav.Link >
          <FaPowerOff/>
        </Nav.Link>
      </Navbar.Text>*/
      
export default function DoctorsNav(){
    
    return(<Navbar bg="primary" variant="dark" >
    <Container>
    <Navbar.Brand href="/"></Navbar.Brand>
    <Nav className="justify-content-center">
      <Nav.Link href={"/add-user/doctor"}>Add Doctor</Nav.Link>
    </Nav>
    <Navbar.Text>
        <Nav.Link >
         
        </Nav.Link>
      </Navbar.Text>
    </Container>
  </Navbar>)
}