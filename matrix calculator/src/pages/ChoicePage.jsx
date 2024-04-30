import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { GrLinkNext } from "react-icons/gr";

const ChoicePage = () => {
  let navigate = useNavigate();
  const [matrixType, setMatrixType] = useState(1);
  // const mTypeValue = document.querySelector('.matrix-type').value;
  // console.log(mTypeValue)

  const handleChange = (e) => {
    let el = e.target;
    setMatrixType((prevState) => {
      return el.value;
    })
  };

  const handleNavigation = () => {
    if (matrixType == 'processing') {
      alert('You cannot perform this action now. still on process...')
    } else {
      navigate('/calculator')
    }
  }

  return (
    <section className='w-full h-screen bg-deepBlue flex align-items-center  justify-center'>
      <div className='bg-white p-10 text-center w-[70%] md:w-[60%] h-[75%] md:h-[40%] my-auto rounded-md flex flex-col align-items-center justify-between shadow-md'>
        <div className='flex flex-col gap-6'>
          <p className='text-red-600'>
            <em>Note:</em> This project is still under construction, so for now you'll be only able to access the 1X1 Matrix and 2X2 Matrix.
          </p>
          <select 
          name="type-of-det" 
          id="type" 
          className='matrix-type p-3 text-center w-[50%] mx-auto outline-none border-none outline-deepBlue rounded-md'
          onChange={handleChange}
          >
            <option defaultValue value="1" className='p-3'>1X1 Matrix</option>
            <option value="2" className='p-3'>2X2 Matrix</option>
            <option value="processing" className='p-3'>on process...</option>
          </select>
        </div>
        
        <button onClick={handleNavigation} className='bg-gold flex gap-1 justify-content-center  px-10 py-5 align-items-center font-semibold text-deepBlue rounded-md w-fit text-1xl mx-auto hover:scale-95 duration-500'><span>OK</span><GrLinkNext className='my-auto'/></button>
      </div>
    </section>
  )
}

export default ChoicePage