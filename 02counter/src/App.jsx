import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter,setCounter]=useState(15)

  // let counter = 15

  const addValue = () => {
    if (counter>=20) {
      console.log("Value Cannot be Greater than 20.");
    } else {
      setCounter(counter+1)
    }
  }

  const removeValue = () => {
    if (counter<=0) {
      console.log("Value Cannot be Negative");
    } else {
      setCounter(counter-1)
    }
  }

  return (
    <>
    <h1>Dipak Rathod</h1>
    <h2>Counter Value : {counter}</h2>

    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
