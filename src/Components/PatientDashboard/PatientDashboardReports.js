import { useEffect,useState } from "react";
import API_URL from "../../config";
import MUIDataTable from "mui-datatables";
import {useNavigate, useParams} from 'react-router-dom';




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

export default function PatientDashboardReports(props){
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
       selectableRowsHeader:false,
       selectableRowsHideCheckboxes:true,
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