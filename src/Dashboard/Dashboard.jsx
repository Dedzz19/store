import React, {useEffect, useState} from 'react'
import { AiOutlineBell, AiOutlineHome, AiOutlineSearch } from 'react-icons/ai'
import {IoMdArrowDropdown} from 'react-icons/io'
import { BsMoon} from 'react-icons/bs'

export default function Dashboard() {
  const [id,setId]=useState(0)
  localStorage.setItem('theme', 'dark')

  useEffect(()=>{
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })
  const menuItems=[
    {id:0, title:'Dashboard', icon:<AiOutlineHome />},
    {id:1, title:'Products', icon:<AiOutlineHome />},
    {id:2, title:'Orders', icon:<AiOutlineHome />},
    {id:3, title:'Customers', icon:<AiOutlineHome />},
    {id:4, title:'Marketing', icon:<AiOutlineHome />},
    {id:5, title:'Settings', icon:<AiOutlineHome />},    
  ]

  function handleClick(e){
    setId(e)
  }
  return (
    <section className='bg-[#F9F7F6] h-screen dark'>
    {/* Menu slider */}
      <div className='fixed top-0 h-screen left-0 bg-white shadow-lg z-[100] w-[16rem] px-5 pt-[20px]'>
        {/* Logo */}
        <h1 className='font-semibold text-3xl roboto uppercase pb-[6rem]'>Dedzz</h1>
        {/* Nav links */}
        <div className='grid grid-cols-1 grid-flow-row gap-3'>
          {menuItems.map((item)=>{
            return(
              <div onClick={()=>handleClick(item.id)} key={item.id} className={item.id == id?'flex w-[13rem] gap-3 cursor-default items-center text-xl bg-[#423F3E] rounded-lg py-3 px-2 text-white':'flex w-[13rem] cursor-default gap-3 items-center text-xl bg-white rounded-lg py-3 px-2 text-black hover:shadow'}>
              <span className='text-2xl'>{item.icon}</span>
              <h1>{item.title}</h1>
              </div>
            )
          })}
        </div>
      </div>
      <div className='h-[5rem] bg-white w-screen px-[4rem] py-4 flex items-center text-xl'>
        {/* end nav items */}
        <section className='flex place-content-end items-center gap-12 ml-auto'>
          {/* icons */}
          <div className='flex items-center gap-7'>
            <AiOutlineSearch />
            <BsMoon />
           <span> <AiOutlineBell /></span>
          </div>
          {/* Profile */}
            <div className='flex items-center gap-3'>
              <span><img src='https://placehold.co/400' alt='' className='w-[2.75rem] h-[2.75rem] rounded-full'/></span>
              <div className='gap-0'>
                <h3 className='text-[#8B8B8B] text-xs'>Admin</h3>
                <span className='flex items-center gap-0 font-medium leading-none'><h1>Sean</h1> <IoMdArrowDropdown /></span>
              </div>
            </div>
        </section>
      </div>  
    </section>
  )
}
