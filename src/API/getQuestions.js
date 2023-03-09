import axios from 'axios';
import
 { 
    getQuestions_loading,
    getQuestions,
    getQuestions_error

} from '../redux/reducers/questionsReducer';

const baseUrl = process.env.REACT_APP_BASE_URL;

const getQuestionsApi = async (dispatch)=>{
    dispatch(getQuestions_loading())
try {
    const res = await axios.get(`${baseUrl}/quiz`)
    dispatch(getQuestions(res.data.questions))    
} catch (error){
    dispatch(getQuestions_error())
}
}

export default getQuestionsApi