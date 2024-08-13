import React from 'react'
import ReactDOM from 'react-dom/client'
import Payment from './page/payment'
import './style.css'
import Home from './page/home'


import {createBrowserRouter,RouterProvider,Router,Link} from 'react-router-dom'

const router =createBrowserRouter([
  {
    path: "/Payment",
    element:<Payment/>
  },
  {
    path: "/",
    element:<Home/>
  }
  ,
  
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
   
  </React.StrictMode>
)
