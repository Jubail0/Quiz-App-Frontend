import React from 'react'
import {Header,Main, Quiz, Result} from './Components';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {CheckUserExist} from './Components/ProtectedRoute';



const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main/>
    },
    {
      path:'/quiz',
      element:<CheckUserExist><Quiz/></CheckUserExist>,
      
    },
    {
      path:'/result',
      element:<CheckUserExist><Result/></CheckUserExist>
    },
    
  ])
  return (
    <div>
        <Header/>
        <RouterProvider router={router}/>
    </div>
  )
}

export default App