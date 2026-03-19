import React, { useState } from 'react'
import Comp1 from './Components/comp1'
import Comp2 from './Components/Comp2'
const App = () => {
  console.log("clicked")
const [Toggle,setToggle] =useState(false)
  return (
    <div>
      <h1></h1>
      
      {Toggle?(<Comp1 setToggle={setToggle}/>):
     ( <Comp2 setToggle={setToggle}/>)}
    </div>
  )
}

export default App
