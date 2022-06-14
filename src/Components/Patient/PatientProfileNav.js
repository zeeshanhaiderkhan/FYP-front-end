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
      
export default function PatientProfileNav(){
    const {pid} = useParams();
    
    return(<Navbar bg="primary" variant="dark" >
    <Container>
    <Navbar.Brand href="/"></Navbar.Brand>
    <Nav className="justify-content-center">
      <Nav.Link href={"/upload-report/"+pid}>Add Report</Nav.Link>
      <Nav.Link href={"/add-prescription/"+pid}>Add Prescription</Nav.Link>
      <Nav.Link href={"/add-dietplan/"+pid}>Add Diet Plan</Nav.Link>
      <Nav.Link href={"/upload-mammogram/"+pid}>Add Mammogram</Nav.Link>
    </Nav>
    <Navbar.Text>
        <Nav.Link >
          <FaTrash/>
        </Nav.Link>
      </Navbar.Text>
    </Container>
  </Navbar>)
}