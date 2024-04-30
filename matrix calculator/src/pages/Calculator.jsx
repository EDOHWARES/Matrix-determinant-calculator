import React from 'react';
import { Link } from 'react-router-dom';

const Box = () => {
  return (
    <input type='number' className='w-[5rem] h-[5rem] bg-lightGray text-2xl text-center'>
    </input>
  )
}

const Calculator = () => {

  const boxes = [];

  for (let i=0; i < 9; i++) {
    boxes.push(<Box key={i} />)
  }
  return (
    <section className='w-full relative h-screen bg-deepBlue flex align-items-center justify-between'>
      <Link to={'/choice'} className='absolute top-8 left-4 border border-gold px-5 py-3 text-lightGray font-semibold hover:scale-95 duration-500'>GO BACK</Link>
      <div className='my-auto mx-auto'>
        <div className='flex items-center gap-5 border border-transparent pl-2 border-l-lightGray/30'>
          <span className='text-3xl text-lightGray'>det</span>
          <div className='border relative border-none'>
            <span className='absolute bg-deepBlue right-7 w-[80%] h-[1rem] -top-2'></span>
            <div className='grid grid-cols-3 gap-4 border border-lightGray p-4'>
              {boxes}
            </div>
            <span className='absolute bg-deepBlue right-7 w-[80%] h-[1rem] -bottom-2'></span>
          </div>
          <div className='flex items-center gap-5'>
            <span className='text-lightGray text-3xl'>=</span>
            <span className='w-[5rem] h-[5rem]'><input className='w-full h-full text-2xl text-center' type="number" name="answer" id="answer" readOnly /></span>
          </div>
        </div>
        <div className='mt-10 mx-auto w-full flex items-start border border-transparent border-l-lightGray/30 pl-2'>
          <button className='bg-gold text-deepBlue font-semibold text-2xl px-5 py-3 hover:scale-95 duration-500'>COMPUTE</button>
        </div>
      </div>
    </section>
  )
}

export default Calculator