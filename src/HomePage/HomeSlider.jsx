import { AnimatePresence,motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import image1 from  "../Img/Home 3.png"
import image2 from  "../Img/Home 5.png"
import { BsDot } from 'react-icons/bs'




export default function HomeSlider() {
  const[index, setIndex]=useState(0)
  const [timer, setTimer]=useState(0)
  const images=[
    {id:0, src:image1, title:'New Collection', discount:'30% off everything'},
    {id:1, src:image2, title:'Tiny Budget Big Dreams',discount:''}
  ]
  useEffect(() => {
    const interval = setInterval(() => {
      if (index === 1) {
        setIndex(0);
      } else if (index === 0) {
        setIndex(1);
      }
    }, 10000);
  
    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [index]);  
  return (
    <div>
      <AnimatePresence initial={false} mode="wait">
          <motion.div className=' h-[30rem] lg:h-screen overflow-hidden w-screen'
          key={images[index].src}
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:.3}}
          exit={{opacity:0}}
          >
          <img className=' h-[30rem] md:absolute lg:h-screen w-screen' src={images[index].src} alt="" />
          <div className='z-50 relative md:top-[7rem] w-fit lg:ml-[2rem] lg:top-[16rem] bottom-[20rem]'>
            <motion.p 
              initial={{translateX:-100}}
              animate={{translateX:0}}
              transition={{duration:1}}
            className='text-base pl-5 text-white w-[20rem]'>{images[index].discount}</motion.p>
              <motion.h2
                initial={{translateX:-100}}
                animate={{translateX:0}}
                transition={{duration:.8}} 
              className='text-5xl lg:text-8xl mt-3 font-medium pl-5 text-white lg:w-[39rem] w-[20rem]'>{images[index].title}</motion.h2>
            <div className='pt-10'>
            <motion.button 
              initial={{translateX:-100}}
              animate={{translateX:0}}
              transition={{duration:.3}}
            className=' w-fit buttonBg lg:text-xl lg:py-2 px-4 py-1 mx-8 text-white'>Shop now</motion.button>
            </div>
          </div>
          </motion.div>
          <div className='flex place-content-center relative bottom-16 items-center gap-2'>
            {images.map((image)=>{
              return(
                <p 
                onClick={()=>setIndex(image.id)}
                key={image.id} className={index==image.id?'border border-black rounded-full cursor-pointer':" cursor-pointer"  }>
                  <BsDot className='text-4xl'/>
                </p>
              )
            })}
          </div>
      </AnimatePresence>

    </div>
  )
}
