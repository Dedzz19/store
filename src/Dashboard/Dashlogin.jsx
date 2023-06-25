import React, { useState } from 'react'
import {BsPerson} from 'react-icons/bs'
import authentications from '../Admins'

export default function Dashlogin(props) {
  const[mail, setMail]=useState('')
  const [password,setPassword]=useState('')

  // Login Functionality 
  function handleMail(e){
    let id=e.target.value
    setMail(id.toLowerCase())
    console.log(mail)
  }
  function handlePassword(e){
    setPassword(e.target.value)
    console.log(password)
  }
  function login() {
    for (let i = 0; i < authentications.length; i++) {
      let changedMail = authentications[i].email.toLowerCase();
      if (changedMail === mail && authentications[i].password === password) {
        prompt('You are logged in');
        return; // Exit the loop if a match is found
      }
    }
    // If the loop finishes without finding a match, display an error message
    prompt('Invalid email or password');
  }
  
  return (
    <>
    <section className='gradient h-screen flex grow md:place-content-center md:items-center md:mt-0 pt-24'>
      <div className='bg-white rounded-2xl h-fit p-10 w-[30rem] overflow-hidden' >
        <div >
          <div className='text-3xl mx-auto border border-black rounded-full p-3 w-fit'><BsPerson /></div>
        </div>
          {/* Email */}
          <div className='py-2 px-5'>
            <label className='capitalize'>email address: </label> <br/> 
            <input onChange={handleMail} type='text' className='border-slate-500 border rounded outline-none w-full px-3' />
          </div>
          {/* Password */}
          <div className='py-2 px-5'>
            <label className='capitalize'>Password: </label> <br/> 
            <input onChange={handlePassword} type='text' className='border-slate-500 border rounded outline-none px-3 w-full' />
          </div>
          <button onClick={login}>Login</button>
      </div>
    </section>
    <h1 className='text-center font-semibold text-3xl roboto fixed bottom-0'>Dedzz</h1>
    </>
  )
}

