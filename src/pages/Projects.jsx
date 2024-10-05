import React from 'react'

import Slider from '../components/Slider'
function Projects() {
  return (
    
    <div className='bg-customWhite h-auto pb-4  w-full  pt-20 pl-14 pr-10 md:pl-20  lg:pl-32 overflow-hidden ' id='Projects'>
       <div className='text-customBlue font-bold text-lg sm:text-3xl'>My Projects</div>
       <div className='text-base  lg:text-xl mt-4 text-violet-800  text-shadow-sm  font-serif '>Somethings I Have Build So Far</div>
       <Slider></Slider>
       
    </div>
  )
}

export default Projects
