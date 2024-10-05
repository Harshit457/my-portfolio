import React from 'react'
import ShineBorder from '../components/Skills'
import css3 from "../assets/css3.svg"
import html5 from "../assets/html5.svg"
import js from "../assets/javascript.svg"
import node from "../assets/nodejs.svg"
import python from "../assets/python.svg"
import react from "../assets/react.svg"
import tailwind from "../assets/tailwind.svg"
import user from "../assets/pngegg.png"
import TypingAnimation from '../components/Typing'

function About() {
  return (
    <div className='bg-customWhite h-auto pb-2  w-full  pt-10 pl-10 pr-10 md:pl-20  lg:pl-32 overflow-hidden' id='About'>
      <div className=' md:flex'>
        <div className=' shadow-md shadow-slate-500 min-h-80 h-96 md:h-72 md:w-4/5 p-2 hover:shadow-xl hover:shadow-slate-700'>
        <div className='text-customBlue font-bold text-lg sm:text-3xl'>About me</div>
        <TypingAnimation delay={9000} text={`I'm a First Year Undergraduate Pursuing B-Tech From KIET GROUP OF INSTITUTION In Computer 
            Science And Engineering (Artificial Intelligence And Machine Learning).
            As A Web Developer, I Am Responsible For Developing Web Pages. My primary Focus Is To Create Responsive, 
            User-Friendly Experiences That Meet The Needs Of A Diverce Online Audience`} duration={20}  className=' text-base  lg:text-xl mt-4 text-violet-800  text-shadow-sm  font-serif '>e
        </TypingAnimation>
        </div>
        <img className=' shadow-md shadow-slate-500 md:ml-20 md:mt-20 lg:m-auto lg:ml-56 rounded-full w-0 md:w-2/5 hover:shadow-2xl hover:shadow-slate-700' src={user} alt="" />
        </div>
        <div className=' flex mt-10 '>
            <div className='md:w-3/5 '> 
             <img className='w-0 md:mt-20 lg:mt-auto md:w-11/12 lg:w-4/5 shadow-md shadow-slate-500 rounded-lg hover:shadow-xl hover:shadow-slate-700 ' src="https://www.ivaylopavlov.com/wp-content/uploads/2020/11/vs_code-setup_guide4.png" alt="" />
            </div>
            <div className=' shadow-md shadow-slate-500 hover:shadow-xl hover:shadow-slate-700  p-3 '>
            <div id='skills' className='text-customBlue font-bold text-3xl'>My Skills</div>
            <div className='text-xl mt-4 text-violet-800  text-shadow-sm font-serif'>Technologies I've been working with</div>
            <div className='flex flex-wrap  sm:w-4/5 justify-evenly md:pl-14'>
            <ShineBorder  children={css3} ></ShineBorder>
            <ShineBorder children={html5} ></ShineBorder>
            <ShineBorder children={js} ></ShineBorder>
            <ShineBorder children={node} ></ShineBorder>
            <ShineBorder children={python} ></ShineBorder>
            <ShineBorder children={react} ></ShineBorder>
            <ShineBorder children={tailwind} ></ShineBorder>
            </div>
            </div>
        </div>
        
    </div>
  )
}

export default About
