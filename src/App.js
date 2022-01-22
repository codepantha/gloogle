import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import 'tachyons';
import Footer from './components/Footer';
import Header from './components/Header';
import Results from './components/Results';
import './index.css';

const App = () => {
  return (
    <div className='App pt3'>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to='/search' />} />
        <Route path='/search' element={<Results />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App