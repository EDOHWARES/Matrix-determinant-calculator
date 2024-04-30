import React from 'react';
import {Link} from 'react-router-dom'

import { VscDebugContinue } from "react-icons/vsc";

const Welcome = () => {
  return (
    <section className='w-full h-screen bg-deepBlue flex align-items-center  justify-center'>
      <div className='bg-white p-10 text-center w-[70%] md:w-[60%] h-[40%] my-auto rounded-md flex flex-col align-items-center justify-between shadow-md'>
        <div className='flex flex-col gap-6'>
          <h1 className='font-bold text-3xl text-deepBlue'>Welcome to <i>EDOHWARES</i> Determinant Calculator</h1>
          <p className='text-gray-700'>
            With this seamless web application, you can get instant result to calculating the Determinant of a given Square Matrix, ranging from a 2X2 Matrix, 3X3 Matrix etc.
          </p>
        </div>
        
        <Link to={"/choice"} className='bg-gold flex gap-1 justify-content-center  px-10 py-5 align-items-center font-semibold text-deepBlue rounded-md w-fit text-1xl mx-auto hover:scale-95 duration-500'><span>CONTINUE</span><VscDebugContinue className='text-xl my-auto' /> </Link>
      </div>
    </section>
  )
}

export default Welcome