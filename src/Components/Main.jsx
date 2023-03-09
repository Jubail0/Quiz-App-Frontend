import React from 'react'
import {Container,Box, Typography, Button} from '@mui/material';
import {Link,useNavigate} from 'react-router-dom';
import { rules } from '../Utlis/data';
import { useRef } from 'react';
import {useDispatch} from 'react-redux';
import userApi from '../API/userApi';
import getQuestionsApi from '../API/getQuestions';

const Main = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const [userName, setUsername]=React.useState("")


  const startQuiz = async ()=>{
  
   const success = await userApi(dispatch,userName)
   if(success){
    navigate('/quiz')
    getQuestionsApi(dispatch)
    setUsername("")
   }
    
  
  }

   
 



  return (
    <Container sx={{
      display:'flex',
      alignItems:'center',
      flexDirection:'column',
      }}>

        <Box>

        <Typography component="h1"  sx={{
          color:"grey",
          fontSize:"1rem",
          fontWeight:'400',
          display:'flex',
          flexDirection:'column',
          alignItems:'justify',
          gap:'1rem',
          padding:{xs:'0px 12px',md:'0px'}
        }}>
          {
            rules.map(({id,rule}) => (
              <span key={id}>{rule}</span>
            ))
          }

        </Typography>

        <Box 
       mt={8}
       sx={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:'1rem'

       }}
       >
          
          <input 
          id='userName' 
          type="text"
          placeholder='username'
          value={userName}
          onChange={(e)=>{setUsername(e.target.value)}}
         
          />

         
         <Link to="/quiz" style ={{textDecoration:'none'}}>

         <Button sx={{
          color:"#54BAB9",
          marginLeft:'10px',
          fontSize:'1rem'
          }}
          size="large"
          onClick={startQuiz}
          
          >
            Start Quiz
          
          </Button>
         </Link>
        
        </Box>

        </Box>
      
    </Container>
  )
}

export default Main
