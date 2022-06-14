import { useEffect,useState } from "react";
import API_URL from "../../config";
import MUIDataTable from "mui-datatables";
import {useNavigate, useParams} from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

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
  ];

export default function PatientReports(){
    const navigate=useNavigate();
    const {pid} = useParams();
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
                fetch(API_URL+"/report/delete/many",requestOptions).then(response => response.json()).then(data => {window.location.reload();}).catch(err=>alert("Not Deleted"));
                
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
            window.location.href= API_URL+"/report/"+reports[rowIndex]._id
          },
      };

    useEffect(()=>{
            fetch(API_URL+"/report/all/"+pid).then(response => response.json()).then(data => {setReports(data);});
            console.log(reports);
        },[])

        return (
            <div style={{  width: '100%' }}>
              <MUIDataTable
          title={"Reports"}
          data={reports}
          columns={columns}
          options={options}
          
        /></div>)
}