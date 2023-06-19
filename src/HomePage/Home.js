import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import HomeSlider from './HomeSlider'
import HomeProduct from './HomeProduct'
import BottomBar from '../Navbar/BottomBar'


export default function Home(props) {

  return (
    <section className='overflow-x-hidden md:w-[98.9vw] '>
      <Navbar topNav={props.topNav} closeNav={props.closeNav} />
      <div>
        <HomeSlider />
      </div>
      {/*  */}
      <div>
        <h2 className=' text-center text-2xl font-medium py-2 '>Weekly Selections</h2>
        <HomeProduct />
        <div className='flex items-center place-content-center w-screen cursor-pointer bg-[#f4faf7] py-2'>
          <div className='w-[11rem] overflow-hidden group'>
          <h3 className='uppercase w-fit block'>view all products </h3>
         <div className=' group-hover:translate-x-[20rem] transition duration-1000'>
         <svg className=' w-[12rem]' height="7" viewBox="0 0 933 1" fill="none" xmlns="http://www.w3.org/2000/svg">
           <line y1="0.5" x2="933" y2="0.5" stroke="black" strokeWidth='12' />
          </svg>
         </div>
          </div>
        </div>
      </div>
      {/* BottomBar */}
      <div>
        <BottomBar />
      </div>
    </section>
  )
}
