import React from 'react'
import Navbar from '../Navbar/Navbar'
import BottomBar from '../Navbar/BottomBar'

export default function About(props) {
  return (
    <section className='w-screen overflow-hidden'>
      <Navbar topNav={props.topNav} closeNav={props.closeNav}  />
      <div><h1 className='text-4xl px-8'>About Us</h1></div>
      <section className='lg:flex w-screen overflow-hidden gap-0 px-8'>
        <div className='lg:absolute flex mt-[4rem] right-[7rem]'>
        <div><h1 className='text-6xl font-extrabold '>Dedzz$$</h1></div>
        </div>
        {/*  */}
        <div className='selection:bg-slate-400 order-first'>
          <div className='w-[6rem] border-[1px] mt-5'></div>
          <p className=' w-8/12 leading-relaxed mt-10 text-brown'>Taeillo is a Nigerian furniture company that specializes in creating contemporary and African-inspired designs. Taeillo's product range includes sofas, chairs, tables, and home accessories, as well as custom-made pieces. Our designs often feature bold colors and patterns, and a fusion of African and Western aesthetics.</p>
    	    <div className='mt-3'>
          <h4 className='font-medium'>Store Hours</h4>
          <p className='text-brown mt-1'>Monday-Fridays : 9am–5pm</p>
          </div>
        </div>
      </section>
      <div>
        <BottomBar />
      </div>
    </section>
  )
}

