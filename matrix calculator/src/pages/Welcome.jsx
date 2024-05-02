import React from 'react';
import {Link} from 'react-router-dom'

import { VscDebugContinue } from "react-icons/vsc";

const Welcome = () => {
  return (
    <section className='w-full p-3 h-screen bg-deepBlue flex align-items-center  justify-center'>
      <div className='bg-white px-3 py-5 sm:py-10 sm:p-10 text-center w-fit sm:w-[70%] md:w-[60%] h-fit my-auto rounded-md flex flex-col align-items-center justify-between shadow-md'>
        <div className='flex flex-col gap-6'>
          <h1 className='font-bold text-sm sm:text-3xl text-deepBlue'>Welcome to <i>EDOHWARES</i> Determinant Calculator</h1>
          <p className='text-gray-500 text-[10px] sm:text-sm'>
            With this seamless web application, you can get instant result to calculating the Determinant of a given Square Matrix, ranging from a 2X2 Matrix, 3X3 Matrix etc.
          </p>
        </div>
        
        <Link to={"/choice"} className='bg-gold mt-7 flex gap-1 justify-content-center px-5 sm:px-10 py-3 sm:py-5 align-items-center font-semibold text-deepBlue rounded-md w-fit text-[.5rem] sm:text-sm mx-auto hover:scale-95 duration-500'><span>CONTINUE</span><VscDebugContinue className='text-[.5rem] sm:text-sm my-auto' /> </Link>
      </div>
    </section>
  )
}

export default Welcome