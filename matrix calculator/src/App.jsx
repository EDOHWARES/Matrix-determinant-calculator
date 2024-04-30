import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Calculator from './pages/Calculator';
import ChoicePage from './pages/ChoicePage';
import Welcome from './pages/Welcome';
import Error from './pages/Error';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='choice' element={<ChoicePage/>} />
        <Route path='calculator' element={<Calculator/>} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
