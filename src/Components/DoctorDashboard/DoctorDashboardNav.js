import {Container, Nav, Navbar } from 'react-bootstrap';
import {useParams} from 'react-router-dom';

import {RiAdminFill} from 'react-icons/ri'
import {UserContext} from '../../App'
import {useContext} from 'react';
import {FaSignOutAlt} from 'react-icons/fa'
//<Navbar.Brand href="/"><RiAdminFill/>   </Navbar.Brand>
/*<Navbar.Text>
        <Nav.Link >
          <FaPowerOff/>
        </Nav.Link>
      </Navbar.Text>*/
      
export default function DoctorDashboardNav(){
    const User = useContext(UserContext);
    function SignOut(){
        localStorage.clear();
        User.setUser({role:''});
    }

    return(<Navbar bg="primary" variant="dark" style={{marginBottom:'3%'}}>
    <Container>
    <Navbar.Brand href="/">{User.user.name}</Navbar.Brand>
    <Nav className="justify-content-center">
      <Nav.Link href={"/"}>Patients</Nav.Link>
      <Nav.Link href="/admin/patients"></Nav.Link>
      
    </Nav>
    <Navbar.Text>
        <Nav.Link onClick={SignOut}>
          Sign out <FaSignOutAlt/>
        </Nav.Link>
      </Navbar.Text>
    </Container>
  </Navbar>)
}