import { useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'
import { useEffect } from 'react';

function App() {
 
  const watchs = [
    {id: 1, name: 'canon', price: 3214},
    {id: 2, name: 'Samsu', price:1234},
    {id: 3, name: 'cassio', price: 1643},

  ]

  
  // local
  const [watches, setWatches] = useState([]);
  useEffect(()=>{
    fetch('watchs.json')
    .then(res => res.json())
    .then(data => setWatches(data))

  },[])
 


  return (
    <>
      <h1>Data Storage Integration</h1>
      {
        watchs.map(watch => <Watch 
         key={ watch.id}
         watch={watch}></Watch>)
      }
    </>
  )
}

export default App
