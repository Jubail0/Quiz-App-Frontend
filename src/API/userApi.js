import {getUserDetails} from "../redux/reducers/userreducer";
import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

const userApi = async(dispatch,username)=>{
    
try {
    const option ={
        name:username
    }
    const res = await axios.post(`${baseUrl}/`,option)
    dispatch(getUserDetails(res.data.newUser))
    const success = res.data.success
    
    return success;

} catch (error) {
    console.log(error)
}
}

export default userApi;