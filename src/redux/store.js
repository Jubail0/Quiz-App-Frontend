import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import questionsReducer from './reducers/questionsReducer';
import resultReducer from './reducers/resultReducer';
import selectedAnswersReducer from './reducers/solvedQuestionsByUser';
import userReducer from './reducers/userreducer';

const persistConfig = {
    key:'root',
    storage, 
    whitelist: ['questions', 'result'],
}

const rootReducer = combineReducers({
    questions: questionsReducer,
    result: resultReducer,
    selectedAnswer:selectedAnswersReducer,
    user:userReducer
})

const persistedReducers = persistReducer(persistConfig,rootReducer)



export const store = configureStore({
    reducer:persistedReducers
})

