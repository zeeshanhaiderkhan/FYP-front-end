import React,{createContext,useState,useEffect} from 'react';
import {  Row, Col, Nav, Tab, Navbar } from 'react-bootstrap';
import Login from './Components/login.component'
import 'bootstrap/dist/css/bootstrap.min.css';


import DoctorProfile from './Components/Doctor/DoctorProfile';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import DashBoardPage from './Components/Admin/dashboard.page';

import Sidebar from './Components/Sidebar/Sidebar';
import DoctorsTable from './Components/DoctorsTable/DoctorsTable'

import AdminsTable from './Components/AdminsTable/AdminsTable'

import "./App.css";
import PatientsTable from './Components/PatientsTable/PatientsTable';
import PatientProfile from './Components/Patient/PatientProfile';
import SignIn from "./Components/SignIn";
//upload file
import UploadReport from './Components/Uploads/UploadReport';
import UploadMammogram from './Components/Uploads/UploadMammogram'
import PatientMammograms from './Components/Patient/PatientMammograms';
//user
import AddUser from './Components/Users/AddUser';

//import PatientDashboard from './Components/Patient/patientDashboard.component'
//new
import PatientDashboard from './Components/PatientDashboard/PatientDashboard';
import PatientDashboardReportUpload from './Components/PatientDashboard/PatientDashboardReportUpload';
import PatientDashboardNav from './Components/PatientDashboard/PatientDashboardNav';

import DoctorDashboard from './Components/DoctorDashboard/DoctorDashboard';
import ChatDoctor from './Components/Chat/ChatDoctor';
import AddFeedback from './Components/Feedback/AddFeedback';
import ViewFeedbacks from './Components/Feedback/ViewFeedbacks';

import DoctorDashboardNav from './Components/DoctorDashboard/DoctorDashboardNav'
//adding prescription
import AddPrescription from './Components/Prescription/AddPrescription';
import AddDietPlan from './Components/DietPlan/AddDietPlan';
import AllApointmentsTable from './Components/Appointments/AllAppointmentsTable';
import AllPrescriptionsTable from './Components/Prescription/AllPrescriptionsTable';
import AllDietPlansTable from './Components/DietPlan/AllDietPlansTable'

const UserContext = createContext();
export {UserContext};

function App(){
  const [user,setUser] = useState(()=>{
    let u = JSON.parse(localStorage.getItem('@user'))
    if (u==null){
      return {role:''}
    }
    else{
      return u;
    }
  });

  const User = {user,setUser}


  useEffect(()=>{
    try{
      //localStorage.setItem('@user',JSON.stringify(user));
      if(user==null){
        throw "User not signed In";
      }
      if(user._id == null){
        const user_store =localStorage.getItem('@user');
      if(user_store != null){
        setUser(JSON.parse(user_store));
      }
      
      }
      
    }
    catch(err){
      setUser({role:''})
    }
  },[])


  return (
    <UserContext.Provider value={User}>
    <Router>
    
        
          <Row>
          {
          user.role=='admin' && <>
            <Col md={2} style={{padding:'0%',margin:'0%'}}>
            <Sidebar/>
          </Col>
          
          </>
        }
        {
          user.role=='patient' && <>
          <PatientDashboardNav/>
          </>
        }
        {
          user.role=='doctor' && <>
          <DoctorDashboardNav/>
          </>
        }
            
          <Col>
      <Routes>
        
      {user.role=='admin' && <>
          <Route path="/" element={<DoctorsTable/>} />
          <Route exact path="/admins" element={<AdminsTable/>} />
          <Route exact path="/doctors" element={<DoctorsTable/>} />
          <Route exact path="/appointments" element={<AllApointmentsTable/>} />
          <Route exact path="/prescriptions" element={<AllPrescriptionsTable/>} />
          <Route exact path="/dietplans" element={<AllDietPlansTable/>} />
          <Route exact path="/doctor/:did" element={<DoctorProfile/>} />
          <Route exact path="/patients" element={<PatientsTable/>} />
          <Route exact path="/patient/:pid" element={<PatientProfile/>} />
          <Route exact path="/upload-report/:pid" element={<UploadReport/>} />
          <Route exact path="/upload-mammogram/:pid" element={<UploadMammogram/>} />
          <Route exact path="/mammograms/:pid" element={<PatientMammograms/>} />
          <Route exact path="/add-user/:role" element={<AddUser/>} />
          <Route exact path="/add-prescription/:pid" element={<AddPrescription/>} />
          <Route exact path="/add-dietplan/:pid" element={<AddDietPlan/>} />

        </>}
        {
          user.role=='patient' && <>
            <Route path="/" element={<PatientDashboard/>} />
            <Route exact path="/upload-report" element={<PatientDashboardReportUpload/>} />
            <Route exact path="/chat" element={<ChatDoctor/>} />
            <Route exact path="/add-feedback" element={<AddFeedback/>} />
            <Route exact path="/view-feedbacks" element={<ViewFeedbacks/>} />
            <Route exact path="/upload-mammogram/:pid" element={<UploadMammogram/>} />
          </>
        }
        {
          user.role =='doctor' && <>
            <Route exact path="/" element={<DoctorDashboard/>} />
            <Route exact path="/patient/:pid" element={<PatientProfile/>} />
            <Route exact path="/upload-report/:pid" element={<UploadReport/>} />
            <Route exact path="/upload-mammogram/:pid" element={<UploadMammogram/>} />
            <Route exact path="/mammograms/:pid" element={<PatientMammograms/>} />
            <Route exact path="/add-prescription/:pid" element={<AddPrescription/>} />
            <Route exact path="/add-dietplan/:pid" element={<AddDietPlan/>} />
          </>
        }

        {
          user.role=='' && <>
            <Route path="*" element={<SignIn/>} />

          </>
        }
        
        
      </Routes>
      </Col>
      </Row>
    </Router>
    </UserContext.Provider>
  )

}

