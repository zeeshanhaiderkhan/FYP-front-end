import React, { useState, useCallback, useEffect, useLayoutEffect, useContext,useRef } from 'react'
import { Widget } from 'react-chat-widget';
import { saveMessage, chat_collection} from '../firebase';
import { UserContext } from '../../App';
import 'react-chat-widget/lib/styles.css';
import { getFirestore, collection,query, getDocs,addDoc, orderBy,onSnapshot,where } from 'firebase/firestore';



export default function ChatDoctorWidget(){

  const User = useContext(UserContext); //getting data

  const [messages, setMessages] = useState([]);
  const [userID,setUserID] = useState(User.user._id);
  const [userName,setUserName] = useState(User.user.name);
  const [to,setTo] = useState(User.user.assignedDoctor);


 useEffect(() => {
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
        
        return unsubscribe;
    }catch(err){
        console.log('unable to load data from firebase kindly wait')
    }
 }, [])
 

    return
}