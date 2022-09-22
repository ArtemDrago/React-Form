import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Result from './components/result/Result';
import Step1 from './components/step1/Step1';
import Step2 from './components/step2/Step2';
import Step3 from './components/step3/Step3';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route exact path='/' element={<Step1 />} />
        <Route path='/step2' element={<Step2 />} />
        <Route path='/step3' element={<Step3 />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
