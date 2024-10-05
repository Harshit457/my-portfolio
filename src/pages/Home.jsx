import React from 'react'
import Navbar from '../components/Navbar'
import TypingAnimation from '../components/Typing'
import image from '../assets/harshit avatar.png'
import Bottom from '../components/Bottom'
function Home() {
  return (
    <div className='bg-gradient-to-r from-purple-950 to-customBlue w-full  sm:w-screen  h-full overflow-hidden  '>
       <Navbar> </Navbar>
       <div className=' flex flex-col-reverse sm:flex-row'>
       <div className=' w-full sm:w-3/5 pl-14 sm:pl-32 mt-16 sm:mt-20'>
        <div className='text-slate-100 w-full font-extrabold text-xl md:text-3xl flex '>
            <div>Hello</div>
            <div className='font-light text-4xl'>👋,</div>
            </div>
            <div className=' ' >
            <TypingAnimation text={"I'm Harshit Saini"} duration={100} delay={3000} className=' text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-violet-400 mt-2  font-sans text-shadow-md h-auto   sm:w-auto  md:h-36'></TypingAnimation>
            </div>
            <div className='mt-3 md:mt-0 text-slate-100 text-xl md:text-3xl lg:text-4xl  font-semibold text-shadow-sm'>I build things for web</div>
           <div className='flex mt-6 md:mt-14  w-96 '>
            <a href="https://github.com/Harshit457">
            <svg className='w-8 ' role="img" viewBox="0 0 24 24" fill="#DCCFED" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/harshit-saini-b855b6296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <svg className='w-8 ml-5'  role="img" viewBox="0 0 24 24" fill="#DCCFED" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://x.com/10_harshit_06">
            <svg className='w-8 ml-5' role="img" viewBox="0 0 24 24" fill="#DCCFED" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
            </a>
            <a href="https://leetcode.com/u/Harshit_Saini_457/">
            <svg className='w-8 ml-5' role="img" viewBox="0 0 24 24" fill="#DCCFED" xmlns="http://www.w3.org/2000/svg"><title>LeetCode</title><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
            </a>
           </div>
       </div>
       
       <div className=' ml-20  sm:ml-0 md:ml-0 bg-gray-500 w-52 h-52 sm:w-64 sm:h-64 md:w-76 md:h-64 lg:w-96 lg:h-96 mt-9 rounded-full ' >
            <img  className='ml-8 w-36 mt-3 sm:mt-9 md:m-auto sm:ml-12 md:ml-10 lg:ml-14 sm:w-40 md:mt-5 md:w-44 lg:w-64 lg:mt-9  rounded-full ' src={image} alt="" />
       </div>
       </div>
        <Bottom></Bottom>
       
    </div>
  )
}

export default Home
