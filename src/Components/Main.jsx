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
  const inputRef = useRef(null)


  const startQuiz = async (username)=>{
   const success = await userApi(dispatch,username)
   if(success){
    navigate('/quiz')
    getQuestionsApi(dispatch)
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
       >
          
          <input 
          id='userName' 
          type="text"
          placeholder='username'
          ref={inputRef}
          name="username"
          />

         
         <Link to="/quiz" style ={{textDecoration:'none'}}>

         <Button sx={{
          color:"#54BAB9",
          marginLeft:'10px',
          fontSize:'1rem'
          }}
          size="large"
          onClick={()=>startQuiz(inputRef.current.value)}
          
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
