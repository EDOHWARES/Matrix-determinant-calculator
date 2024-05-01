import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Calculator from './pages/Calculator';
import ChoicePage from './pages/ChoicePage';
import Welcome from './pages/Welcome';
import Error from './pages/Error';

import { createContext, useContext, useState } from 'react';
const MatrixContext = createContext();
function App() {
  const [matrixDimension, setMatrixDimension] = useState(2)

  const handleMatrixDimension = (dimension) => {
    setMatrixDimension((prevState) => {
      return dimension
    })
  }

  return (
    <BrowserRouter>
      <MatrixContext.Provider value={{matrixDimension, handleMatrixDimension}}>
        <Routes>
          <Route path='/' element={<Welcome/>} />
          <Route path='choice' element={<ChoicePage/>} />
          <Route path='calculator' element={<Calculator/>} />
          <Route path='*' element={<Error />} />
        </Routes>
      </MatrixContext.Provider>
    </BrowserRouter>
  )
}

export default App;
export const useMatrixDimension = () => useContext(MatrixContext);
