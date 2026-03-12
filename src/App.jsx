import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>React core concepts</h1>
      {/* <Person></Person>
      <Person></Person>
      <Sports></Sports> */}
      <Student></Student>
    </>
  )
}

function Student(){
  return(
    <div className='student'>
      <p>Name: </p>
      <p>Department: </p>
    </div>
  )
}
function Person(){
  const  age = 17;

  return(
    <p>I am a Person Age {age}</p>
  )
}
function Sports(){
  return(
    <div>
      <h1>Cricket</h1>
      <a href="https://www.cricbuzz.com/cricket-schedule/upcoming-series/international" target='blank'>Cricket Buzz</a>
    </div>
  )
}

export default App
