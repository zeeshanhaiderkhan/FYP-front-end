import MUIDataTable from "mui-datatables";
import {useState,useEffect} from 'react';
import API_URL from "../../config";
import { useNavigate } from "react-router-dom";
import PatientsNav from "./PatientsNav";

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
 {
    name: "assignedDoctor",
    label: "Doctor",
    options: {
     filter: true,
     sort: false,
    }
   },
];





export default function PatientsTable() {
    const navigate = useNavigate();
    const options = {
        filterType: 'checkbox',
        onRowClick:(data)=>{
            navigate("/patient/"+data[0], );
          },
         fixedHeader:true
      };


  const [patients,setPatients] = useState();
        useEffect(()=>{
            fetch(API_URL+"/patient/all").then(response => response.json()).then(data => {setPatients(data);});
            console.log(patients);
        },[]);

  return (
    <div style={{ height: 400, width: '100%' }}>
        <PatientsNav/>
      <MUIDataTable
  title={"Patients"}
  data={patients}
  columns={columns}
  options={options}
/>

    </div>
  );
}
