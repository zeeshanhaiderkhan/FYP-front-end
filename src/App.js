import React from 'react';
import {  Row, Col, Nav, Tab } from 'react-bootstrap';
import Login from './Components/login.component'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavMain from './Components/nav.component';
import NotificationBar from './Components/notifications.component';
import CardButton from './Components/cardButton.component';
import DashboardButtonsBar from './Components/Admin/dashboardButtonsBar.component';
import Doctors from './Components/Admin/doctors.component';
import DoctorProfile from './Components/Doctor/doctorProfile.component';
import RegisterRegiterForm from './Components/Admin/userForm.component';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import DashBoardPage from './Components/Admin/dashboard.page';
import TableWrapper from './Components/tableWrapper.component';
import Patients from './Components/Admin/patients.component';
import PatientProfile from './Components/Admin/patientProfile.component';
import PatientDashboard from './Components/Patient/patientDashboard.component';
import DoctorDashboard from './Components/Doctor/doctorDashboard.component';
import Reports from './Components/Admin/reports.component';
import Appointments from './Components/Admin/appointment.component';
import DietPlans from './Components/Admin/dietPlans.component';
import Prescriptions from './Components/Admin/prescriptions.component';

var li= [{name:'Zeeshan'},{name:'Sherry'}];

function App(){


  return(
    
    <Router>
      <NavMain/>
      
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        
        <Route exact path="admin/dashboard" element={<DashBoardPage/>} on/>
        <Route exact path="admin/doctors" element={<Doctors/>} />
        <Route path="admin/patients" element={<Patients/>} />
        <Route path="admin/testPatient" element={<PatientProfile/>} />
        <Route exact path="admin/reports" element={<Reports/>} />
        <Route exact path="admin/appointments" element={<Appointments/>} />
        <Route exact path="admin/diet-plans" element={<DietPlans/>} />
        <Route exact path="admin/prescriptions" element={<Prescriptions/>} />

        <Route path="patient/dashboard" element={<PatientDashboard/>} />
        <Route path="doctor/dashboard" element={<DoctorDashboard/>}/>
        
      </Routes>
      
    </Router>
  );
}

export default App;

/*  <>
      <RegisterRegiterForm/>
      <Row className="justify-content-center">
      <DoctorProfile doctorName="Zeeshan" email="zee@gmail.com" sex="male" cnic="6110121720769"/>
      </Row>
      <Doctors/>
      <NavMain/>
      <div className="">
      <Row>
        <Col md={9}>
          <DashboardButtonsBar/>
        </Col>
        <Col md={3}>
          <Row>
            <NotificationBar/>
          </Row>
        </Col>
        
      </Row>
      </div>
      </> */