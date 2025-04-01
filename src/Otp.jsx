import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const Otp = () => {
  const [otp, setOtp] = useState([1,2,3,4,5,6])


  const inputRef = useRef(null)
   

  const handleChange=(e)=>{

  }
   `
  
   
 
  

  return (
    <div className=' w-full h-screen flex justify-center items-center'>
     <div className=' w-100 h-70 border rounded-2xl '>
     {
        otp.map((otpbox,index)=>{
             return(
              <input  key={index} type="text" ref={inputRef}  maxLength={1} onChange={(e)=>{handleChange(e)}} className=' border m-2 rounded h-10 w-10' />
             )
        })
      }
      <button className=' m-2 h-10 w-30  bg-black text-white rounded'>Verify otp</button>
     </div>

      
     
    </div>
  )
}

export default Otp
