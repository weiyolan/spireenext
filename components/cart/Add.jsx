import React from 'react'
import { useAppContext } from '../context/appContext'
import {AiOutlinePlus} from 'react-icons/ai'
import {BiPlus, BiMinus} from 'react-icons/bi'
import {BsCheckLg} from 'react-icons/bs'

export default function Add ({product, plus, support, handleClick, className}) {
  let {addOne, removeOne, content, updateSupport} = useAppContext().cart

// ${(!plus && content[product.id]===0)?'opacity-30':'opacity-100 '} 
  return (
    <div className={`rounded-full flex justify-center items-center mt-0.5 w-6 h-6 min-[480px]:w-4 min-[480px]:h-4 select-none transition-all   
    bg-black/20 
    text-center font-medium text-xs hover:bg-white/20 hover:scale-105 active:scale-95 cursor-pointer ${className}`}
    onClick={handleClick}>
      {support?<BsCheckLg className='w-3 h-3 min-[480px]:w-2 min-[480px]:h-2 '/> 
      :plus?<BiPlus className='w-3 h-3 min-[480px]:w-2 min-[480px]:h-2 stroke-1'/>
      :<BiMinus className={` w-3 h-3 min-[480px]:w-2 min-[480px]:h-2 stroke-1`}/>}
    </div>
  )

}



