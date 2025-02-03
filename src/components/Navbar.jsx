import React from 'react'
import LoginIcon from './Icons/LoginIcon'
import ThemeBtn from './ThemeBtn'

function Navbar() {
  return (
    <div className='flex justify-between text-white border-b-2 border-white pb-3 '>
        <div className='flex justify-between w-md text-white'>
          <h2 className='font-sans text-2xl'>INTEGRA MAGNA</h2>
          <div className='flex justify-between gap-5'>
            <a className='hover:cursor-pointer'>Services</a>
            <a className='hover:cursor-pointer'>About Us</a>
            <a className='hover:cursor-pointer'>Cases</a>
          </div>
        </div>
        
        <div className='flex justify-between  items-center gap-5 hover:cursor-pointer'>
          <h2>Sign Up</h2>
          <LoginIcon/>
        </div>
    </div>
  )
}

export default Navbar