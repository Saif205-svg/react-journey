import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './todo'
import Cook from './cook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>React core concepts</h1>
      <Cook isHungry={true}></Cook>
      <Cook isHungry={false}></Cook>
      <ToDo task="Learn React" isDone={true}></ToDo>
      <ToDo task="Revise JS" isDone={false}></ToDo>
      {/*<Person></Person>
      <Person></Person>
      <Sports></Sports>
      <Student></Student>
      <Developer name="Rakib" technology="C++"></Developer>
      <Developer name="Juthi" technology="JS"></Developer>
      <Developer name="Mojnu" technology="Python"></Developer>
      <Laptop name="Asus" price="25,000 Taka" color="Black"></Laptop>
      <Laptop name="Acer" price="30,000 Taka" color="Blue"></Laptop>
      <Laptop name="HP" price="35,000 Taka" color="Navy"></Laptop>
      <Player name="Tamim" run="5000"></Player>
      <Salami event="Passed In Exam" amount="2000"></Salami>
      <Salami event="Eid Salami"></Salami>
      <Book Name="পদ্দজা" price="৭৫০ টাকা"></Book>
      <Book Name="পথের পাচালি" price="৫৫০ টাকা"></Book>*/}

    </>
  )
}

const {Name,price} = {name:"পদ্দজা",price:"৭৫০ টাকা"}
function Book({Name,price}){
  return(
    <div className='booklist'>
      <h3>My Book Name Is : {Name}</h3>
      <h3>Books Price: {price}</h3>
    </div>
  )
}

//destructuring
const {name,run} = {name:'Tamim',run:'5000'}
function Player({name,run}){
  return(
    <div className='student'>
      <h3>Name: {name}</h3>
      <p>Runs: {run}</p>
    </div>
  )
}

//more destructuring
function Salami({event,amount="20 Taka"}){
  return(
    <div className='student'>
      <p>Salami For: {event}</p>
      <p>Amount: {amount}</p>
    </div>
  )
}
function Student(){
  return(
    <div className='student'>
      <p>Name:</p>
      <p>Department: </p>
    </div>
  )
}
function Person(){
  const  age = 17;
  return(
    <p style={personStyle}>I am a Person Age {age}</p>
  )
}
const personStyle = {
  color:'red',
  fontSize:'25px',
  fontWeight:'bold'
}
function Sports(){
  return(
    <div>
      <h1>Cricket</h1>
      <a href="https://www.cricbuzz.com/cricket-schedule/upcoming-series/international" target='blank'>Cricket Buzz</a>
    </div>
  )
}

function Developer(props){
  console.log(props);
  return(
    <div style={{
      border:'2px solid green',
      borderRadius: '20px',
      margin:'20px'
    }}>
      <h3>Developer Name: {props.name}</h3>
      <h3>Technology Name: {props.technology}</h3>
    </div>
  )
}

function Laptop(laptop){
  return(
    <div style={{
      border:'3px solid cyan',
      borderRadius:'20px',
      margin:'20px'
    }}>
      <h2>Brand Name: {laptop.name}</h2>
      <h3>Price: {laptop.price}</h3>
      <h4>Color: {laptop.color}</h4>
    </div>
  )
}



export default App
