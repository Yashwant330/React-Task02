import React from 'react'

const Comp2 = ({setToggle}) => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className=' relative flex items-center justify-center flex-col h-120 w-90 bg-white rounded-xl border gap-3 p-3'>
        <h1 className=' absolute top-10 text-2xl font-bold'>Create Account</h1>
        <h2 className='absolute top-20 text-xl font-semibold'>Sign into your Account</h2>
      
           <h3  className='absolute top-40 left-10'>E-mail</h3>
        <div className='absolute top-45 h-10 w-70 border'></div>

          <h3 className='absolute top-60 left-10'>Password</h3>
        <div className='absolute top-65 h-10 w-70 border'></div>



  <button onClick={()=>{
    setToggle(prev=>!prev)
  }}
  className='absolute bottom-25 text-2xl font-semibold border rounded-xl bg-blue-600 px-25 py-1'>Log-In</button>
        <p className='text-xl absolute bottom-5'>Don't have account?<button className='font-semibold underline decoration-red-500 cursor-pointer'>Sign-up</button></p>


      </div>
    </div>
  )
}

export default Comp2
