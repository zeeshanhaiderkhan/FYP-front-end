import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import {useNavigate} from'react-router-dom';

function DoctorAddForm(props) {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [cnic, setCNIC] = useState();
    const [password, setPassword] = useState();
    const [gender, setGender] = useState();
    const navigate = useNavigate();
    function addDoctor() {
        

        var doctor = { name: name, email: email, contact: phone, cnic: cnic, password:password, sex:gender };
        console.log(doctor);

        fetch("http://localhost:8700/doctor/register", {
            method: 'POST',
            body: JSON.stringify(doctor),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            if (response.ok) {
                window.location.reload();
            }
            else {
                var error = new Error(response.statusText)
                //error.response = response
                throw error
            }
        })
    }


    return (<>
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
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" id="nameControl" value={password} placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" id="phoneControl" placeholder="0312-456789" onChange={e => { setPhone(e.target.value); }} />
                </Form.Group>
            </Row>
            <Row className='mb-3 justify-content-center'>
                <Col >
                    <input type="radio" value="male" id="male"
                        onChange={(e) => setGender(e.target.value)} name="gender" />
                    <label for="male">  Male</label>
                </Col>
                <Col>
                    <input type="radio" onChange={(e) => setGender(e.target.value)} value="female" id="female" name="gender" />
                    <label for="female">  Female</label>
                </Col>

            </Row>









            <Row className="mb-3">
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>CNIC</Form.Label>
                    <Form.Control type="text" id="cnicControl" placeholder="61101-2172076-9" onChange={e => setCNIC(e.target.value)} />
                </Form.Group>
            </Row>
            <Row className="justify-content-md-center" lg={4}>
                <Button variant="primary" type="button" onClick={addDoctor}>

                    Submit
                </Button>
            </Row>
        </Form>
    </>)
}

export default DoctorAddForm;