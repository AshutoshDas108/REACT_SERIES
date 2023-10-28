import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// PROJECT : Online bead bag

function App() {

  //let counter = 10

  let [counter, setCounter] = useState(0)
  let [rounds, setRound] = useState(0)

  const INR = () =>{
    if(counter==108) {
      counter=0
      rounds=rounds+1;
      console.log(rounds)
      setRound(rounds)
     // alert("1 Round completed")
    }
    if(counter<108){
      counter = counter+1;
      console.log(counter);
      setCounter(counter)
    }
  }

  const DCR = () =>{
    if(counter==0) alert("Minimum Value reached")
    if(counter>0){
      counter = counter-1;
      console.log(counter);
      setCounter(counter)
    }   
  }

  return (
    <>
      <h2>ROUNDS {rounds}</h2>
      <h3>COUNTER {counter}</h3>
      <br/>
      <button onClick={INR}>INR</button>
      <br/>
      <br/>
      <button onClick={DCR}>DCR</button>
    </>
  )
}

export default App
