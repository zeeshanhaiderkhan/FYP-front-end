import React,{useEffect, useState,useContext} from "react";
import {Container, Nav, Navbar } from 'react-bootstrap';
import {FaPrescriptionBottle,FaStethoscope,FaBed,FaHospital,FaFileMedical,FaNotesMedical,FaPowerOff} from 'react-icons/fa'
import {RiAdminFill} from 'react-icons/ri'
import {useNavigate} from 'react-router-dom';

import {UserContext} from '../App';

function NavBarMain(){
  let navigate = useNavigate();
  const User = useContext(UserContext);


  const[userName,setUserName]= useState()
  
  useEffect(()=>{
   try{ const loggedInUser = localStorage.getItem('@user');

    setUserName(JSON.parse(loggedInUser).name)
  }
  catch(err){
    console.log("Cannot set username")
  }
  },[])

  function logOut(){
    localStorage.clear();
    User.setUser({role:''});
    
    //window.location.reload();
  }
    return(<Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/"><RiAdminFill/>   {userName}</Navbar.Brand>
    <Nav className="justify-content-center">
      <Nav.Link href="/admin/doctors"><FaHospital/></Nav.Link>
      <Nav.Link href="/admin/patients"><FaBed/></Nav.Link>
      <Nav.Link href="/admin/reports"><FaFileMedical/></Nav.Link>
      <Nav.Link href="/admin/appointments"><FaStethoscope/></Nav.Link>
      <Nav.Link href="/admin/diet-plans"><FaNotesMedical/></Nav.Link>
      <Nav.Link href="/admin/prescriptions"><FaPrescriptionBottle/></Nav.Link>
    </Nav>
    <Navbar.Text>
        <Nav.Link onClick={logOut}>
          <FaPowerOff/>
        </Nav.Link>
      </Navbar.Text>
    </Container>
  </Navbar>);
}

export default NavBarMain;