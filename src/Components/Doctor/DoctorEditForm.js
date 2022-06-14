import React,{useState} from 'react';
import {Col, Row, Table, Form, FormControl, Button } from 'react-bootstrap';
import './DoctorEditForm.css';

export default function DoctorEditForm(){

    const [name,setName] = useState();
     const [email,setEmail] = useState();
     const [phone,setPhone] = useState();
     const [cnic,setCNIC] = useState();
     const [password,setPassword] =useState();
     const [edit,setEdit] = useState();
     const [patient,setPatient] = useState('');
   
   
   //#0d6efd primary color
       return(
           <div className='doctorEditForm'>
           <fieldset disabled={true}>
           <Form >
            <Row className="mb-3">
               <Form.Group as={Col} controlId="formGridEmail">
               <Form.Label style={{color:'black'}}>Name</Form.Label>
               <Form.Control type="text" id="nameControl" value={name} maxLength={70} placeholder="Enter Name" onChange={e => setName(e.target.value)} />
               </Form.Group>
           </Row>
   
           <Row className="mb-3">
               <Form.Group as={Col} controlId="formGridEmail">
               <Form.Label style={{color:'black'}}>Email</Form.Label>
               <Form.Control type="email" id="emailControl" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
               </Form.Group>
           </Row>
   
           <Row className="mb-3">
           <Form.Group className="mb-3" controlId="formGridAddress1">
               <Form.Label style={{color:'black'}}>Phone</Form.Label>
               <Form.Control type="text" id="phoneControl" placeholder="0312-456789"  onChange={e => {e.preventDefault();setPhone(e.target.value);}}/>
           </Form.Group>
                   </Row>
   
   
           <Row className="mb-3">
           <Form.Group className="mb-3" controlId="formGridAddress1">
               <Form.Label style={{color:'black'}}>CNIC</Form.Label>
               <Form.Control type="text" id="cnicControl" placeholder="61101-2172076-9"  onChange={e => setCNIC(e.target.value)}/>
           </Form.Group>
           </Row>
           <Row className="mb-3">
           <Form.Group className="mb-3" controlId="formGridAddress1">
               <Form.Label  style={{color:'black'}}>Password</Form.Label>
               <Form.Control type="password" id="pwdControl" placeholder="********"  onChange={e => setPassword(e.target.value)}/>
           </Form.Group>
           </Row>
           <Row >
               <Col >
               <Button variant="primary" type="button" > Submit</Button>
               </Col>
               <Col >
               <Button variant="secondary" color='white'  type="button" >Edit</Button>
               </Col>
           </Row>
           </Form>
           </fieldset>
           </div>
       );
   }
   