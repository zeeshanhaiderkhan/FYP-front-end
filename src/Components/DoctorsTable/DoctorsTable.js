import MUIDataTable from "mui-datatables";
import {useState,useEffect} from 'react';
import API_URL from "../../config";
import { useNavigate } from "react-router-dom";

import DoctorsNav from './DoctorsNav'

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



/*Callback function that triggers when a row is clicked. function(rowData: string[], rowMeta: { dataIndex: number, rowIndex: number }) => void*/

export default function DoctorsTable() {
  let navigate = useNavigate();

  const options = {
    filterType: 'checkbox',
    onRowClick:(data)=>{
      navigate("/doctor/"+data[0], );
    },
   fixedHeader:true
  };
  const [doctors,setDoctors] = useState();
        useEffect(()=>{
            fetch(API_URL+"/doctor/all").then(response => response.json()).then(data => {setDoctors(data);});
            console.log(doctors);
        },[]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DoctorsNav/>
      <MUIDataTable
  title={"Doctors"}
  data={doctors}
  columns={columns}
  options={options}
  
/>

    </div>
  );
}
