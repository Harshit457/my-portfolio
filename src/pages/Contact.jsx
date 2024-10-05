import React from 'react'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0213o4b', 'template_3indd0b', form.current, {
        publicKey: 'jsHyjFRD_hG7eNN2X',
      })
      .then(
        () => {
          document.getElementById("name").value=""
          document.getElementById("email").value=""
          document.getElementById("message").value=""
          alert("Message Sent")
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Sorry message didnt send try later")
        },
      );
  };
  return (
    <div className=' mt-0 mr-3 w-full h-auto bg-customPink2 flex justify-around pt-14 overflow-hidden' id='Contact'>
        <div className='text-customBlue text-4xl sm:text-5xl font-semibold sm:font-bold w-2/4'>
        <div className='text-3xl'>Let's discuss</div>
        <div className='mt-5'>on something cool together</div>
        <div className=' text-customPink2 sm:text-black sm:mt-20 text-lg sm:text-2xl font-semibold'>I'm interested in ..</div>
        <div className='flex sm:mt-6 w-full h-40 justify-evenly flex-wrap'>
          
            <div className='text-customPink2  text-sm sm:text-black md:h-16 md:text-base lg:text-xl sm:shadow-md sm:shadow-slate-800 font-semibold sm:border-2 border-slate-400 w-0 sm:w-1/2 h-1/3 rounded-md p-2   hover:bg-customBlue hover:text-slate-100'>Ecommerce Website</div>
            <div className='text-customPink2 text-sm sm:text-black md:h-16 md:text-base lg:text-xl sm:shadow-md sm:shadow-slate-800 font-semibold sm:border-2 border-slate-400 p-2 rounded-md w-0 sm:w-1/3 h-1/3 hover:bg-customBlue hover:text-slate-100'>Saas Website</div>
            <div className='text-customPink2 text-sm sm:text-black  md:h-16 md:text-base lg:text-xl sm:shadow-md sm:shadow-slate-800 font-semibold sm:border-2 border-slate-400 p-2 rounded-md w-0 sm:w-1/4 h-1/3 hover:bg-customBlue hover:text-slate-100'>Landing Page</div>
            <div className='text-customPink2 text-sm sm:text-black md:h-16 md:text-base lg:text-xl sm:shadow-md sm:shadow-slate-800 font-semibold sm:border-2 border-slate-400 p-2 rounded-md w-0 sm:w-1/4 h-1/3 hover:bg-customBlue hover:text-slate-100'>Portfolio</div>
            <div className='text-customPink2 text-sm sm:text-black md:h-16 md:text-base lg:text-xl sm:shadow-md sm:shadow-slate-800 font-semibold sm:border-2 border-slate-400 p-2 rounded-md w-0 sm:w-1/4 h-1/3 hover:bg-customBlue hover:text-slate-100'>Blog Website</div>
        </div>
        </div>
        <form ref={form} onSubmit={sendEmail}  className='w-1/3'>
            <input className=' w-full border-2 border-slate-400 rounded-md border-solid p-1 sm:p-3 ' id='name' type="text" name='name' placeholder='Your name' required />
            <br />
            <input className='mt-6 w-full border-2 border-slate-400 rounded-md border-solid p-1 sm:p-3' id='email' name='email' type="email" placeholder='Your email' required />
            <br />
            <textarea className='h-44 mt-6 w-full border-2 border-slate-400 rounded-md border-solid pl-1 text-inherit ' id='message' name='message' type="text" placeholder='Your message' required />
            <input type='submit' value="send" className='mt-6 w-full border-2 bg-customBlue text-slate-100 text-base   sm:text-xl rounded-md border-solid p-1 sm:p-3'></input>
        </form>
    </div>
  )
}

export default Contact
