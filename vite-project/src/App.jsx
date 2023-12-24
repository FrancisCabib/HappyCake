import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './assets/components/Nav';
import Contacto from './assets/components/views/Contacto';
import Home from './assets/components/views/Home';
import NotFound from './assets/components/views/NotFound';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path='/'
          element = {<Home />}
        />
        <Route
          path='/contacto'
          element = {<Contacto />}
        />
        <Route
          path='*'
          element = {<NotFound />}
        />
        
      </Routes>
    </>
  )
}

export default App

