import React, { useState } from 'react';
import { Box, Typography, Menu,MenuItem} from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Profile = ({ account,setAccount}) => {
    const [open, setOpen]=useState(false);
  
    const clickHandle=(event)=>{
          setOpen(event.currentTarget);
    }

     const handleClose=()=>{
        setOpen(false);
     }

     const logoutHandler=()=>{
         setAccount("");
     }
  return (
    <>
    <Box onClick={clickHandle} >
      <Typography style={{ marginTop: 2, cursor:'pointer' }}>{account}</Typography>  </Box>
      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
       
      >
      
        <MenuItem className='mt-4 ' onClick={()=>{handleClose();logoutHandler();} }> <PowerSettingsNewIcon className='mr-2'/> Logout</MenuItem>
      </Menu>
      </>
  );
};

export default Profile;
