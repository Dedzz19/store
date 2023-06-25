import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { Routes, Route, HashRouter, } from 'react-router-dom'
import Home from './HomePage/Home'
import './styles.css'
import Product from './ProductPage/Product'
import About from './About/About'
import Dashlogin from './Dashboard/Dashlogin'
import Sign_up from './Sign in/Sign_up'
export default function App() {
  const [topNav, setTopNav]=useState(true)
  function closeNav(){
    setTopNav(false)
  }

  return (
    <div>
        <AnimatePresence initial={false}>
        <HashRouter>
          <Routes>
          <Route path='/home' element={<Home topNav={topNav} closeNav={closeNav} />} />
            <Route path='/prod' element={<Product topNav={topNav} closeNav={closeNav} />} />
            <Route path='/About' element={<About topNav={topNav} closeNav={closeNav} />} />
            <Route path='/admin' element={<Dashlogin topNav={topNav} closeNav={closeNav}/>} />
            <Route path='/' element={<Sign_up />} />
          </Routes>
        </HashRouter>
        </AnimatePresence>
    </div>
  )
}
