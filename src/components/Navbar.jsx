import React from 'react'
import Navbutton from './Navbutton'
function Navbar() {
  return (
    <div className=' flex justify-center bg-gradient-to-r from-customPink to-customBlue w-screen shadow-sm shadow-black rounded-md h-11 sm:h-20 '>
      <Navbutton ></Navbutton>
      
      <a href='#Contact' className='bg-slate-200 w-28 text-sm   h-6 sm:w-36 sm:h-9 mt-2 mr-2 sm:m-4 rounded-md ml-5 sm:ml-20 text-purple-600 font-extrabold flex justify-evenly sm:pt-1 shadow-sm shadow-black'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>

        Hire Me</a>
    </div>
  )
}

export default Navbar
