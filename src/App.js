import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { Routes, Route, HashRouter, BrowserRouter, } from 'react-router-dom'
import Home from './HomePage/Home'
import './styles.css'
import Product from './ProductPage/Product'
import About from './About/About'
import Dashlogin from './Dashboard/Dashlogin'
import Signup from './Sign in/Sign_up'
import Dashboard from './Dashboard/Dashboard'
import Contact from './Contact/Contact'
export default function App() {
  const [topNav, setTopNav]=useState(true)
  function closeNav(){
    setTopNav(false)
  }

  return (
    <div>
        <AnimatePresence initial={false}>
        <BrowserRouter>
          <Routes>
          <Route path='/home' element={<Home topNav={topNav} closeNav={closeNav} />} />
            <Route path='/prod' element={<Product topNav={topNav} closeNav={closeNav} />} />
            <Route path='/About' element={<About topNav={topNav} closeNav={closeNav} />} />
            <Route path='/admin' element={<Dashlogin topNav={topNav} closeNav={closeNav}/>} />
            <Route path='/' element={<Signup/>} />
            <Route path='/contact' element={<Contact topNav={topNav} closeNav={closeNav}/>} />
          </Routes>
        </BrowserRouter>
        </AnimatePresence>
    </div>
  )
}
