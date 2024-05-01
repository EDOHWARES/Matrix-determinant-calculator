import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMatrixDimension } from '../App';

const Box = () => {
  return (
    <input type='number' className='w-[5rem] h-[5rem] bg-lightGray text-2xl text-center'/>
  )
}

const Calculator = () => {
  const {matrixDimension} = useMatrixDimension();
  console.log(matrixDimension);

  const [result, setResult] = useState('');

  const numberOfBoxes = matrixDimension * matrixDimension;

  const boxes = [];

  // Creating an array of box component based on the choosen matrixType
  for (let i=0; i < numberOfBoxes; i++) {
    boxes.push(<Box key={i} />)
  }

  // Computing the determinant
  const compute = () => {

    const boxes = document.querySelectorAll('#box-container input');

    const boxValues = [];

    // appending the user inputs into the boxValues array
    boxes.forEach((input) => {
      boxValues.push(input.value);
    });

    // Creating an array of array to represent the matrix
    const createArrayOfArrays = (length, elements) => {
      const newBoxValues = [];
      let numOfArrays = elements.length / length;

      for (let i=0; i < numOfArrays; i++) {
        const start = i * length;
        const end = (i + 1) * length;

        newBoxValues.push(elements.slice(start, end));
      }
      return newBoxValues;
    }

      // Function to calculate the minor of a matrix
    const minor = (matrix, rowToRemove, colToRemove) => {
      return matrix.filter((row, i) => i !== rowToRemove).map(row => row.filter((_, j) => j !== colToRemove));
    }

    // Determinant calculator using recursive algorithm(laplace expansion)
    const determinant = (matrix) => {
      // Base case: if matrix is 1x1, return its value
      if (matrix.length === 1 && matrix[0].length === 1) {
          return matrix[0][0];
      }
  
      // Recursive case: calculate determinant using Laplace expansion
      let det = 0;
      for (let i = 0; i < matrix.length; i++) {
          const sign = i % 2 === 0 ? 1 : -1; // Alternating signs
          const cofactor = matrix[0][i] * determinant(minor(matrix, 0, i));
          det += sign * cofactor;
      }
  
      return det;
  }
  
  // return an alert if any of the matrix entries is left void.
  for (let i=0; i < boxValues.length; i++) {
    if (boxValues[i] == '') {
      alert('All Matrix entries must have a value');
      return
    }
  }

  const r =  determinant(createArrayOfArrays(matrixDimension, boxValues));

  setResult((prevState) => {
    return r;
  })

}

const clear = () => {
  setResult((prevState) => {
    return "";
  });
  const boxes = document.querySelectorAll('#box-container input');
  boxes.forEach((input) => {
    input.value = undefined;
  });

}

  

  return (
    <section className='w-full relative h-screen bg-deepBlue flex align-items-center justify-between'>
      <Link to={'/choice'} className='absolute top-8 left-4 border border-gold px-5 py-3 text-lightGray font-semibold hover:scale-95 duration-500'>GO BACK</Link>
      <div className='my-auto mx-auto'>
        <div className='flex items-center gap-5 border border-transparent pl-2 border-l-lightGray/30'>
          <span className='text-3xl text-lightGray'>det</span>
          <div className='border relative border-none'>
            <span className='absolute bg-deepBlue right-7 w-[80%] h-[1rem] -top-2'></span>
            <div id='box-container' className={`grid grid-cols-${matrixDimension} gap-4 border border-lightGray p-4`}>
              {boxes}
            </div>
            <span className='absolute bg-deepBlue right-7 w-[80%] h-[1rem] -bottom-2'></span>
          </div>
          <div className='flex items-center gap-5'>
            <span className='text-lightGray text-3xl'>=</span>
            <input className='the-answer w-[5rem] h-[5rem] text-2xl text-center text-deepBlue p-1 font-semibold' type="number" name="answer" readOnly value={result} />
          </div>
        </div>
        <div className='mt-10 mx-auto w-full flex items-start justify-between border border-transparent border-l-lightGray/30 pl-2'>
          <button 
          onClick={compute}
          className='bg-gold text-deepBlue font-semibold text-2xl px-5 py-3 hover:scale-95 duration-500'>COMPUTE</button>
           <button 
           onClick={clear}
          className='bg-red-500 text-white font-semibold text-2xl px-5 py-3 hover:scale-95 duration-500'>CLEAR</button>
        </div>
      </div>
    </section>
  )
}

export default Calculator