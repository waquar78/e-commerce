import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { navData } from '../../constants/data';

const Navbar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box 
      className="flex pt-3 overflow-hidden" 
      ml={isSmallScreen ? 2 : 20} 
      mr={isSmallScreen ? 2 : 20} 
      justifyContent={isSmallScreen ? 'center' : 'space-between'} 
      textAlign={'center'} 
      sx={{ gap: isSmallScreen ? 2 : 4 }}
    >
      {navData.map((data) => (
        <Box 
          key={data.text} 
          textAlign='center' 
          sx={{ minWidth: isSmallScreen ? 48 : 64, flexShrink: 0 }}
        >
          <img src={data.url} alt="navbar IMAGE" style={{ width: isSmallScreen ? 48 : 64 }} />
          <Typography className='font-bold' fontSize={isSmallScreen ? '0.75rem' : '1rem'}>
            {data.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Navbar;
