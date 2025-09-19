import React from 'react'
import  './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutsOne from './layouts/LayoutsOne'
import Home from './pages/Home'
import Checkout from './pages/Checkout'


const App = () => {
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route   path='/' element={<LayoutsOne/>}>
     <Route index  element={<Home/>}/>
     <Route path='/checkout' element={<Checkout/>}/>



    </Route>
  ))
  return (
    <>
    <RouterProvider router={myRoute}/>
    </>
  )
}

export default App