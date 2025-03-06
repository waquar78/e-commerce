import { Dialog, Typography, Button } from '@mui/material'
import { useState } from 'react'
import React from 'react'
import { Box } from '@mui/material'
import { TextField } from '@mui/material'
import { authenticateLogin, authenticateSignup } from '../../Services/api'
import { useContext } from 'react'
import { DataContext } from '../../context/DataProvider'

const initialValue = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
}

const loginInitialValue={
  username: "",
  password: ""
}

const LoginDialog = ({ open, setOpen }) => {
  const [signup, setSignup] = useState(initialValue)
  const{account , setAccount}=useContext(DataContext);
  const[login, setLogin]=useState(loginInitialValue);
  const[error,setError]=useState(false);

  const handleClose = () => {
    setOpen(false);
    setIsLogin(true)
    setError(false);
  }

  const [isLogin, setIsLogin] = useState(true);

  const loginhandeler = () => {
    setIsLogin(!isLogin);
  }

  
  const inputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value })//[e.target.value] ye constant hai ise aise hi likhte hai or usse value nikalte h
    
  }

  const signupUser = async () => {
    const response = await authenticateSignup(signup);
    if (!response) return;
    setAccount(signup.firstname); // Set the account name after signup
    handleClose();
  }
  
  const valueChange=(e)=>{
      setLogin({...login, [e.target.name]:e.target.value});
  }
 
  const loginUser=async()=>{
     let response= await authenticateLogin(login);
     console.log(response);
     if (response.status===200){
      handleClose();
      setAccount(response.data.data.firstname);
     }else{
          setError(true);
     }
  }
  return (

    < Dialog open={open} onClose={(handleClose)} PaperProps={{ sx: { maxWidth: "unset" } }}>
      <Box className="h-[70vh] w-[90vh] flex ">
        {isLogin ?
          <Box className="h-full w-[40%] bg-blue-600 p-5 ">
            <Typography variant='h5' style={{ paddingTop: 40, paddingLeft: 35, color: 'white', fontWeight: 600 }}>Login</Typography>
            <Typography style={{ paddingTop: 10, paddingLeft: 20, color: 'white', fontWeight: 600 }}>Get access to your order,Wishlist and Other Recomendation</Typography>
            <img className='mt-40' src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png" alt="" />
          </Box>
          :
          <Box className="h-full w-[40%] bg-blue-600 p-5 ">
            <Typography variant='h5' style={{ paddingTop: 40, paddingLeft: 35, color: 'white', fontWeight: 600 }}>You're new here!</Typography>
            <Typography style={{ paddingTop: 10, paddingLeft: 20, color: 'white', fontWeight: 600 }}>Signup with your mobile number to get started</Typography>
            <img className='mt-44' src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png" alt="" />
          </Box>
        }
        {isLogin ?
          <Box className="flex flex-1 flex-col m-5 pr-12 pl-8">
            <TextField style={{ marginTop: 10 }} onChange={valueChange} name='username' variant="standard" label="Enter Username" />
           {error && <Typography className='text-red-600 '>Enter valid username or password</Typography>}
            <TextField style={{ marginTop: 20 }} onChange={valueChange} name='password' variant="standard" label="Enter Password" />
            <Typography style={{ marginTop: 20, fontSize: 10, color: 'gray' }} >By contnuing, you agree to QuickMart term of use and privacy policy </Typography>
            <Button onClick={loginUser} style={{ marginTop: 30, backgroundColor: 'orange', color: 'white', padding: 8, textTransform: 'none' }}>Login</Button>
            <Typography style={{ marginTop: 15, textAlign: 'center' }}>OR</Typography>
            <Button style={{ marginTop: 20, backgroundColor: 'white', color: "blue", padding: 6, textTransform: "none", boxShadow: 58 }}>Request OTP</Button>

            <Typography style={{ marginTop: 20, marginLeft:40,fontWeight: 18, color: 'blue', cursor: 'pointer' }}><span onClick={loginhandeler}> New to QuickMart? Create an account</span> </Typography>
          </Box>
          :
          <Box className="flex flex-1 flex-col m-5 pr-12 pl-8">
            <TextField style={{ marginTop: 10 }} onChange={inputChange} name='firstname' variant="standard" label="Enter Firstname" />
            <TextField style={{ marginTop: 20 }} onChange={inputChange} name='lastname' variant="standard" label="Enter Lastname" />
            <TextField style={{ marginTop: 20 }} onChange={inputChange} name='username' variant="standard" label="Enter username" />
            <TextField style={{ marginTop: 20 }} onChange={inputChange} name='email' variant="standard" label="Enter Email" />
            <TextField style={{ marginTop: 20 }} onChange={inputChange} name='password' variant="standard" label="Enter Password" />
            <TextField style={{ marginTop: 20 }} onChange={inputChange} name='phone' variant="standard" label="Enter Phone number" />
            <Button onClick={signupUser} style={{ marginTop: 30, backgroundColor: 'orange', color: 'white', padding: 8, textTransform: 'none' }}>Continue</Button>

          </Box>
        }
      </Box>
    </Dialog>
  )
}

export default LoginDialog