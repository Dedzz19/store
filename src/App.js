import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import Home from './HomePage/Home'
import './styles.css'
import Product from './ProductPage/Product'
import About from './About/About'

export default function App() {
  const [topNav, setTopNav]=useState(true)
  function closeNav(){
    setTopNav(false)
  }
  return (
    <div>
        <AnimatePresence initial={false}>
        <Routes>
            <Route path='store/' element={<Home topNav={topNav} closeNav={closeNav} />} />
            <Route path='store/prod' element={<Product topNav={topNav} closeNav={closeNav} />} />
            <Route path='store/About' element={<About topNav={topNav} closeNav={closeNav} />} />
        </Routes>
        </AnimatePresence>
    </div>
  )
}
