import React from "react";
import {Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';



function CardButton(props){
    return(<>
      <Link to={`${props.to}`}>
       
    <Card style={{ width: '18rem', boxShadow:'5px 5px #00c7ff' ,borderRadius:'5%'}} className="text-center align-items-center">
    <Card.Img variant="top"  style={{ width: '10rem' }} src={props.icon} />
    <Card.Body>
      <Card.Title style={{color:'#000000'}} >{props.title}</Card.Title>
    </Card.Body>
    </Card>
  </Link></>
  );
}

export default CardButton;