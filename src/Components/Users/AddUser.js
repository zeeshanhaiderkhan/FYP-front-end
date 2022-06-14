import React,{useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Col, Row, Table, Form, FormControl, Button } from 'react-bootstrap';
import './AddUser.css';
import { confirmAlert } from 'react-confirm-alert'; 
import API_URL from '../../config';

export default function AddUser(){
    let {role}=useParams();
    const navigate = useNavigate();
    const[roleState,setRoleState]= useState(true);

    useEffect(()=>{
        if(role == 'doctor' || role=='admin' || role =='patient'){
            setRoleState(false);
        }
    
    },[])

     const [name,setName] = useState();
     const [email,setEmail] = useState();
     const [phone,setPhone] = useState();
     const [cnic,setCNIC] = useState();
     const [password,setPassword] =useState();
     

     const onSubmit=(e)=>{
         e.preventDefault();
        var requestOptions= {
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
            body:JSON.stringify({
              name:name,
              email:email,
              phone:phone,
              cnic:cnic,
              role:role,
              password:password
            })};   
         
            console.log(requestOptions);
            fetch(API_URL+'/accounts/new',requestOptions)
            .then((response)=>{
              if(response.status == '304'){
                alert("Seems like there is an error. Kindly Try Again Later!");
                throw 'Invalid user'
              }
              else{
                return response.json();
              }
            })
            .then((result)=> {  confirmAlert({
                title: 'User Added!',
                message: 'User has been uploaded successfully!',
                buttons: [
                  {
                    label: 'OK',
                    onClick: () => {
                      navigate(-1);
                    }
                  }
                ]
              }); }).catch((error)=>console.log('error',error));     
     }
   
   //#0d6efd primary color
       return(<>
           {!roleState &&
           <Row md={4} className="justify-content-md-center">
           <div className='addUser'>
           <fieldset >
           <Form onSubmit={onSubmit}>
            <Row className="mb-3">
               <Form.Group as={Col} controlId="formGridEmail">
               <Form.Label style={{color:'black'}}>Name</Form.Label>
               <Form.Control type="text" id="nameControl" value={name} maxLength={70} placeholder="Enter Name" onChange={e => setName(e.target.value)} required/>
               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Please provide a valid name.</Form.Control.Feedback>
               </Form.Group>
           </Row>
   
           <Row className="mb-3">
               <Form.Group as={Col} controlId="formGridEmail">
               <Form.Label style={{color:'black'}}>Email</Form.Label>
               <Form.Control type="email" id="emailControl" placeholder="Enter email"  pattern=".+@gmail\.com" onChange={e => setEmail(e.target.value)}  required/>
               <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
               </Form.Group>
           </Row>
   
           <Row className="mb-3">
           <Form.Group className="mb-3" controlId="formGridAddress1">
               <Form.Label style={{color:'black'}}>Phone</Form.Label>
               <Form.Control type="number" id="phoneControl" placeholder="0312-456789"  max  onChange={e => {e.preventDefault();setPhone(e.target.value);}} required/>
           </Form.Group>
                   </Row>
   
   
           <Row className="mb-3">
           <Form.Group className="mb-3" controlId="formGridAddress1">
               <Form.Label style={{color:'black'}}>CNIC</Form.Label>
               <Form.Control type="number" id="cnicControl" placeholder="61101-2172076-9" max={'9999999999999'} min={'1000000000000'} onChange={e => setCNIC(e.target.value)} />
           </Form.Group>
           </Row>
           <Row className="mb-3">
           <Form.Group className="mb-3" controlId="formGridAddress1">
               <Form.Label  style={{color:'black'}}>Password</Form.Label>
               <Form.Control type="password" id="pwdControl" placeholder="********" minLength={8} onChange={e => setPassword(e.target.value)} required/>
           </Form.Group>
           </Row>
           <Row className="justify-content-md-center">
               
               <Button variant="primary" type="submit" > Submit</Button>
               
               
           </Row>
           </Form>
           </fieldset>
           </div>
           </Row>
        }
        {roleState && <Row className="justify-content-md-center"><Col><h1>Invalid Option. OOps</h1></Col></Row>}
        </>
       );
   }
   