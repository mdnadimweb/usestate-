import { useState } from 'react'
import person from './data';
import './App.css'

function App() {
 
  const [count, setCount]=useState(1);

  return (
    <>
          {/* maping system  */}

{person.map ()=>(

  
)}




    <h4>{count}</h4>
    <button onClick={()=>setCount((count)=>count+1)}>like button </button>
    <button onClick={()=>setCount((count)=>count-1)}>unlike button </button>
    </>
  )
}

export default App
