import { useEffect,useState } from "react";
import API_URL from "../../config";
import MUIDataTable from "mui-datatables";
import {useNavigate} from 'react-router-dom';

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

export default function AssignedPatients(props){
    const did = props.did;
    const [patients,setPatients] = useState([]);
    const navigate = useNavigate();

    const options = {
        filterType: 'checkbox',
       fixedHeader:true,
        onRowClick:(data)=>{
            navigate("/patient/"+data[0], );
          },
     
      };

    useEffect(()=>{
            fetch(API_URL+"/doctor/patients/"+did).then(response => response.json()).then(data => {setPatients(data);});
            console.log(patients);
        },[])

        return (
            <div style={{  width: '100%' }}>
              <MUIDataTable
          title={"Assigned Patients"}
          data={patients}
          columns={columns}
          options={options}
          
        />
        
            </div>)
}