import React, { useEffect } from 'react'
import { useState } from 'react'
import Course from '../components/new'
import react_image from '../src/assets/react.svg'
import vite from '../src/assets/vite.svg'
import boot from '../src/assets/hero.png'
import Login from '../components/login'

const App = () => {
  
  // useState

  // const [color,setColor] = useState("0")
  //  const change = () => {
  //   setColor("Blue");
  // const [car,setCar] = useState({
  //   brand:"BMW",
  //   color:"Blue",
  //   model:"M5",
  //   year:2025
  // });
  // const change = () => {
  //   setCar({
  //   brand:"Benz",
  //   color:"Red",
  //   model:"Merz",
  //   year:2020
  //   })
  // }
  // const change = () => {
  //   setCar((prev)=>{
  //     return {...prev,color:"Red"}
  //   })
  // }
 
  // useEffect

  // const [count,setCount] = useState (0);
  // useEffect(() =>{
  //   setTimeout(() =>{
  //     setCount(count+1);
  //   },2000)
  // })
  
 

    
   
  return (
    <>
    {/*   usestate
     <h1>My fav color {color}!</h1>
    <button onClick={change}>Blue</button> 

    <h1>My {car.brand}</h1>
    <h2>It is a {car.color} {car.model} from {car.year}</h2>
    <button onClick={change}>Change </button> */}

    {/* <h1>Count {count}</h1> */}

   {/* <button onClick={() =>{setValue(prev => prev-1)}}>-1</button> 
   <h1>{value}</h1>
   <button onClick={() =>{setValue(prev => prev+1)}}>+1</button> */}
{/*    
    <Course  price="$ 200" image={react_image}/>
    <Course course1="VITE" price="$ 400"  image={vite}/>
    <Course course1="BOOT" price="$ 500"  image={boot}/> */}

    <Login />
    </>
  )
}

export default App