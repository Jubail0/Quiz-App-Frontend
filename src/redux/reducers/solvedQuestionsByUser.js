import {createSlice} from '@reduxjs/toolkit';


const selectedAnswersSlice = createSlice ({
    name:'selectedAnswers',
    initialState:[],
    reducers:{
        
        questionsSolvedByUser: (state, actions) => {
          const { question, selectedValue } = actions.payload;

          const index = state && state.findIndex(obj => obj.question === question);

          if(index !== -1){
            state[index].selectedAnswer = selectedValue;
          } else{

            state.push({question,selectedAnswer:selectedValue})
          }

        },

        reset_answers:(state)=>{
           return [];
        }
      
        
        
        
        
        
}})

export const {
    questionsSolvedByUser,
    reset_answers
} = selectedAnswersSlice.actions

export default selectedAnswersSlice.reducer;