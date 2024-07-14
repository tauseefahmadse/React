import { useState } from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
/* Screen Routes */
import Home from './screens/Home'
import Login from './screens/Login'
import Contactus from './screens/Contactus'
import SingleProduct from './screens/SingleProduct'
/* Layout Routes */
import Navigation from './layouts/Navigation'
/* Protected Routes PrivateRoute= /admin routes */



function App() {

  return (
    <>

    <Router>
    <Navigation />
      <div className='bg-pink-900 p-5'>
          <h1 className='text-center text-5xl text-gray-50'>Online Store</h1>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
