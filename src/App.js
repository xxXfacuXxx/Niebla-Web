import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Navegation/Home';
import Estudio from './Components/Pages/Estudio';
import Films from './Components/Pages/Films';
import Festival from './Components/Pages/Festival';
import Contact from './Components/Pages/Contact';
import AboutUs from './Components/Pages/AboutUs';
import Clip1 from './Components/Pages/Clip1';
import Clip2 from './Components/Pages/Clip2';
import Clip3 from './Components/Pages/Clip3';
import Clip4 from './Components/Pages/Clip4';

function App() {
  return (
    <Router>
      <Routes>
        {/* Página de inicio (sin el componente Home) */}
        <Route path='/' element={<Home />} />

        {/* Otras rutas */}
        <Route path='/Estudio' element={<Estudio />} />
        <Route path='/Films' element={<Films />} />
        <Route path='/Festival' element={<Festival />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Clip1' element={<Clip1 />} />
        <Route path='/Clip2' element={<Clip2 />} />
        <Route path='/Clip3' element={<Clip3 />} />
        <Route path='/Clip4' element={<Clip4 />} />
      </Routes>
    </Router>
  );
}

export default App;
