import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const Otp = () => {
  
  const [otp, setOtp] = useState(new Array(6).fill(''))


  const inputRef = useRef([])

  useEffect(() => {
    inputRef.current[0]?.focus()

  },[])
   

  const handleChange=(value,index)=>{
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)
    console.log(newOtp);
    
    inputRef.current[index+1]?.focus()
}

const handleOnkeyDown=(e)=>{
  if(e.key === 'Backspace'){
   

    inputRef.current[index-1]?.focus()
  }
}
   
  return (
    <div className=' w-full h-screen flex justify-center items-center bg-yellow-100'>
      <form action="" onSubmit={(e)=>{e.preventDefault()
        localStorage.setItem('otp',otp)
        window.location.href='/verify'
        if(otp.length===6){
          alert('otp verified')
        }else{
          alert('you have entered wrong otp')
        }
      }}>
      <div className=' w-[50vh] h-[50vh]  rounded-2xl pt-3 flex flex-col justify-between  bg-amber-200 backdrop-blur-xl items-center  shadow-xl '> 
     <h1 className=' text-3xl font-bold mt-10 text-amber-600 '>Enter the OTP</h1>
     <div className='flex justify-center  '>
     {
        otp.map((otpbox,index)=>{
             return(
              <input onKeyDown={(e)=>{handleOnkeyDown(e)}}  key={index} type="text" ref={el => (inputRef.current[index] = el)} value={otp[index]}  maxLength={1} onChange={(e)=>{handleChange(e.target.value ,index)}} className=' border-amber-400 border-2 m-1 rounded h-10 w-10 text-center' />
             )
        })
      }
     </div>
      <button type='submit'  className=' mb-10 h-10 w-30  bg-amber-500 text-white rounded'>Verify otp</button>
     </div>
      </form>

      
     
    </div>
  )
}

export default Otp 
