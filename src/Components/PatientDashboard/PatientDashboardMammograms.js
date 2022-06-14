import { useEffect,useState } from "react";
import API_URL from "../../config";
import MUIDataTable from "mui-datatables";
import {useNavigate, useParams} from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const MODEL_API='http://192.168.100.12:5000';


const columns = [
    {
      name: "title",
      label: "Title",
      options: {
       filter: true,
       sort: true,
      }
     },
   {
    name: "uploadDate",
    label: "Date",
    options: {
     filter: true,
     sort: true,
    }
   },
   {
    name: "tumor",
    label: "Tumor",
    options: {
     filter: true,
     sort: true,
    }
   },
   {
    name: "tumorType",
    label: "Type",
    options: {
     filter: true,
     sort: true,
    }
   },
  ];

export default function PatientDashboardMammograms(props){
    const navigate=useNavigate();
    const pid = props.pid
    const [reports,setReports] = useState([]);
    const options = {
        filterType: 'checkbox',
        rowsPerPage:5,
       rowsPerPageOptions:[3,4,5],
       filter:false,
        download:false,
        print:false,
       selectableRowsHeader:false,
       viewColumns:false,
       onRowsDelete:(d)=>{
        confirmAlert({
         title: 'Confirm to submit',
         message: 'Are you sure you want to delete reports',
         buttons: [
           {
             label: 'Yes',
             onClick: () => {
                let toDelete =[]
                d.data.forEach((i)=>{
                    toDelete.push(reports[i.index]._id)
                })
                alert(toDelete)
                var requestOptions={
                    method:'delete',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                      },
                    body:JSON.stringify({ids:toDelete})
                }
                fetch(API_URL+"/mammogram/delete/many",requestOptions).then(response => response.json()).then(data => {window.location.reload();}).catch(err=>alert("Not Deleted"));
                
             }
           },
           {
             label: 'No',
             onClick: () => {}
           }
         ]
       });
       },
        onRowClick:(data,{dataIndex,rowIndex})=>{
            window.location.href= MODEL_API+"/get-report/"+reports[rowIndex].reportFile
          },
      };

    useEffect(()=>{
            fetch(API_URL+"/mammogram/all/"+pid).then(response => response.json()).then(data => {setReports(data);});
            console.log(reports);
        },[])

        return (
            <div style={{  width: '100%' }}>
              <MUIDataTable
          title={"Mammograms"}
          data={reports}
          columns={columns}
          options={options}
          
        /></div>)
}