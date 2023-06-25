import React, { useState } from 'react'
import {BsArrowRightShort} from 'react-icons/bs'

export default function Sign_up() {
  const[login, setLogin]=useState(true)
  return (
    <section className='bg-slate-900 h-screen py-[15vh] overflow-hidden'>
      <div className='text-[#23d5ab] flex item-center gap-4 place-content-center font-semibold'>
        <h3>Log in</h3>
        <h3>Sign up</h3>
      </div>
      {/* Changing slider */}
      <div onClick={()=>setLogin(!login)} className=' bg-[#23d5ab] relative h-5 rounded-full w-[4rem] my-4 mx-auto cursor-pointer'>
        <div className={login?'rounded-full bg-slate-950 text-white w-fit p-1 top-[-0.4rem] text-2xl absolute duration-700 transition':'rounded-full bg-slate-950 duration-700 transition translate-x-[3rem] rotate-180 text-white w-fit p-1 top-[-0.4rem] text-2xl absolute'}><BsArrowRightShort
        className={login ?'rotate-[-133deg] transition':'rotate-[133deg] transition'}/>  </div>
      </div>
        {/* sign up form */}
      <section  className='flip-box duration-700 transition'>
        <div className={login?'flip-box-inner':'flip-box-inner rotateY'}>
          {/* Front-side */}
          <div className='lg:w-[30vw] md:w-[50vw] box-front w-[100vw] bg-cover px-12 py-8 absolute lg:right-[35vw] md:right-[25vw]'>
            <h2 className='text-[#23d5ab] font-semibold text-3xl text-center py-3'>Log in</h2>
            <span className='flex items-center text-[#23d5ab]'><h1>@</h1> <input type='text' placeholder='Email or Id' className='outline-none bg-slate-900 p-3 my-2 placeholder:text-[#23d6ab] w-full' /></span>
            <span className='flex items-center  text-[#23d5ab]'><h1>@</h1> <input type='text' placeholder='Password' className='outline-none bg-slate-900 p-3 my-2 placeholder:text-[#23d6ab] w-full' /></span>
            <div className='grid grid-flow-row grid-cols-3 py-3'>
              <span></span>
            <button className='bg-[#23d5ab] py-2 px-5 rounded-md'>Login</button>
            </div>
            <h1 className='text-center text-[#23d5ab]'>Forgotten Password ?</h1>
          </div>
          {/* Backside */}
          <div className='lg:w-[30vw] md:w-[50vw] box-back w-[100vw] bg-cover px-12 py-8 absolute lg:right-[35vw] md:right-[25vw]'>
            <h2 className='text-[#23d5ab] font-semibold text-3xl text-center py-3'>Sign Up</h2>
            <span className='flex items-center text-[#23d5ab]'><h1>@</h1> <input type='text' placeholder='Email or Id' className='outline-none bg-slate-900 p-3  placeholder:text-[#23d6ab] my-1 w-full' /></span>
            <span className='flex items-center  text-[#23d5ab]'><h1>@</h1> <input type='text' placeholder='Password' className='outline-none bg-slate-900 p-3 placeholder:text-[#23d6ab] my-1 w-full' /></span>
            <span className='flex items-center  text-[#23d5ab]'><h1>@</h1> <input type='text' placeholder='Confirm Password' className='outline-none bg-slate-900 p-3 placeholder:text-[#23d6ab] my-1 w-full' /></span>
            <div className='grid grid-flow-row grid-cols-3 py-3'>
              <span></span>
            <button className='bg-[#23d5ab] py-2 px-5 rounded-md'>Sign up</button>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
