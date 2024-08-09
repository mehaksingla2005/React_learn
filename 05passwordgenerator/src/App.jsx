import { useCallback, useState ,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[length,setLength]=useState(8);
  const[numberallowed,setNumberallowed]=useState(false);
  const[charallowed,setCharallowed]=useState(false);
  const[password,setPassword]=useState("");
  const passwordRef=useRef(null);
  const copyPasswordToClipBoard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)
  },[password])


  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuiopasdfghjklzcvbnm";
    if(numberallowed)str+="0123456789";
    if(charallowed)str+="~!@#$%^&*()_{}[]+=";
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length + 1);
      pass+=str.charAt(char);
    }
    setPassword(pass);
  },[length,numberallowed,charallowed,setPassword])
  useEffect(()=>{
    passwordGenerator();
  },[length,numberallowed,charallowed,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-800'>
        <h1 className="text-white text-center my-3 ">Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipBoard} className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>setLength(e.target.value++)} />
            <label >Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={numberallowed}
            id="numberInput"
            onChange={()=>{
              setNumberallowed((prev)=>!prev);
            }}

          />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={charallowed}
            id="charInput"
            onChange={()=>{
              setCharallowed((prev)=>!prev);
            }}

          />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
