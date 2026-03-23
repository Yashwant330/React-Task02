import React, { useState } from 'react'
import Comp1 from './Components/Comp1'
import Comp2 from './Components/Comp2'

const App = () => {

   const[toggle,setToggle]=useState(false)

  return (
    <div>
     {toggle?<Comp1 setToggle={setToggle}/>:<Comp2 setToggle={setToggle}/>}
    </div>
  )
}

export default App
