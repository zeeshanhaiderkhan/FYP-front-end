import { React, useState, useEffect,useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Image, FormControl } from 'react-bootstrap';
import {useCookies} from "react-cookie";
import API_URL from  '../config';
import {UserContext} from '../App';

function Login() {//<Image src='/ribbon.png'  width={30} height={60}/>
      const [email, setEmail] = useState();
      const [password, setPassword] = useState();
      const [cookies,setCookie,removeCookie] = useCookies(['jwt']);
      const User=useContext(UserContext);

  


      let navigate = useNavigate();
      useEffect(() => {
           /* if (localStorage.getItem('user-info')) {
                  const role = localStorage.getItem('role');
                  if( role == 'admin'){
                        navigate("/admin/dashboard")
                  }
                  else if(role == 'doctor'){
                        navigate("/doctor/dashboard")
                  }
                  else if(role=='patient'){
                        navigate("/patient/dashboard")
                  }
                  else navigate("/login")
                  
            }*/
      },[])






      const login = () => {
            const user = { email: email, password: password }
            fetch(API_URL+"/accounts/auth", {
                  method: 'POST',
                  body: JSON.stringify(user),
                  headers: {
                        Accept:'application/json',
                        "Content-Type": "application/json"
                  }
            }).then(function (response) {
                  if (response.status == 200) {  
                       return response.json();                     
                  }
            }).then((result)=>{
                  const user = result.data;
                  User.setUser(user);
                  localStorage.setItem('@user',JSON.stringify(user));

            }).catch((err)=>{
                  console.log(err);
            })
      }




      return (
            <div className="loginDiv" style={{ backgroundImage: "url(/loginBackgroundImage.png)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >

                  <form className="login"  >

                        <Row className="justify-content-center" md={3} >
                              <Col style={{ backgroundColor: '#FEF9EF', borderRadius: 20 }} >
                                    <Row style={{ padding: 20 }}>
                                          <h3 style={{ textAlign: 'center', color: 'blue' }}>Breast Cancer CAD Tool</h3>
                                    </Row>
                                    <Row style={{ padding: 20 }}>
                                          <FormControl type="text" onChange={e => setEmail(e.target.value)} placeholder="Email" />
                                    </Row>
                                    <Row style={{ padding: 20, paddingTop: 0 }}>
                                          <FormControl type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
                                    </Row>
                                    <Row style={{ padding: 20 }}>
                                         
                                         
                                                <Button onClick={login} variant="outline-primary">Login</Button>
                                         

                                    </Row>

                              </Col>
                        </Row>
                  </form>

            </div>
      );
};

export default Login;