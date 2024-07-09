import { useState } from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
/* Screen Routes */
import Home from './screens/Home'
import Login from './screens/Login'
import Contactus from './screens/Contactus'
import Product from './screens/Product'
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
        <Route path='/product' element={<Product />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
