import React from 'react'
import css3 from "../assets/css3.svg"
import html5 from "../assets/html5.svg"
import js from "../assets/javascript.svg"
import node from "../assets/nodejs.svg"
import python from "../assets/python.svg"
import react from "../assets/react.svg"
import tailwind from "../assets/tailwind.svg"
function Bottom() {
  return (
    <div className='flex justify-evenly w-screen h-16 sm:h-20 bg-customBlue  mt-24  '>
      <div className='flex '>
      <div className='text-4xl sm:text-6xl text-slate-100'>4</div>
      <div className='ml-2 text-xl sm:text-2xl text-slate-100'> <div>Projects</div> <div>completed</div> </div>
      </div>
      <div className='flex w-2/5 justify-evenly'>
        <img  className='w-6 sm:w-7 md:w-11' src={css3} alt="" />
        <img className='w-6 sm:w-7 md:w-11' src={html5} alt="" />
        <img className='w-6 sm:w-7 md:w-11' src={js} alt="" />
        <img className=' w-6 sm:w-7 md:w-11' src={node} alt="" />
        <img className='w-6 sm:w-9 md:w-11' src={python} alt="" />
        <img className='w-6 sm:w-7 md:w-11' src={react} alt="" />
        <img className='w-6 sm:w-7 md:w-11' src={tailwind} alt="" />
      </div>
    </div>
  )
}

export default Bottom
