import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)
// let counter = 15
const addValue =()=>{
  if(counter<30){
  setCounter(counter+1)
}
}

const removeValue=()=>{
  if(counter>0){
    setCounter(counter-1)
}
  }
  return (
    <>
      <h1>chai aur code</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add Value</button>
    <br/>
    <button onClick={removeValue}>remove value</button>
    <p>footer: {counter}</p>
    
    </>
  )
}

export default App
