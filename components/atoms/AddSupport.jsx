import React, { useState } from 'react'
import Button from './Button'
import { useAppContext } from '../context/appContext'

export default function AddSupport () {

  let {updateSupport, supportAmount, setSupportAmount} = useAppContext().cart
  // {id:'moon', price:99, name: 'Moon Merino Base Layer', description:''}

// function addSupport () {
//   // {id:'moon', price:99, name: 'Moon Merino Base Layer', description:''}
//   // console.log(supportAmount)
//   updateSupport()
// }

  return (
    <div className=''>
      <form>
        <label required htmlFor='supportAmount' className='text-base inline-flex cursor-pointer'>
          Your Amount:
          </label>  

        <span className='text-base ml-2 xs:ml-6 font-medium invalid:text-red-400'>€</span>
        <input name='supportAmount' min={0} id='supportAmount' type='number' value={supportAmount} className={`transition-all inline-flex w-10 font-medium text-base mr-2 xs:mr-6 bg-transparent text-center border-b
         border-b-white/50 animate-borderPulse focus:outline-none outline-none target:outline-none appearance-none hover:border-white/50 hover:invalid:border-red-400 invalid:text-red-400 invalid:border-red-400 invalid:border-b-2 `} 
         onChange={(e)=>{setSupportAmount(+e.target.value)}}/>

        <Button med text='Change' handleClick={updateSupport}/>

{/* 
        <div  className='inline-block relative col-start-1 col-span-1 pr-3'>
            <motion.label variants={inputVariants} className='text-primary cursor-pointer font-semibold whitespace-nowrap text-xs inline-flex max-w-fit mt-2 ml-1' htmlFor='name'>{`${locale==='en'?'NAME':"PRENOM"}`}</motion.label>
            <motion.input variants={inputVariants} required name='name' className={`block bg-white/10 shadow-sm font-normal text-primary placeholder:text-primary placeholder:text-xs min-[400px]:placeholder:text-sm
              ${!noBlur && ' backdrop-blur-md focus:backdrop-blur-sm '} target:outline-primary rounded-2xl
            autofill:bg-white/10  valid:scale-[0.99] 
              outline-none -outline-offset-2 focus:outline-none focus:animate-outlinePulse
              border border-transparent invalid:text-pink-600
              placeholder:text-primary/50
              focus:-outline-offset-2 focus:outline-white/20 p-2 w-full text-sm my-2`} id='name'
              type='text' 
              placeholder={`${locale==='en'?"First name":"Ou surnom"}`}
              value={name}
              onChange={(e)=>{setName(e.target.value)}}/>
          </div> */}


      </form>   

    </div>
  )
}

