import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

export default function Favorite(props) {
  const liked= props.liked
  const setLiked= props.setLiked
  const [icon, setIcon]=useState(<AiOutlineHeart />)

  const buttonVariants={
    hover:{
      scale:1.1,
      transition:{
        repeat:Infinity,
        repeatType:'reverse',
        duration:.8
      }
    }
  }
  function toLike(){
    if (liked){
      setIcon(<AiFillHeart />)
    }else{
      setIcon(<AiOutlineHeart />)
    }
    setLiked(!liked)
  }
  return (
    <motion.div 
    onClick={toLike}
    variants={buttonVariants}
    whileHover='hover'
    className='cursor-pointer enabled::text-yellow-400 hover:text-white bg-white hover:bg-yellow-400 text-lg w-fit text-black p-2 lg:rounded-full'>
        {icon}
    </motion.div>
  )
}
