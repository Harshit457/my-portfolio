import React from 'react';

export default function ShineBorder({ children }) {
  return (
    <div className=" m-2 w-16 h-16 md:w-16 lg:w-24  md:h-16 lg:h-24 relative grid place-items-center p-6 bg-white text-black dark:bg-customBlue dark:text-black rounded-lg transition-transform duration-500 hover:before:scale-105 before:absolute before:inset-0 before:rounded-lg before:border-4 before:border-transparent before:hover:border-yellow-500 before:transition-colors before:duration-500">
      <img className='w-full ' src={children} alt="" />
    </div>
  );
}
