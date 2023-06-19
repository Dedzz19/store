import React from 'react'
import image1 from '../Img/bed1.png'
import full1 from '../Img/Full-bed1.png'
import { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import { AiOutlineEye, AiTwotoneFire } from 'react-icons/ai'

export default function ProductImage() {
  const [lgImg, setLgImg]=useState(image1)
  return (
  <section className='lg:flex'>
    <div className='xl:w-[55vw] overflow-x-hidden gap-5 lg:flex'>
    {/* image full side */}
    <section className='overflow-hidden lg:w-[65rem] lg:h-[80vh] '>
      <div>
      <AnimatePresence initial={false} mode='wait'> 
        <motion.section initial={{opacity:0.3}} animate={{opacity:1}} exit={{opacity:.3}} className='lg:group flex place-content-center'>
          <img src={lgImg} alt="image1" className='lg:w-[65rem] transition duration-1000 h-[38rem] lg:h-[80vh]' />
          <div className=' group-hover:flex hidden -translate-y-[9rem] lg:-translate-y-[18rem] '>
          <div 
          onClick={()=>setLgImg(image1)}
          className={lgImg!==image1?'bg-white px-1 py-3 rotate-180 cursor-pointer w-fit  hover:animate-pulse':'bg-white px-1 py-3 rotate-180 cursor-not-allowed w-fit'}>
            <IoIosArrowForward />
          </div>
          <div
          onClick={()=>setLgImg(full1)}
          className={lgImg!==full1?'bg-white px-1 py-3 w-fit cursor-pointer hover:animate-pulse ml-auto':'bg-white px-1 py-3 w-fit cursor-not-allowed ml-auto'}>
            <IoIosArrowForward />
          </div>
          </div>
        </motion.section>
        </AnimatePresence>
      </div>
    </section>
    {/* Image half side */}
    <section className='flex items-center place-content-center order-first gap-4 lg:block'>
        <div 
          onClick={()=>{setLgImg(image1)}}
          className={lgImg==image1?'w-fit cursor-pointer mt-4 border-black group border':'w-fit cursor-pointer mt-4 hover:border-black group hover:border '}>
            <img src={image1} alt="image" className={lgImg==image1?'w-[12rem] scale-[.8] h-[6rem] transition duration-700':"w-[12rem] group-hover:scale-[.8] h-[6rem] transition duration-300"} />
          </div>
          <div 
          onClick={()=>{setLgImg(full1)}}
          className={lgImg==full1?'w-fit cursor-pointer mt-4 border-black group border':'w-fit cursor-pointer mt-4 hover:border-black group hover:border'}>
            <img src={full1} alt="image" className={lgImg==full1?'w-[10rem] scale-[.8] h-[6rem] transition duration-700':"w-[10rem] group-hover:scale-[.8] h-[6rem] transition duration-300"} />
          </div>
      </section>
    {/* text section */}
  </div>
  <section className='pl-12 px-8 w-[35rem]'>
      <h1 className='text-3xl py-3'>Ada L shaped</h1>
      <h3 className='text-xl'>₦279,935.00</h3>
      <hr />
      <h4 className='text-red-600 font-semibold mt-4 flex gap-2 items-center'> <span className='animate-fire'><AiTwotoneFire /></span>7 sold in last 16 hours</h4>
      <h4 className='flex items-center font-semibold'><span><AiOutlineEye /></span>37 people are viewing this right now</h4>
    </section>
  </section>
  )
}

