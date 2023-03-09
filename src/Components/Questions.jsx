import React,{useEffect} from 'react'
import {Box, Typography} from '@mui/material';
import {Options} from './'
import {useSelector, useDispatch} from 'react-redux';
import {questionsSolvedByUser} from "../redux/reducers/solvedQuestionsByUser";

const Questions = ({currentPage,selectedValue, setSelectedValue}) => {
    
    const dispatch = useDispatch();
    const [previousAnswer,setPreviousAnswer]= React.useState("");
    const selectedAnswers = useSelector(state => state.selectedAnswer)
    const questions = useSelector(state => state.questions.questions)
    const userId = useSelector(state => state.user.userDetails._id)
    
    useEffect(() => {
        if(userId){
            dispatch(questionsSolvedByUser({question:questions[currentPage]?.question, selectedValue}))
        }
    
    }, [selectedValue])

    useEffect(()=>{
        if(selectedAnswers){
          setPreviousAnswer(selectedAnswers[currentPage]?.selectedAnswer)
        }

    },[currentPage])



    return (
    <Box> 

     <Typography variant='h5' sx={{ fontSize: {  xs: "1.2rem", md: "1.6rem" }}}>
      {questions[currentPage]?.question}
     </Typography>

     <Options 
     selectedValue={selectedValue}
     setSelectedValue={setSelectedValue} 
     options = {questions[currentPage]?.options}
     previousAnswer={previousAnswer}
     setPreviousAnswer={setPreviousAnswer}
     />
           
    </Box>
    

    )
}

export default Questions
