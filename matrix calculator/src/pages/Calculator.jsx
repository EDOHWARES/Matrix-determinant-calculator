import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMatrixDimension } from '../App';

const Box = () => {
  return (
    <input max={'999'} min={'-999'} type='number' className='h-[2rem] w-[2rem] sm:w-[5rem] sm:h-[5rem] bg-lightGray text-sm sm:text-2xl text-center'/>
  )
}

const Calculator = () => {
  const {matrixDimension} = useMatrixDimension();

  const [grid, setGrid] = useState(matrixDimension);

  window.onload = () => {
    if (grid != matrixDimension) {
      setGrid(matrixDimension);
    };
  };

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
      alert('All Matrix entries must have a value and a valid one at that!');
      return
    } else if (boxValues[i].length > 3) {
      alert('Entries must not contain more than 3 characters. Pls start over again...');
      clear();
      return
    }
  }

  const r =  determinant(createArrayOfArrays(matrixDimension, boxValues));

  setResult((prevState) => {
    return Math.round(r);
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
    <section className='w-full relative p-3 h-screen bg-deepBlue flex align-items-center justify-between'>
      <Link to={'/choice'} className='absolute top-8 left-4 border border-gold px-3 py-1 sm:px-5 sm:py-3 text-lightGray text-sm sm:text-xl sm:font-semibold hover:scale-95 duration-500'>GO BACK</Link>
      <div className='my-auto mx-auto'>
        <div className='flex items-center gap-5 border border-transparent pl-2 border-l-lightGray/30'>
          <span className='text-3xl text-lightGray'>det</span>
          <div className='border relative border-none'>
            <span className='absolute bg-deepBlue right-3 sm:right-5 w-[80%] h-[1rem] -top-2'></span>
            {grid == 2 ? <div id='box-container' className={`grid grid-rows-2 grid-cols-2 gap-4 border border-lightGray p-4`}>
              {boxes}
            </div>:
            <div id='box-container' className={`grid grid-rows-3 grid-cols-3 gap-4 border border-lightGray p-4`}>
              {boxes}
            </div>}
            <span className='absolute bg-deepBlue right-3 sm:right-5 w-[80%] h-[1rem] -bottom-2'></span>
          </div>
          <div className='flex items-center gap-5'>
            <span className='text-lightGray text-3xl'>=</span>
            <input className='the-answer h-[3.5rem] w-fit min-w-[3.5rem] max-w-[4.5rem] sm:w-fit sm:min-w-[5rem] sm:max-w-[6.5rem] sm:h-[5rem] text-sm sm:text-2xl text-center text-deepBlue p-1 font-semibold' type="number" name="answer" readOnly value={result} />
          </div>
        </div>
        <div className='mt-10 mx-auto w-full flex items-start justify-between border border-transparent border-l-lightGray/30 pl-2'>
          <button 
          onClick={compute}
          className='bg-gold text-deepBlue sm:font-semibold text-sm sm:text-2xl px-2 sm:px-5 py-2 sm:py-3 hover:scale-95 duration-500'>COMPUTE</button>
           <button 
           onClick={clear}
          className='bg-red-500 text-white sm:font-semibold text-sm sm:text-2xl p-2 sm:px-5 sm:py-3 hover:scale-95 duration-500'>CLEAR</button>
        </div>
      </div>
    </section>
  )
}

export default Calculator