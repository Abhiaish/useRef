import { useState,useEffect,useRef } from "react";
import "./styles.css";

export default function App() {
  const [name ,setName]=useState('')
  const renderCount=useRef(0)
  useEffect(()=>{
    renderCount.current=renderCount.current+1
  })
  return (
    <div className="App">
      <input value={name} onChange={e=>setName(e.target.value)}/>
      <p>My name is {name}</p>
<p> rendered {renderCount.current} times</p>
    </div>
  );
}
