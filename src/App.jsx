import { useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Bottles from './components/Bottles/Bottles';

function App() {
 

  return (
    <>
      <Header></Header>
      <Bottles></Bottles>

    </>
  )
}

export default App
