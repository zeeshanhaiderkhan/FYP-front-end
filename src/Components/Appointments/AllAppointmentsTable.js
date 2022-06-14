import MUIDataTable from "mui-datatables";
import {useState,useEffect} from 'react';
import API_URL from "../../config";
import { useNavigate } from "react-router-dom";



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
  name: "bookedBy",
  label: "Booked By",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "startTime",
  label: "Time",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "slot",
  label: "Slot",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "booked",
  label: "Booked",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "did",
  label: "Doctor ID",
  options: {
   filter: true,
   sort: false,
  }
 },
];



/*Callback function that triggers when a row is clicked. function(rowData: string[], rowMeta: { dataIndex: number, rowIndex: number }) => void*/

export default function AllApointmentsTable() {
  let navigate = useNavigate();

  const options = {
    filterType: 'checkbox',
    onRowClick:(data)=>{
      //navigate("/doctor/"+data[0], );
    },
   fixedHeader:true
  };
  const [doctors,setDoctors] = useState();
        useEffect(()=>{
            fetch(API_URL+"/appointment/all").then(response => response.json()).then(data => {setDoctors(data);});
            console.log(doctors);
        },[]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <MUIDataTable
  title={"Doctors"}
  data={doctors}
  columns={columns}
  options={options}
  
/>

    </div>
  );
}
