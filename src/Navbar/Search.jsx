import React from 'react'
import Close from './Close'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Search(props) {
  return (
   <section className='fixed w-screen h-auto shadow bg-white top-[4rem] z-[100]'>
     <div className='px-3 pr-6' >
     <span 
     onClick={props.closeSearch}
     className='flex place-content-end  text-gray-500 pt-3 pb-6'> <Close /></span>
      <div className='flex items-center border-b pl-2 pb-3 '>
        <input className='outline-none w-11/12 placeholder:font-medium placeholder:text-xl placeholder:text-gray-400' type="text" placeholder='Search...' />
        <span className='ml-auto text-2xl'><BsSearch /></span>
      </div>
      <div className='flex items-center lg:gap-4 w-max py-10 '>
        <h3 className='text-[.9rem]'>Top collection:</h3>
        <div className='overflow-x-scroll lg:overflow-auto gap-4 flex items-center'>
        <p className='py-1 px-4 border hover:border-black hover:text-black cursor-pointer text-gray-600 w-fit text-sm'><Link>About</Link></p>
        <p className='py-1 px-3 border hover:border-black hover:text-black cursor-pointer text-gray-600 w-fit text-sm'><Link>Contact Us</Link></p>
        <p className='py-1 px-5 border text-gray-600 hover:border-black hover:text-black cursor-pointer w-fit text-sm'><Link>T&Cs</Link></p>
        <p className='py-1 px-5 border text-gray-600 hover:border-black hover:text-black cursor-pointer first-letter:w-fit text-sm'><Link>Shop</Link></p>
        </div>
      </div>
    </div>
   </section>
  )
}
