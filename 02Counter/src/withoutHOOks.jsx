import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// UI fails to change even if states are changed 

function App() {

  let counter = 10

  const INR = () =>{
    counter = counter+1;
    console.log(counter);
  }

  const DCR = () =>{
    counter = counter-1;
    console.log(counter);
  }

  return (
    <>
      <h2>COUNTER {counter}</h2>
      <br/>
      <button onClick={INR}>INR</button>
      <br/>
      <br/>
      <button onClick={DCR}>DCR</button>
    </>
  )
}

export default App
