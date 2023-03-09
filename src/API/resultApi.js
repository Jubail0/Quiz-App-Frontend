import axios from "axios";
import {
    getResult_loading,
    getResult, 
    getResult_error,

    all_result,
    all_result_loading,
    all_result_error

} from "../redux/reducers/resultReducer"

const baseUrl = process.env.REACT_APP_BASE_URL;


export const calculateResult = async(dispatch,id,result,navigate)=>{
try {
    dispatch(getResult_loading())
const res = await axios.post(`${baseUrl}/result/${id}`,{
    questionsSolvedByUser:result,
    
})

if(res){
    dispatch(getResult(res.data.resultAdded))
    res.data.success && navigate('/result')
}


} catch (error) {
    dispatch(getResult_error())
}
}

export const allResultApi = async(dispatch)=>{
    try {
        dispatch(all_result_loading())
        const res = await axios.get(`${baseUrl}/result`)
        if(res.data){
            dispatch(all_result(res.data.allResults))
        }
    } catch (error) {
        dispatch(all_result_error())
        console.log(error)
    }
}

