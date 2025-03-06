import React from 'react'
import Search from './Search';
import CustomButton from './CustomButton';
import { AppBar, Toolbar, Box } from "@mui/material";
import { Link } from 'react-router-dom';

const Header = () => {
  const logoURL = 'https://www.jobapplicationform.net/wp-content/uploads/2023/11/quickmart-kenya-job-application.png';
  
  return (
    <AppBar className="h-16 ">
      <Link to={"/"}>
      <Toolbar className="flex justify-between bg-black ">
        {/* Logo Section */}
        <Box className="flex items-center">
          <img src={logoURL} alt="Logo"  className="w-56 h-12 object-fill"  />
        </Box>

        {/* Search Component */}
        <Search />

        {/* Custom Button Component */}
        <CustomButton />
      </Toolbar>
      </Link>
    </AppBar>
  );
}

export default Header;
