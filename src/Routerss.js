import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Effect from './Effect';
import Linked from './Linked';
import Success from './Success';
const Routerss = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Landing/>} ></Route>
      <Route path="/effect" element={<Effect/>} />
      <Route path="/link" element={<Linked/>} />
      <Route path="/success" element={<Success/>} />
      
   </Routes>
  );
};

export default Routerss;