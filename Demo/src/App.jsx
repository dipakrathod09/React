import React, { use } from "react";
import {useState} from 'react'
function App() {
  const [text,setText] = useState("LJ University")
  const [color,setColor] = useState("red")
  const [visible,setVisible] = useState(true)
  const [buttonText,setButtonText] = useState("Hide")
  return (
    <div>
      <h2 style={{color:`${color}`}}>{text}</h2>
      <h2 style={{color:`${color}`}} hidden={!visible}>React Js Hooks</h2>
      <button onClick={() => {if (text==="LJ University") {setText("Welcome Student")} else { setText("LJ University") }}}>Change Text</button>
      <button onDoubleClick={() => {if (color==="red") {setColor("blue")}else { setColor("red") }}}>Change Color</button>
      <button onClick={() => {if(visible) {setVisible(false),setButtonText("Show")}else{setVisible(true),setButtonText("Hide")}}}>{buttonText}</button>
    </div>
  )
}
export default App;