export default App;


  //let navigate = useNavigate();
/*
  if (!localStorage.getItem('user-info')) {
    return <Router>
        <Routes>
        <Route exact path="/" element={<Login/>} />
        </Routes>
       </Router>
  }
  const role = localStorage.getItem('role')

  if(role=='doctor'){
    return (<Router>
       <NavMain/>
    <Routes>
    <Route path="/" element={<DoctorDashboard/>}/>
    <Route path="*" element={<NotFound404/>} />
    </Routes>
   </Router>)
  }

  if(role=='admin'){
    return (<Router>
       <NavMain/>
    <Routes>
      <Route path="/" element={<DashBoardPage/>}/>
      <Route exact path="admin/dashboard" element={<DashBoardPage/>} on/>
      <Route exact path="admin/doctors" element={<Doctors/>} />
      <Route path="admin/patients" element={<Patients/>} />
      <Route path="admin/patient/delete/:id" element={<DeletePatient/>} />
      <Route path="admin/patient/profile/:id" element={<PatientProfile/>} />
      <Route exact path="admin/reports" element={<Reports/>} />
      <Route exact path="admin/appointments" element={<Appointments/>} />
      <Route exact path="admin/diet-plans" element={<DietPlans/>} />
      <Route exact path="admin/prescriptions" element={<Prescriptions/>} />
      <Route path="*" element={<NotFound404/>} />
    </Routes>
   </Router>)
  }

  if(role=="patient"){

    return (<Router>
      <NavMain/>
   <Routes>
   <Route path="patient/dashboard" element={<PatientDashboard/>} />
   <Route path="*" element={<NotFound404/>} />
   </Routes>
  </Router>)

  }

  return(
    
    <Router>
      <NavMain/>
      
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        
        <Route exact path="/admin/dashboard" element={<DashBoardPage/>} on/>
        <Route exact path="admin/doctors" element={<Doctors/>} />
        <Route path="admin/patients" element={<Patients/>} />
        <Route path="/admin/patient/delete/:id" element={<DeletePatient/>} />
        <Route path="admin/patient/profile/:id" element={<PatientProfile/>} />
        <Route exact path="admin/reports" element={<Reports/>} />
        <Route exact path="admin/appointments" element={<Appointments/>} />
        <Route exact path="admin/diet-plans" element={<DietPlans/>} />
        <Route exact path="admin/prescriptions" element={<Prescriptions/>} />
        
        <Route path="patient/dashboard" element={<PatientDashboard/>} />
        <Route element={<NotFound404/>} />
        
      </Routes>
      
    </Router>
  );*/