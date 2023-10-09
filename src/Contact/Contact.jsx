import React from 'react'
import Navbar from '../Navbar/Navbar'
import BottomBar from '../Navbar/BottomBar'

export default function Contact(props) {
  return (
    <section className='w-screen overflow-hidden'>
      <Navbar active='contact' topNav={props.topNav} closeNav={props.closeNav}/>
      <main className='mx-12 grid-contact gap-24'>
        <div>
        <h1 className="font-normal text-3xl">Get In Touch</h1>
        {/* Name field and email */}
        <form className='grid grid-cols-3 gap-6 mt-6 grid-rows-1'>
          {/* Name */}
          <div> 
            <label htmlFor="name" className='font-bold'>Name</label>
            <br />
            <input type="text" placeholder='Your Name' className='outline-none my-2 border w-full rounded-sm p-2 text-sm'/>
          </div>
          {/* Email */}
          <div>
            <label htmlFor="Email" className='font-bold'>Email</label>
            <br />
            <input type='email' placeholder='Your Email' className='outline-none my-2 border w-full rounded-sm p-2 text-sm'/>
          </div>
          {/* Phone */}
          <div>
            <label htmlFor="Phone" className='font-bold'>Phone</label>
            <br />
            <input type="number" placeholder='Phone Number' className=' outline-none my-2 border w-full rounded-sm p-2 text-sm'/>
          </div>
        </form>
        <label className='font-bold'>Message</label>
        <br />
        <textarea className='outline-none my-2 border w-full rounded-sm p-2 text-sm h-[12rem]' placeholder='Your message...' />
        <button type='submit' className='bg-black hover:bg-white text-white hover:text-black p-4 hover:border-2 transition-all duration-700 px-10'>Send Message</button>
        </div>
              {/* Address and other info */}
        <div>
          {/* Address */}
          <div className='my-6'>
            <h3 className='text-xl my-2'>Address</h3>
            <p className=' text-sm'>17 Obiwunmi srt, Off Folagor, Shomolu,Lagos</p>
          </div>
          <hr />
          {/* Phone */}
          <div className='my-6'>
            <h3 className='text-xl my-2'>Phone</h3>
            <p className=' text-sm'>(+234) 8149559378</p>
          </div>
          <hr />
          {/* email */}
          <div className='my-6'>
            <h3 className='text-xl my-2'>Email</h3>
            <p className=' text-sm'>Seanomoera@gmail.com</p>
          </div>
          <hr />
          {/* Time */}
          <div className='my-6'>
            <h3 className='text-xl my-2'>Opening Time</h3>
            <p className=' text-sm'>9:00Am – 5:00Pm, Saturday and Sunday Close</p>
          </div>
          <hr />
        </div>
      </main>
      <BottomBar />
    </section>
  )
}
