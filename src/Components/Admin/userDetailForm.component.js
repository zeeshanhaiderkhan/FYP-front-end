import React,{useState,useEffect} from 'react';
import {Form,Button, Row, Col} from 'react-bootstrap';

const data ={
    id:1,
    name:'Zeeshan',
    email:'zee@gmail.com',
    phone:'03070156758',
    cnic:'6110121720769',
    sex:'male'
}

function UserDetailForm(props){
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [phone,setPhone] = useState();
  const [cnic,setCNIC] = useState();
  const [password,setPassword] =useState();
  const [edit,setEdit] = useState(props.edit);
  const [patient,setPatient] = useState('');

  useEffect(()=>{
    if(edit){
      
      fetch("http://localhost:8700/patient/"+props.id).then(response => response.json()).then(data => setPatient(data));
      console.log(patient);
      /*document.getElementById("nameControl").value=patient.patient_name;
      document.getElementById("emailControl").value=patient.patient_email;
      document.getElementById("phoneControl").value=patient.patient_contact;
      document.getElementById("cnicControl").value=patient.patient_cnic;
*/

    }
  },[])

  function refresh(){
    fetch("http://localhost:8700/patient/"+props.id).then(response => response.json()).then(data => setPatient(data));
    console.log(patient);
    document.getElementById("nameControl").value=patient.patient_name;
      document.getElementById("emailControl").value=patient.patient_email;
      document.getElementById("phoneControl").value=patient.patient_contact;
      document.getElementById("cnicControl").value=patient.patient_cnic;
  }

  function editPatient(){
    var uPatient = {name:name,email:email,contact:phone,cnic:cnic,password:password};
    console.log("patient under edit", uPatient);
    
    fetch("http://localhost:8700/patient/"+props.id,{
      method:'PUT',
      body:JSON.stringify(uPatient),
      headers:{
        "Content-Type":"application/json"
      }
    }).then(function(response){
      if(response.ok){
        //document.location.reload();
        console.log("Patient Edited!")
      }
      else{
        var error = new Error(response.statusText)
        //error.response = response
        throw error
      }
    })
  }   

  function addPatient(event){
    event.preventDefault();

    var patient = {name:name,email:email,contact:phone,cnic:cnic,password:password};
    console.log(patient);

    fetch("http://localhost:8700/patient/register",{
      method:'POST',
      body:JSON.stringify(patient),
      headers:{
        "Content-Type":"application/json"
      }
    }).then(function(response){
      if(response.ok){
        //document.location.reload();
      }
      else{
        var error = new Error(response.statusText)
        //error.response = response
        throw error
      }
    })
  }

    return(
        <>
            <Form >
            <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" id="nameControl" value={name} placeholder="Enter Name" onChange={e => setName(e.target.value)} />
    </Form.Group>
  </Row>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" id="emailControl" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
    </Form.Group>
  </Row>

  <Row className="mb-3">
  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="text" id="phoneControl" placeholder="0312-456789"  onChange={e => {e.preventDefault();setPhone(e.target.value);}}/>
  </Form.Group>
        </Row>


  <Row className="mb-3">
  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>CNIC</Form.Label>
    <Form.Control type="text" id="cnicControl" placeholder="61101-2172076-9"  onChange={e => setCNIC(e.target.value)}/>
  </Form.Group>
  </Row>
  <Row className="mb-3">
  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" id="pwdControl" placeholder="********"  onChange={e => setPassword(e.target.value)}/>
  </Form.Group>
  </Row>
  <Row className="justify-content-md-center" lg={4}>
  <Button variant="primary" type="button" onClick={edit? editPatient:addPatient}>
    
    Submit
  </Button>
  
  <Button variant="primary" type="button" onClick={refresh}>Refresh</Button>
        </Row>
</Form>
        </>
    );
}

export default UserDetailForm;