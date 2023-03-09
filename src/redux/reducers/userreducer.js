import {createSlice} from '@reduxjs/toolkit';


const userSlice = createSlice({
    name:'user',
    initialState:{
       userDetails:" "
        
    },
    reducers:{
        getUserDetails:(state,actions)=>{
        state.userDetails = actions.payload
    },
    reset_user:(state)=>{
        state.userDetails = " ";
    }
}})

export const {getUserDetails,reset_user} = userSlice.actions;
export default userSlice.reducer;