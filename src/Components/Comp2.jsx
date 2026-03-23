import React from 'react'

const Comp2 = ({setToggle}) => {
  return (
   <div className='h-screen flex justify-center items-center'>
      <div className=' relative flex items-center justify-center flex-col h-120 w-90 bg-white rounded-xl border gap-3 p-3'>
        <h1 className=' absolute top-10 text-2xl font-bold'>Welcome back</h1>
        <h2 className='absolute top-20 text-xl font-semibold'>Sign in to account</h2>
      
    

         <h3  className='absolute top-30 left-10'>E-mail</h3>
        <div className='absolute top-35 h-10 w-70 border'></div>

         <h3 className='absolute top-50 left-10'>Password</h3>
        <div className='absolute top-55 h-10 w-70 border'></div>

        <h3 className='absolute top-71 left-10 text-white z-10 text-2xl font-semibold left-32'>SIGN IN</h3>
        <div className='absolute top-70 h-10 w-70 border  bg-blue-500'></div>

                  <span className='absolute bottom-10'>Don't have account<button  className='underline decoration-red-500' onClick={()=>
                    {
                      setToggle(true)
                    }
                  }>Sign-up</button></span>

        </div>
        </div>

       

  )
}

export default Comp2
