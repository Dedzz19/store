import React, { useState } from 'react'
import {AiOutlineLine} from 'react-icons/ai'
export default function Close() {
  const [icon, setIcon]=useState('rotate-45')
  return (
      <div className='flex relative bg-white text-2xl cursor-pointer rounded-full w-fit p-4 font-thin'>
        <div className={`absolute hover:rotate-0 transition duration-300 ${icon} top-[.3rem] left-[.3rem] `} >
        <AiOutlineLine  className='font-thin'/>
        </div>
        <div
          onMouseOver={()=>setIcon('rotate-0')}
          onMouseLeave={()=>setIcon('rotate-45')}
        className='absolute hover:rotate-0 transition duration-300 -rotate-45 top-[0.3rem] left-[.3rem]'>
        <AiOutlineLine  />
        </div>
      </div>
  )
}

{/* <motion.div 
whileHover={{}}
onMouseOver={()=>setIcon(<AiOutlineMinus />)}
onMouseLeave={()=>setIcon(<AiOutlineClose />)}
transition={{duration:0.5}}
className='bg-white cursor-pointer rounded-full w-fit p-2 font-thin text-sm'>
 {icon }
</motion.div> */}