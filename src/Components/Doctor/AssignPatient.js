import { useEffect,useState } from "react";
import API_URL from "../../config";
import MUIDataTable from "mui-datatables";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './AssignPatient.css'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height:'80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




const columns = [
    {
      name: "_id",
      label: "ID",
      options: {
       filter: true,
       sort: true,
      }
     },
   {
    name: "name",
    label: "Name",
    options: {
     filter: true,
     sort: true,
    }
   },
   {
    name: "email",
    label: "Email",
    options: {
     filter: true,
     sort: false,
    }
   },
   {
    name: "phone",
    label: "Phone",
    options: {
     filter: true,
     sort: false,
    }
   },
   {
    name: "cnic",
    label: "CNIC",
    options: {
     filter: true,
     sort: false,
    }
   },
   {
    name: "sex",
    label: "Sex",
    options: {
     filter: true,
     sort: false,
    }
   },
  ];

export default function AssignPatient(props){
        const did = props.did;
        const [patients,setPatients] = useState([]);
    
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
      
       
         
       
      
    const options = {
        filterType: 'checkbox',
       fixedHeader:true,
       rowsPerPage:5,
       rowsPerPageOptions:[3,4,5],
       hint:'Click to Assign',
       selectableRowsHeader:false,
       selectableRowsHideCheckboxes:true,
       onRowClick:(data)=>{
           const pid = data[0];
           handleClose();
           confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure you want to assign '+data[1],
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    var requestOptions={
                        method:"POST",
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                          },
                        body:JSON.stringify({
                            id:pid
                        })
                   }
                   fetch(API_URL+"/doctor/assign/"+did,requestOptions).then(response => response.json()).then(data => {window.location.reload()}).catch(err=>alert("Patient not assgined"));
                   
                }
              },
              {
                label: 'No',
                onClick: () => {handleOpen()}
              }
            ]
          });
           
        }
      };

    useEffect(()=>{
        //patients which are not assigned
            fetch(API_URL+"/patient/assigned/0").then(response => response.json()).then(data => {setPatients(data);});
            console.log(patients);
        },[])

        return (
            <div>
            <Button style={{margin:'1%'}} onClick={handleOpen} variant="contained">Assign Patient</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
            >
              <Box sx={style}>
                <div >
              <MUIDataTable
            title={"Assign New Patient"}
            data={patients}
            columns={columns}
            options={options}
          
                /></div>
              </Box>
            </Modal>
          </div>)
}