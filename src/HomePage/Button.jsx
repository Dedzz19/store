import React from 'react'
import { BsBag } from 'react-icons/bs'

export default function Button(props) {
  return (
    <div className=' container text-black hover:text-white hover:font-semibold lg:text-sm text-xs buttonBgYellow cursor-pointer flex items-center bg-[length:200%_100%] gap-2 w-fit rounded-lg p-2'>
      <BsBag />
      <p className='capitalize w-fit whitespace-nowrap'>{props.text}</p>
    </div>
  )
}
