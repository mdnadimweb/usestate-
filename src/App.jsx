import { useState } from 'react'
import person from './data';
import './App.css'

function App() {
 
  const [count, setCount]=useState(1);

  return (
    <>
          {/* maping system  */}

    <div className="parent">

   {person.map ((person,index)=>(

    <div key={person.id } className="child">
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.job }</h2>
      

    </div>
   ))}




    </div>




    <h4>{count}</h4>
    <button onClick={()=>setCount((count)=>count+1)}>like button </button>
    <button onClick={()=>setCount((count)=>count-1)}>unlike button </button>
    </>
  )
}

export default App
