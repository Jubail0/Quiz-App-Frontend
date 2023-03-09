import React from 'react'
import {Box, Typography} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useSelector } from 'react-redux';

const AllUserResults = () => {
  const all_result = useSelector(state => state.result);
  

  return (
    <Box sx={{
      width:{xs:"100%",sm:'32rem',md:'32rem'},
      border:'5px solid #54BAB9',
      color:'#fff',
      height:'25rem',
      overflow:'auto'

     }}>
      <Typography textAlign="center" padding={2} >All users result</Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow >
              <TableCell align="center" sx={{color:"#fff"}}>usernames</TableCell>
              <TableCell align="center" sx={{color:"#fff"}}>Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

           {  all_result?.allResult?.map(({userId,pointsEarned,},index)=> (
            <TableRow key={index}>
            <TableCell align="center" sx={{color:"#fff"}}>{userId.username}</TableCell>
            <TableCell align="center" sx={{color:"#fff"}}>{pointsEarned}</TableCell>
            </TableRow>
           )) }

          </TableBody>
        </Table>
      </TableContainer>
    
      
    </Box>
  )
}

export default AllUserResults