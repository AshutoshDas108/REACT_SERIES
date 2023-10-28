import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function C1(){
  return (
      <>
      <a href="https://google.com" target='_blank'>Click Me</a>
      <h2>This is a tag inside an object</h2>
      <App/>
      </>
  )
}

const anotherElement =(
    <h2>This is a tag inside an object</h2>
)

const anotherElement2 =(
  <App/>
)

const reactElement = React.createElement(
  'a',
  {href: "https://google.com", target: "_blank"},
  'Click Me',
  anotherElement,
  anotherElement2
)

ReactDOM.createRoot(document.getElementById('root'))
.render(
   reactElement
)
