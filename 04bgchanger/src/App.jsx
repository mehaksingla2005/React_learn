import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    //ONCLICK KO FUNCTION CHAHIYE NA KI RETURND VALUE
    //the onclick method in react expects a function reference .you cant directly pass paramters inside the function instead you need to pass it as a refernece or usearrow function syntax
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}></div>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap shadow-lg bg-white justify-center gap-3 px-3 py-2 rounded-3xl'>
        <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>Green</button>
        <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>Blue</button>
        <button onClick={()=>setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"orange"}}>Orange</button>
      </div>
    </div>

      
    </>
  )
}

export default App
