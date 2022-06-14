import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import background from "./bg.jpg"

import { useState, useEffect,useContext } from "react";
import { useNavigate } from 'react-router-dom';
import {useCookies} from "react-cookie";
import API_URL from  '../config';
import {UserContext} from '../App';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Breast Cancer CAD Tool
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {

    let navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [cookies,setCookie,removeCookie] = useCookies(['jwt']);
    const [valError,setValError] = useState();
    const User=useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user={
      email: data.get('email'),
      password: data.get('password'),
    }
    fetch(API_URL+"/accounts/auth", {
                  method: 'POST',
                  body: JSON.stringify(user),
                  headers: {
                        Accept:'application/json',
                        "Content-Type": "application/json"
                  }
            }).then(function (response) {
                  if (response.status == 200) {  
                       return response.json();                     
                  }
            }).then((result)=>{
                  const user = result.data;
                  User.setUser(user);
                  localStorage.setItem('@user',JSON.stringify(user));

            }).catch((err)=>{
                
                  console.log(err);
                  setValError("Invalid Email Password. Kindly Try Again")
            })
  };

  return (
    <div  component="main" style={{backgroundImage:`url(${background})`}}>
      <Container maxWidth="xs" style={{padding:'2%', borderRadius:'4%'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <Typography color={"black"} component="h1" variant="h5">
          <b>  Breast Cancer CAD Tool</b>
          </Typography>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          
          <Typography  component="h1" variant="h6">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <h6>{valError}</h6>
            <Grid container>
              <Grid item xs>
               
              </Grid>
              <Grid item>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </div>
  );
}
