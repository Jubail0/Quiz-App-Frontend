import {createSlice} from '@reduxjs/toolkit';


const questionSlice = createSlice ({
    name:'questions',
    initialState:{
        loading:false,
        questions:[],
        error:false,
        errorMessage:null,
       
    },
    reducers:{
        getQuestions_loading:(state)=>{
            state.loading = true;
            state.errorMessage = null;
            state.error = false;
        },
        getQuestions:(state,actions)=>{
            state.loading = false;
            state.questions = actions.payload;
            
        },
        getQuestions_error:(state,actions)=>{
            state.loading = false;
            state.error = true;
            state.errorMessage = actions.payload;
        },
 
        
}})

export const {
    getQuestions_loading,
    getQuestions,
    getQuestions_error,
 
} = questionSlice.actions

export default questionSlice.reducer;