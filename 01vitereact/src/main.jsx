import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <>
    <h1>Custom App !</h1>
    </>
  )
}

// const ReactElement = {
//     type:'a',
//     props:{
//         href:"https://google.com",
//         target:'_blank',

//     },
//     children:"Click me to visit google"
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotheruser = "chai aur react"

const ReactElement = React.createElement(
  'a',{href:"https://google.com",target:"_blank"},"Click Me to Vist Google",anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  ReactElement
)