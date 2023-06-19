import React from 'react'
import Favorite from './Favorite'
import { useState } from 'react'
import bedrooms from '../Data'
import Button from './Button'
import {Link, useNavigate } from 'react-router-dom'

export default function HomeProduct(props) {
  const [liked, setLiked]=useState(true)
  const Navigate =useNavigate()

  return (
   <div className='grid grid-rows-1 gap-4 px-6 xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 md:grid-cols-2'>
    {bedrooms.map((bed)=>{
      return(
      <section key={bed.id} className='flex place-content-center'>
        <div className='bg-white hover:shadow-shad overflow-hidden w-fit md:h-[20rem] group'>
        <div className='cursor-pointer bg-[#e1e0e5] overflow-y-hidden sm:h-[30rem] sm:w-[40rem] md:h-[15rem] md:w-[18rem] xs:h-[20rem] xs:w-[20rem]'>
          <span onClick={()=>Navigate('Dedzz19/StoreProject/prod')}>
          <img src={bed.images[0].default}  alt="bed" className='group-hover:hidden xs:h-[20rem] xs:w-[20rem] sm:h-[30rem] sm:w-[40rem] md:h-[15rem] md:w-[18rem]' />
          <img src={bed.images[0].full} className='hidden group-hover:block md:h-[15rem] md:w-[18rem] sm:h-[30rem] sm:w-[40rem] xs:h-[20rem] xs:w-[20rem]' alt="bed" />
          </span>
          <div className='flex items-center xs:px-6 sm:px-4 md:px-0 lg:px-2 transition duration-300 sm:w-[38rem] md:w-auto group-hover:-translate-y-[3rem] overflow-hidden'>
          <Link to='/prod'> <Button text='View product' /></Link>
          <span className='text-end ml-auto'> <Button  text='qiuickview'/></span>
        </div>
        </div>
        <div >
          <h2 className=' font-medium text-lg text-center pt-2'>{bed.heading}</h2>
          <p className='text-center text-gray-400 py-2'>{bed.price_Ngn}</p>
        </div>
        <div key={bed.id} className='transition duration-[1s] group-hover:block hidden lg:-translate-y-[19rem] md:translate-x-[15rem] lg:translate-x-[15.4rem] xs:-translate-y-[34rem] md:-translate-y-[19rem] w-fit z-[100]'>
         <Favorite liked={liked} setLiked={setLiked}/>
        </div>
       </div>
      </section>
      )
    })}
   </div>
  )
}


 
