import {Row,Col,Form,Button} from 'react-bootstrap';
import {useState,useContext} from 'react';
import { UserContext } from '../../App';
import API_URL from '../../config';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; 
import './AddFeedback.css';
export default function AddFeedback(){
    const[title,setTitle] =useState();
    const[comments,setComments] = useState();
    const User = useContext(UserContext);
    const navigate = useNavigate();

    function onSubmit(e){
        e.preventDefault();

        const uploadedBy=User.user._id;
        const uploadedTo=User.user.assignedDoctor;

        var requestOptions= {
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
            body:JSON.stringify({
              title:title,
              uploadedBy:uploadedBy,
              uploadedTo:uploadedTo,
              comments:comments
            })};   
         
            fetch(API_URL+'/feedback/',requestOptions)
            .then((response)=>{
              if(response.status == '304'){
                alert("Seems like there is an error. Kindly Try Again Later!");
              }
              else{
                return response.json();
              }
            })
            .then((result)=> {  confirmAlert({
                title: 'Feedback Added!',
                message: 'Feedback has been uploaded successfully!',
                buttons: [
                  {
                    label: 'OK',
                    onClick: () => {
                      navigate("/view-feedbacks");
                    }
                  }
                ]
              }); }).catch((error)=>console.log('error',error));     
    }

    return(
        <Row className=" justify-content-md-center" md={3} >
            <Col  className="addFeedback">
            <h4>Feedback Form</h4>
        <Form onSubmit={onSubmit}> 
            <Row className="mb-3">
               <Form.Group as={Col} controlId="formGridEmail">
               <Form.Label style={{color:'black'}}>Title</Form.Label>
               <Form.Control type="text" id="nameControl" value={title} maxLength={70} placeholder="Enter Title" onChange={e => setTitle(e.target.value)} required/>
               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Please provide a valid Title.</Form.Control.Feedback>
               </Form.Group>
           </Row>
   
           <Row className="mb-3">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Comments</Form.Label>
                <Form.Control as="textarea" rows={5} value={comments} onChange={e => setComments(e.target.value)} placeholder="Enter Comments"   />
                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
            </Form.Group>
            </Row>
            <Row className="justify-content-center">
                <Col md={4} className="justify-content-center">
                <Button type="submit" >Submit</Button>
                </Col>
            </Row>
            
           
            </Form>
            </Col>
            </Row>
    )
}