import React,{useState} from 'react'
import {Box,Container, Button} from '@mui/material';
import {Questions} from './'
import {calculateResult} from '../API/resultApi';
import {useSelector,useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom';




const Quiz = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const [currentPage,setCurrentPage]=useState(0)
  const [selectedValue, setSelectedValue] = useState("")
  const limit = 4;

  const userId = useSelector(state => state.user.userDetails._id)
  const selectedAnswers = useSelector(state => state.selectedAnswer)

  const handleClick = (direction)=>{
    if(direction === "next"){
      setCurrentPage(prevPage => prevPage + 1)
    }
    else{
      setCurrentPage(prevPage => prevPage - 1)
    }
    
  }




  return (
    <Container sx={{
      display:'flex',
      alignItems:'center',
      flexDirection:'column',
      color:'#fff'
      }}>

    <Box sx={{
     width:{xs:"100%",sm:'32rem', md:'32rem'}
    }}>

    <Box 
      sx={{
      width:'100%',
      display:'flex',
      flexDirection:'column',
      gap:'1rem',
      padding:"0 1rem"
      
      }}>
      <Questions 
      currentPage={currentPage} 
      selectedValue={selectedValue} 
      setSelectedValue={setSelectedValue}
     
      />
  
      </Box>

      <Box 
       width="100%"
        mt={8}
        sx={{
        display:'flex',
        justifyContent:'space-between'}}>

        <Button size='large' sx={{color:"#54bab9"}} onClick={()=>handleClick("previous")} disabled={currentPage === 0}>Previous</Button>
        
        {currentPage === limit ? <Button size='large' sx={{color:"#54bab9"}} onClick={()=>calculateResult(dispatch,userId,selectedAnswers,navigate)} >Show result</Button> :
        <Button size='large' sx={{color:"#54bab9"}} onClick={()=>handleClick("next")} disabled={currentPage === limit}>Next</Button>
        }
      </Box>

      </Box>
    </Container>
  )
}

export default Quiz