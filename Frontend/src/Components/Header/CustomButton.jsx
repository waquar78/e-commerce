import React from 'react'
import { Box, Typography,Badge } from '@mui/material'
import {Button} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../Login/LoginDialog';
import { useState } from 'react';
import { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import Profile from './profile';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const CustomButton = () => {
    const[open,setOpen]=useState(false); 
    const {account,setAccount} = useContext(DataContext);
    const {cartItems}=useSelector(state=>state.cart);
   
    return (
        <Box className="flex ">
            {account ? (
             <Profile account={account} setAccount={setAccount} />     // Show the account (firstname) if logged in
      ) : (
        <Button onClick={() => setOpen(true)} variant="contained" style={{ margin: 8, padding: 4, backgroundColor: 'white', color: "blue" }}>
          Login
        </Button>
      )}
            
            <Typography style={{marginTop: 10, marginLeft:55}}>Become a Seller</Typography>
            <Typography style={{marginTop: 10 , marginLeft: 55}}>More</Typography>
                   
            <Link to='/cart'  className="flex ml-14 mt-2 text-center">
               <Badge badgeContent={cartItems?.length} color='secondary'>
               <ShoppingCartIcon/>
               </Badge>
                <Typography>
                    cart
                </Typography>
            </Link>
             <LoginDialog open={open} setOpen={setOpen}/>
        </Box>
            
            
    )
}

export default CustomButton