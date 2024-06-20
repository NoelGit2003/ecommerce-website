import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, createContext, useEffect } from 'react'
import axios from 'axios'

import Header from './client/components/Header/Header'
import Footer from './client/components/Footer/Footer'
import Home from './client/components/Home/Home'
import Dashboard from './admin/components/Dashboard/Dashboard'
import './App.css'





export const userContext = createContext()

const App = () => {

  const [user, setUser] = useState({})

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
      <userContext.Provider value={user}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route element={<Home />} path='/'></Route>
            <Route element={<Dashboard />} path='/admin'></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </userContext.Provider>
    </section>
  )
}

export default App