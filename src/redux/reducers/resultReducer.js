import {createSlice} from '@reduxjs/toolkit';


const resultSlice = createSlice ({
    name:'result',
    initialState:{
        // Single participant
        loading:false,
        result:null,
        error:false,
        errorMessage:null,
        // Single participant

        // All participants
        loading2:false,
        allResult:[],
        error2:false,
        errorMessage2:null
    },
    reducers:{
        // Single participant
        getResult_loading:(state)=>{
            state.loading = true;
            state.error = false;
            state.errorMessage = null
        },
        getResult:(state,actions)=>{
            state.loading = false;
            state.result = actions.payload
        },
        getResult_error:(state,actions)=>{
            state.loading = false;
            state.error = true;
            state.errorMessage = actions.payload
        },
        // Single participant

        // All participants
        all_result_loading:(state)=>{
            state.loading2 = true;
            state.error2 = false;
            state.errorMessage2 = null
        },
        all_result:(state,actions)=>{
            state.loading2 = false;
            state.allResult = actions.payload
        },
        all_result_error:(state,actions)=>{
            state.loading2 = false;
            state.error2 = true;
            state.errorMessage2 = actions.payload
        },
        // All participants

        // restart quiz
        reset_result:(state)=>{
        state.loading = false
        state.result=null,
        state.error=false,
        state.errorMessage=null,
       
        state.loading2=false,
        state.allResult=[],
        state.error2=false,
        state.errorMessage2=null
        }

    }
})

export const {
    getResult_loading,
    getResult,
    getResult_error,

    all_result,
    all_result_loading,
    all_result_error,

    reset_result
} = resultSlice.actions;

export default resultSlice.reducer;