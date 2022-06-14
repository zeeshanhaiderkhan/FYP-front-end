import React, { useState, useCallback, useEffect, useLayoutEffect, useContext,useRef } from 'react'
import './Chat.css';
import { saveMessage, chat_collection} from '../firebase';
import { getFirestore, collection,query, getDocs,addDoc, orderBy,onSnapshot,where } from 'firebase/firestore';
import { UserContext } from '../../App';
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button/Button';
import {Row,Col} from 'react-bootstrap';
import uuid from 'react-uuid';

export default function ChatDoctor() {

  const dummy = useRef();

  const User = useContext(UserContext); //getting data

  const [messages, setMessages] = useState([]);
  const [userID,setUserID] = useState(User.user._id);
  const [userName,setUserName] = useState(User.user.name);
  const [to,setTo] = useState(User.user.assignedDoctor);



  useEffect(()=>{
    try{
        const unsubscribe =onSnapshot(query(chat_collection,orderBy('createdAt','asc')),snapshot=>{
            var new_docs = snapshot.docs.filter((d)=> (d.data().user_id===userID && d.data().to === to) || (d.data().user_id===to && d.data().to === userID) ); //query 
            setMessages(
                new_docs.map(doc=>({
                    _id:doc.data()._id,
                    createdAt:doc.data().createdAt.toDate(),
                    text:doc.data().text,
                    user_id:doc.data().user_id,
                    user_name:doc.data().user_name
                }))
            )
        })
        dummy.current.scrollIntoView({ behavior: 'smooth' });
        return unsubscribe;
    }catch(err){
        console.log('unable to load data from firebase kindly wait')
    }
  },[])

  const [formValue, setFormValue] = useState('');


  const sendMessage = () => {
    //set messages
    let payload = {
      text:formValue,
      createdAt:new Date(),
      _id:uuid(),
        user_id:userID,
        user_name:userName,
        to:to
    }    
    console.log('hereerer')
    saveMessage(payload);
    setMessages([...messages,payload]);
    dummy.current.scrollIntoView({behavior:'smooth'})
  }

  
  return (<>
    <Col className='chatMessages'>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
    
      <span ref={dummy}></span>
    </Col>

    <Col className='chatForm'>
      
      <TextField style={{width:'100%',borderRadius:20}} onKeyDown={(event)=>{
        if(event.keyCode == 13){
          sendMessage();
          setFormValue("")
          
        }
      }} value={formValue} label="Enter your message here" onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

     
      </Col>
  </>)
}

/*<Col md={3}>
      <Button style={{width:'100%'}} type="button" variant="outlined" onClick={sendMessage} disabled={!formValue}>Send🕊️</Button>
      </Col> */

function ChatMessage(props) {
  const { text, user_id, photoURL} = props.message;
  const User = useContext(UserContext);
  console.log(props.message);
  const messageClass = user_id === User.user._id ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}


