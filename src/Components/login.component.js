import React from "react";
import {Container,Row,Col, Form, Button, Image, FormControl} from 'react-bootstrap';

function Login() {//<Image src='/ribbon.png'  width={30} height={60}/>
      return (
    <div className="loginDiv" style={{ backgroundImage: "url(/loginBackgroundImage.png)", backgroundRepeat: 'no-repeat', backgroundSize:'cover'}} >
    
    <form className="login"  >
      
    <Row className="justify-content-center" md={3} >
        <Col style={{backgroundColor:'#FEF9EF', borderRadius:20}} >
        <Row style={{padding:20}}>
            <h3 style={{textAlign:'center', color:'blue'}}>Breast Cancer CAD Tool</h3>
              </Row>
        <Row style={{padding:20}}>
  <FormControl type="text" placeholder="Username"/>
        </Row>
        <Row style={{padding:20, paddingTop:0}}>
  <FormControl type="password" placeholder="Password"/>
        </Row>
        <Row style={{padding:20}}>
            <Col>
            <Button href="/admin/dashboard"  variant="outline-primary">Admin</Button>
            </Col>
            <Col>
            <Button href="/doctor/dashboard"  variant="outline-secondary">Doctor</Button>
            </Col>
            <Col>
            <Button href="/patient/dashboard"  variant="outline-success">Patient</Button>
            </Col>
  
    </Row>
    
    </Col>
    </Row>
    </form>

</div>
);
};

export default Login;