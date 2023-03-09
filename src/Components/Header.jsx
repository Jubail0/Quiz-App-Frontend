import React from 'react'
import {Box,Typography,Container} from '@mui/material';

const Header = () => {
  return (
    <Container 
    sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginTop:{xs:'0rem',md:"5rem"},
        height:{xs:"8rem",md:"12rem"}
        }}>

    <Box sx={{
      width:"32rem",
      border:'5px solid #54BAB9'
    }}>

      <Typography 
        variant="h4" 
        textAlign="center" 
        fontWeight="500"
        sx={{
          padding:{xs:"0.5rem", md: "1rem"},
          color:'#fff',
          fontSize:{xs:'1.5rem',md:'2rem'}
          }}>
          
          Quiz Application

        </Typography>

        </Box>

    </Container>
  )
}

export default Header