import React from "react";
import {Container, Nav, Navbar } from 'react-bootstrap';
import {FaPrescriptionBottle,FaStethoscope,FaBed,FaHospital,FaFileMedical,FaNotesMedical,FaPowerOff} from 'react-icons/fa'
import {RiAdminFill} from 'react-icons/ri'

function NavBarMain(){
    return(<Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/"><RiAdminFill/>   Zeeshan Haider Khan</Navbar.Brand>
    <Nav className="justify-content-center">
      <Nav.Link href="/admin/doctors"><FaHospital/></Nav.Link>
      <Nav.Link href="/admin/patients"><FaBed/></Nav.Link>
      <Nav.Link href="/admin/reports"><FaFileMedical/></Nav.Link>
      <Nav.Link href="/admin/appointments"><FaStethoscope/></Nav.Link>
      <Nav.Link href="/admin/diet-plans"><FaNotesMedical/></Nav.Link>
      <Nav.Link href="/admin/prescriptions"><FaPrescriptionBottle/></Nav.Link>
    </Nav>
    <Navbar.Text>
        <Nav.Link href="/login">
          <FaPowerOff/>
        </Nav.Link>
      </Navbar.Text>
    </Container>
  </Navbar>);
}

export default NavBarMain;