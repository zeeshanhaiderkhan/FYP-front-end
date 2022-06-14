import MUIDataTable from "mui-datatables";
import {useState,useEffect} from 'react';
import API_URL from "../../config";
import AdminsNav from "./AdminsNav";

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


const options = {
  filterType: 'checkbox',
};


export default function AdminsTable() {

  const [Admins,setAdmins] = useState();
        useEffect(()=>{
            fetch(API_URL+"/admin/all").then(response => response.json()).then(data => {setAdmins(data);});
            console.log(Admins);
        },[]);

  return (
    <div style={{ height: 400, width: '100%' }}>
        <AdminsNav/>
      <MUIDataTable
  title={"Admins"}
  data={Admins}
  columns={columns}
  options={options}
/>

    </div>
  );
}
