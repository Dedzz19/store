import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {BsSearch, BsPerson,BsTelephone, BsHandbag} from "react-icons/bs"
import {MdMailOutline} from 'react-icons/md'
import {IoIosArrowDown, IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'
import Close from './Close'
import Search from './Search'

export default function Navbar(props) {
  const [currency, setCurrency]=useState(false)
  const [currentCurrency,setCurrentCurrency]=useState('NGN')
  const [width,setWidth]=useState(false)
  const[open, setOpen]=useState(false)
  const[shop, setShop]=useState(false)
  const [search, setSearch]=useState(false)
  const topNav=props.topNav
  const closeNav=props.closeNav

  const [fixed, setFixed]=useState('')


  const Width=window.innerWidth
  const close=()=>{
    setOpen(false)
  }
  const closeShop=()=>{
    setShop(false)
  }
  const menuChange=()=>{
    setOpen(false)
    setShop(false)
  }
  function about(){
    if(Width>=1025){
      setWidth(false)
      setOpen(false)
      setSearch(false)
    }else{
      setWidth(true)
    }
  }
  function closeSearch(){
    setSearch(false)
  }
  useEffect(()=>{
    if(topNav){
      setFixed('')
    }else{
      setFixed('fixed')
    }
    if(Width>1025){
      setWidth(false)
    }else{
      setWidth(true)
    }
  },[])    

  function closeTop(){
    setFixed('fixed')
  }
    //delayed function using setTimeout?
  window.addEventListener('resize', about)
  return (
    <header>
      <ul className={topNav?'bg-brown text-white marquee w-max font-semibold gap-3 p-3 overflow-x-hidden flex items-center':`bg-brown text-white marquee w-[1000rem]  font-semibold gap-3 p-3 overflow-x-hidden flex items-center transition duration-[1s] origin-top scale-y-[0] ${fixed} `}>
      <div 
      onClick={()=>{closeNav(); setTimeout(closeTop, 300)}}
      className=' text-black z-[90] text-sm scale-[0.7]'><Close /></div>
      <li className=''> Get Free Shipping on Selected Items <Link to='' className=' text-blue-600'>Shop Now</Link></li>
      <li className=''> Get Free Shipping on Selected Items <Link to='' className='text-blue-600'>Shop Now</Link></li>
      <li className=''> Get Free Shipping on Selected Items <Link to='' className='text-blue-600'>Shop Now</Link></li>
      <li className=''> Get Free Shipping on Selected Items <Link to='' className='text-blue-600'>Shop Now</Link></li>
      <li className=''> Get Free Shipping on Selected Items <Link to='' className='text-blue-600'>Shop Now</Link></li>
      <li className=''> Get Free Shipping on Selected Items <Link to='' className='text-blue-600'>Shop Now</Link></li>
      </ul>
       <div className={search?'fixed z-[100] -translate-y-16 transition duration-700':'fixed duration-700 transition z-[100] -translate-y-[40rem]'}>
      <Search closeSearch={closeSearch} />
      </div>
      {/* contact */}
      <section onResize={about} className='bg-[#f0f0f0] py-3 text-sm px-6 hidden md:flex text-[#bead9c] w-screen items-center'>
        <div className='flex items-center pr-4 border-r-2 gap-2'>
          <BsTelephone />
          <p>+234-814-955-9378</p>
        </div>
        <div className='flex mx-4 items-center gap-2'>
          <MdMailOutline className='mt-1' />
          <p>seanomoera@gmail.com</p>
        </div>
        <div
        onClick={()=>setCurrency(!currency)}
        className='flex cursor-pointer items-center ml-auto'>
          <p>{currentCurrency}</p>
          <IoIosArrowDown className={currency? ' rotate-180 duration-300':' duration-300 -rotate-0'}/>
        </div>
        <section className={currency ? 'bg-white top-[2.25rem] right-[2.25rem] py-4 fixed shadow-sm z-[100]':'hidden'}>
          <div
          onClick={()=>{setCurrentCurrency('NGN');setCurrency(!currency)}}
          className='flex cursor-pointer items-center px-10 py-2'>
            <p className='hover:text-yellow-400'>NGN</p>
          </div>
          <div 
           onClick={()=>{setCurrentCurrency('BPG');setCurrency(!currency)}}
          className='flex cursor-pointer px-10 items-center border-t-2 py-1 border-b-2'>
          <p className='hover:text-yellow-400'>BGP</p>
        </div>
        <div 
         onClick={()=>{setCurrentCurrency('USD');setCurrency(!currency)}}
        className='flex cursor-pointer items-center px-10 py-2'>
          <p className='hover:text-yellow-400'>USD</p>
        </div>
        </section>
      </section>
      {/* end contact */}
    <section className='grid grid-cols-3 items-center py-9 grid-rows-1'>
     <section>
     <div className={open?`fixed top-0 pt-7 pl-6 h-screen shadow-lg w-[20rem] translate-x-[-1.5rem] transition duration-300 overflow-hidden bg-[#fff] z-[99]`:`text-sm  font-normal w-[20rem] fixed lg:static lg:flex lg:-translate-x-0 transition duration-300 overflow-hidden h-screen ml-4 lg:h-fit -translate-x-[60rem] gap-10`}>
       <span className='flex place-content-end px-4 lg:hidden ' onClick={close}> <Close /></span>
        <h1
        onClick={close} 
        className={width?'hover:text-yellow-400 px-4 cursor-pointer py-3 border-b lg:border-none':'hover:text-yellow-400'}><Link to='Dedzz19/StoreProject/About'>About</Link></h1>
        <h1
        onClick={close} 
        className={width?'hover:text-yellow-400  px-4 cursor-pointer py-3 border-b lg:border-none':' hover:text-yellow-400'}><Link>Contact Us</Link></h1>
        <h1 
        onClick={close} 
        className={width?'hover:text-yellow-400  px-4 cursor-pointer py-3 border-b lg:border-none':'hover:text-yellow-400'}><Link>T&Cs</Link></h1>
        <h1
        className={width?' py-3 flex px-4 cursor-pointer items-center border-b lg:border-none':''}><Link onClick={close} className='hover:text-yellow-400 h-fit'>Shop</Link><IoIosArrowForward
        onClick={()=>setShop(true)}
         className='ml-auto lg:hidden' /></h1>
        {/* Shop side */}
        <div className={shop?'translate-x-0 fixed top-[0rem] pl-4 pr-10 z-[100] h-screen shadow-lg w-[20rem] bg-[#ffff] duration-750 transition':'translate-x-[20rem] duration-750 transition top-0 h-screen w-[20rem] px-4 fixed'}>
        <span className='flex place-content-end lg:hidden py-7' onClick={close}> <Close /></span>
        <h1 
        onClick={closeShop}
        className='flex items-center border-b cursor-pointer pb-2' ><IoIosArrowBack className='mr-auto lg:hidden' /><Link>Shop</Link></h1>
        <div className='pt-12'>
        <h1 
        onClick={menuChange} 
        className={width?'hover:text-yellow-400  cursor-pointer py-1 text-[#bead9c] text-sm':'hover:text-yellow-400'}><Link>Sofas</Link></h1>
        <h1 
        onClick={menuChange} 
        className={width?'hover:text-yellow-400  cursor-pointer py-1 text-[#bead9c] text-sm':'hover:text-yellow-400'}><Link>Tables</Link></h1>
        <h1 
        onClick={menuChange} 
        className={width?'hover:text-yellow-400  cursor-pointer py-1 text-[#bead9c] text-sm':'hover:text-yellow-400'}><Link>Consoles</Link></h1>
        <h1 
        onClick={menuChange} 
        className={width?'hover:text-yellow-400  cursor-pointer py-1 text-[#bead9c] text-sm':'hover:text-yellow-400'}><Link>Coffee Tables</Link></h1>
        <h1 
        onClick={menuChange} 
        className={width?'hover:text-yellow-400  cursor-pointer py-1 text-[#bead9c] text-sm':'hover:text-yellow-400'}><Link>Beds</Link></h1>
        <h1 
        onClick={menuChange} 
        className={width?'hover:text-yellow-400  cursor-pointer py-1 text-[#bead9c] text-sm':'hover:text-yellow-400'}><Link>Occassional Chairs</Link></h1>
        </div>
        </div>
      </div>
      <div className='lg:hidden pl-6 flex items-center text-xl gap-4'>
        <GiHamburgerMenu
        onClick={()=>setOpen(!open)}
        className='cursor-pointer'/> 
        <BsSearch
        onClick={()=>setSearch(true)}
        className='hover:text-yellow-400 cursor-pointer' />
      </div>
     </section>
      {/* heading */}
      <div className='flex text-2xl font-extrabold place-content-center'>
        <Link to='/'><h2>Dedzz$$</h2></Link>
      </div>
      {/* icons */}
      <div className='flex items-center text-xl pr-10 place-content-end gap-6'>
        <BsSearch onClick={()=>setSearch(true)} className='hidden lg:block cursor-pointer' />
        <BsPerson className='text-2xl hidden lg:block ' />
       <div className='relative'>
       <BsHandbag className='hover:text-yellow-400 cursor-pointer' />
       <span className='absolute text-[0.5rem] leading-[.5rem] bottom-3 left-3 bg-amber-300 rounded-full '><p className='p-1 font-bold'>0</p></span>
      </div>
      </div>
    </section>
    </header>
  )
}
