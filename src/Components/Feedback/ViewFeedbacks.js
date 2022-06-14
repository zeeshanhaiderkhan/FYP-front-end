import {Row,Col,Form,Button} from 'react-bootstrap';
import {useState,useContext,useEffect} from 'react';
import { UserContext } from '../../App';
import API_URL from '../../config';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; 
import './AddFeedback.css';
import Typography from '@mui/material/Typography';
import Accordion from '@material-ui/core/Accordion/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ViewFeedbacks(){
    const[title,setTitle] =useState();
    const[comments,setComments] = useState();
    const User = useContext(UserContext);
    const navigate = useNavigate();

    const [feedbacks,setFeedbacks] = useState()
    
    useEffect(()=>{
        fetch(API_URL+"/feedback/all/sent/"+User.user._id).then(response => response.json()).then(data => {setFeedbacks(data);});
            console.log(feedbacks);
    },[])

    return(
        <Col className="addFeedback">
            <Typography variant="h5">All Sent Feedbacks</Typography>
            {
                feedbacks && feedbacks.map((f)=>
                <Row md={9}>
                    
                <Accordion >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography variant="h6">{f.title}</Typography></AccordionSummary>
                    <AccordionDetails>{f.comments}</AccordionDetails>
                </Accordion>
                </Row>
                )
            }
            
        </Col>
    )
}