import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'

export default function BottomBar() {
  return (
    <section>
      <div className='grid selection:bg-gray-400 lg:grid-rows-1 md:grid-cols-2 grid-flow-row md:grid-rows-2 lg:grid-cols-4 md:py-5 text-brown'>
        <div className='py-6 px-12 lg:mx-auto'>
          <h3 className='uppercase text-black pb-2'>Contact us</h3>
          <h2 className='py-2 before:content-["Add:"] before:font-normal before:text-black font-lg w-[15rem]'>17 Obiwunmi srt, Off Folagor, Shomolu,Lagos</h2>
          <h2 className='before:content-["Num:"] before:font-normal before:text-black font-lg w-[15rem]'>+234-814-955-9378</h2>
          <h2 className='before:content-["Email:"] py-3 before:font-normal text-black font-lg w-[15rem]'>seanomoera@gmai.com</h2>
        </div>

        <div className='md:py-6 px-12 lg:mx-auto md:mx-0 py-3'>
          <h3 className='uppercase text-black pb-2'>Help</h3>
          <h2 className='py-2 font-lg w-[15rem]'>Terms</h2>
          <h2 className='font-lg w-[15rem]'>Refund Policy</h2>      
        </div>
        
        <div className='md:py-6 px-12 lg:mx-auto py-3'>
          <h3 className='uppercase text-black pb-2'>Learn More</h3>
          <h2 className='py-2 font-lg w-[15rem]'>About Us</h2>
          <h2 className='font-lg w-[15rem]'>Blog</h2>   
          <h2 className='font-lg w-[15rem] py-2'>Contact</h2>      
          <h2 className='font-lg w-[15rem]'>Shop</h2>      
        </div>

             
        <div className='md:py-6 py-3 px-3 md-px-0'>
          <h3 className='uppercase text-black pb-2'>Join Us</h3>
          <h2 className='py-2 font-lg'>New subscribers receive 10% off their first purchase</h2>
          <div className='flex items-center mt-5'>
            <input placeholder='Your email' type="text" className='outline-none border rounded-sm p-2'/>
            <div className='bg-black w-fit text-3xl p-1 text-white'>
              <AiOutlineMail />
            </div>
          </div>     
        </div>
      </div>

      <div>
        <hr />
        <h2 className='px-4 text-brown py-3 '>Copyright © 2023. All Right Reserved</h2>
      </div>
    </section>
  )
}
