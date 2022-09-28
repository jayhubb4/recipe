import React from 'react';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Cuisine from './Cuisine';

const pages = () => {
  return (
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cuisine/:type' element={<Cuisine />} />
      </Routes>
  );
}

export default pages