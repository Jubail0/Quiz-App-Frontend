import React from 'react'
import {Container,Box, Typography, IconButton} from '@mui/material';
import {AllUserResults} from './'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {useSelector,useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {allResultApi} from '../API/resultApi' 
import {reset_result} from '../redux/reducers/resultReducer'
import {reset_user} from '../redux/reducers/userreducer'
import {reset_answers} from '../redux/reducers/solvedQuestionsByUser'


const Result = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const result = useSelector(state => state.result.result);
  

  const {pointsEarned,username, attempts, isPassed, wrongAnswers,correctAnswers } = result


  React.useEffect(()=>{
    allResultApi(dispatch)
  },[])


  const restartQuiz = ()=>{
    dispatch(reset_result())
    dispatch(reset_answers())
    dispatch(reset_user())

    navigate("/")

  }



  return (
    <Container sx={{
      display:'flex',
      alignItems:'center',
      flexDirection:'column',
      color:'#fff'
      }}>
        
    <Box sx={{
     width:{xs:"100%",sm:'32rem',md:'32rem'},
     border:'5px solid #54BAB9'
    }}>
    <Typography variant="h5" textAlign="center" paddingTop={2}>Result</Typography>

    <div className='result-grp'>
     <Typography variant='body1' className='result'>Username : <span>{username.toUpperCase()}</span></Typography>
     <Typography variant='body1' className='result'>Total quiz points : <span>50</span></Typography>
     <Typography variant='body1' className='result'>Correct answers : <span>{correctAnswers}</span></Typography>
     <Typography variant='body1' className='result'>Incorrect answers : <span>{wrongAnswers}</span></Typography>
     <Typography variant='body1' className='result'>Total attempts : <span>{attempts}</span></Typography>
     <Typography variant='body1' className='result'>Total points earned : <span>{pointsEarned}</span></Typography>
     <Typography variant='body1' className='result'>Quiz result : <span>{isPassed ? "Passed" : "Failed"}</span></Typography>
     </div>

    </Box>
    <IconButton sx={{margin:'1rem 0 1.5rem 0'}}><RestartAltIcon color="primary" fontSize='large' onClick={restartQuiz}/></IconButton>

    <AllUserResults/>

    
        
    </Container>
  )
}

export default Result