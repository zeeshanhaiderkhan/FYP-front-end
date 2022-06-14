import {useState,useEffect,useContext} from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FileUpload from '@mui/icons-material/FileUpload'
import AttachFile from '@mui/icons-material/AttachFile'
import Stack from '@mui/material/Stack';
import { UserContext } from '../../App';
import API_URL from '../../config';
import { confirmAlert } from 'react-confirm-alert'; // Import
import { styled } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';

const Input = styled('input')({
  display: 'none',
});

export default function UploadMammogram() {
  let {pid} = useParams() //where to upload . upload to
  const navigate = useNavigate()
  const [file,setFile] = useState();
  const [title,setTitle] = useState();
  const User = useContext(UserContext);

 if(User.user.role=='patient'){
     pid=User.user._id
 }
 
  const [hidden,setHidden] = useState(true);

  let formData = new FormData();

  const onFileChange=(e)=>{
    console.log(e.target.files[0]);
    if(e.target && e.target.files[0]){
      formData.append('file',e.target.files[0])
    }
  }
  const uploadReport=()=>{  
    if(formData.get('file') == null){
        alert('Kindly Select File!')
        return;
    }
    formData.append('title',title)
    formData.append('uploadedBy',User.user._id);
    console.log(formData);
    var requestOptions={
        method:'post',
        
        body:formData    
    }
  

    setHidden(false);
    fetch(API_URL+'/mammogram/'+pid,requestOptions)
    .then((response)=>response.json())
    .then((result)=>{
      confirmAlert({
        title: 'Report Uploaded!',
        message: 'Report has been uploaded successfully!',
        buttons: [
          {
            label: 'OK',
            onClick: () => {
              navigate(-1);
            }
          }
        ]
      });
       
    }).catch((error)=>{console.log('error',error);alert("Error Uploading Report! Kindly Try again later!")});
    
  }

  
    return (<div>
        <Stack direction="column" spacing={2} alignItems="center">
        <h4>Upload Mammogram</h4>
        <Stack direction="row" spacing={2} justifyContent='center' alignItems={'center'}>
          <TextField
            label="Title"
            inputProps={{ maxLength: 70 }}
            onChange={(e)=>setTitle(e.target.value)}
          />
      </Stack>
      <Stack direction="row" spacing={2} alignItems={'center'}>
         <label htmlFor="contained-button-file">
          <Input id="contained-button-file" accept="image/png, image/jpeg" type="file"  onChange={onFileChange}/>
            <Button variant="outlined" component="span" startIcon={<AttachFile/>}>
              File
            </Button>
            </label>
      <label htmlFor="contained-button-upload">
            <Button variant="contained" component="span" startIcon={<FileUpload/>} onClick={uploadReport}>
              Upload
            </Button>
      </label>
      </Stack>
      </Stack>
      <LinearProgress style={{margin:'10%'}} hidden={hidden} />
      </div>
  
    );
  }