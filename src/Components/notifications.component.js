import React from "react";
import {Container,Row,Col, Form, Button, Toast, ToastContainer } from 'react-bootstrap';
//style={{border:'2px solid black'}}
function NotificationBar() {
return (
    <div >
    
    <Row  className="justify-content-md-start">
      <Col  xs lg="6">
        <h2>Notifications</h2>

        <Notification title="test notification" datetime="just now" message="Added new doctor"/>  
      </Col>
    </Row>
    
    </div>
);
};

//<img src={props.icon} className="rounded me-2" alt="" />
function Notification(props){
    return (<div>
        <Toast>
          <Toast.Header>
            {props.icon}
            <strong className="me-auto">{props.title}</strong>
            <small className="text-muted">{props.datetime}</small>
          </Toast.Header>
          <Toast.Body>{props.message}</Toast.Body>
        </Toast>
        </div>);
}
export{Notification}
export default NotificationBar;