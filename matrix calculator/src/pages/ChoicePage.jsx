import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useMatrixDimension } from '../App';

import { GrLinkNext } from "react-icons/gr";

const ChoicePage = () => {
  const {matrixDimension, handleMatrixDimension} = useMatrixDimension();

  let navigate = useNavigate();

  const handleSelect = () => {
    let value = document.querySelector('select.select').value;
    // let value = e.target.value;
    console.log(value)
    localStorage.setItem('type', JSON.stringify(value));
    handleMatrixDimension(JSON.parse(localStorage.getItem('type')));
  };

  const handleNavigation = () => {
    if (matrixDimension == 'processing') {
      alert('You cannot perform this action now. still on process...')
    } else if (matrixDimension == null) {
      localStorage.setItem('type', JSON.stringify(2));
      handleMatrixDimension(2);
      navigate('/calculator');
    } else {
      handleSelect();
      navigate('/calculator')
    }
  }

  return (
    <section className='w-full p-3 h-screen bg-deepBlue flex align-items-center  justify-center'>
      <div className='bg-slate-100 text-sm px-3 py-5 sm:p-10 text-center w-fit sm:w-[70%] md:w-[60%] h-fit my-auto rounded-md flex flex-col align-items-center justify-between shadow-md'>
        <div className='flex flex-col gap-6'>
          <p className='text-red-300'>
            <em>Note:</em> This project is still under construction, so for now you'll only be able to access the 2X2 Matrix and 3X3 Matrix.There'll also be an integration of a program that calculates the minor of a matrix in the next update.
          </p>
          <select 
          name="type-of-det" 
          id="type" 
          className='select matrix-type p-1 sm:p-3 text-center w-[50%] mx-auto outline-none border-none outline-deepBlue rounded-md'
          onChange={handleSelect}
          >
            <option value="2" className='m-5'>2X2 Matrix</option>
            <option value="3" className='p-3'>3X3 Matrix</option>
            <option value="processing" className='p-3'>on process...</option>
          </select>
        </div>
        
        <button onClick={handleNavigation} className='bg-gold mt-8 flex gap-1 justify-content-center px-5 py-3 sm:px-5 sm:py-3 align-items-center font-semibold text-deepBlue rounded-md w-fit text-[.5rem] sm:text-sm mx-auto hover:scale-95 duration-500'><span>OK</span><GrLinkNext className='my-auto'/></button>
      </div>
    </section>
  )
}

export default ChoicePage