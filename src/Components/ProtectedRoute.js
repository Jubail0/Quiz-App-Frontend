import {useSelector} from 'react-redux';
import { Navigate } from "react-router-dom";
export const CheckUserExist = ({children})=>{
const auth = useSelector(state => state.user.userDetails.username)
return auth ? children : <Navigate to={"/"} replace={true}></Navigate>
}

