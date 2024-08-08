import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState, createContext, useEffect } from 'react'
import axios from 'axios'

import './App.css'
import Header from './client/components/Header/Header'
import Footer from './client/components/Footer/Footer'
import Home from './client/components/Home/Home'
import BrowsingPage from './client/components/BrowsingPage/BrowsingPage'
import ProductDetails from './client/components/ProductDetails/ProductDetails'
import Cart from './client/components/Cart/Cart'

import ForgotPassword from './client/components/Login/ForgotPassword/ForgotPassword'
import OTP_Pass from './client/components/Login/ForgotPassword/OTP_Pass'
import ResetPassword from './client/components/Login/ForgotPassword/ResetPassword'

import Dashboard from './admin/components/Dashboard/Dashboard'
import AdminProducts from './admin/components/Admin-Products/AdminProducts'
import Admin_AllProducts from './admin/components/Admin-AllProducts/Admin_AllProducts'
import EditProduct from './admin/components/Admin-Products/EditProduct'
import AdminCategories from './admin/components/Admin-Categories/AdminCategories'

export const userContext = createContext()


const App = () => {

  const [user, setUser] = useState({})

  const [forgotPage, setForgotPage] = useState('login')
  const [forgotEmail, setForgotEmail] = useState()
  const [forgotOtp, setForgotOtp] = useState()

  const ResetPwdNavigation = () => {
    if (forgotPage === 'login') return <ForgotPassword />;
    if (forgotPage === 'otp') return <OTP_Pass />;
    if (forgotPage === 'reset') return <ResetPassword />;
    return <Navigate to="/" replace />;
  }
  
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then(user => {
        setUser(user.data)
      })
      .catch(err => console.log(err))
  }, [])

    return (
    <section className='app'>
      <userContext.Provider value={{ user, forgotPage, setForgotPage, forgotOtp, setForgotOtp, forgotEmail, setForgotEmail }}>
        <BrowserRouter>
          <header className='header'>
            <Header />
          </header>
          <Routes>
            <Route element={<Home />} path='/'></Route>
            <Route element={<BrowsingPage />} path='/category'></Route>
            <Route element={<ProductDetails />} path='/productDetails/:id'></Route>
            <Route element={<Cart />} path='/cart'></Route>

            <Route element={<ResetPwdNavigation />} path='/forgotPassword'></Route>

            <Route element={<Dashboard />} path='/admin'></Route>
            <Route element={<AdminProducts />} path='/admin/products'></Route>
            <Route element={<AdminCategories />} path='/admin/categories'></Route>
            <Route element={<Admin_AllProducts />} path='/admin/Allproducts'></Route>
            <Route element={<EditProduct />} path='/admin/edit/:id'></Route>
          </Routes>
          <footer className='footer'>
            <Footer />
          </footer>
        </BrowserRouter>
      </userContext.Provider>
    </section>
  )
}

export default App