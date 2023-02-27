import React from 'react'
import { useAppContext } from '../context/appContext'
import {AiOutlinePlus} from 'react-icons/ai'
import {BiPlus, BiMinus,BsCheckLg} from 'react-icons/bi'

export default function Add ({product, plus, support}) {
  let {addOne, removeOne, content,updateSupport} = useAppContext().cart


  return (
    <div className={`rounded-full flex justify-center items-center mt-0.5 w-6 h-6 min-[480px]:w-4 min-[480px]:h-4 select-none transition-all   
    bg-black/20  ${(!plus && content[product.id]===0)?'opacity-30':'opacity-100 hover:bg-white/20 hover:scale-105 active:scale-95 cursor-pointer'} 
    text-center font-medium text-xs`}
    onClick={support?()=>{updateSupport()}:plus?()=>addOne(product):()=>removeOne(product)}>
      {support?<BsCheckLg className='w-3 h-3 min-[480px]:w-2 min-[480px]:h-2 '/> :plus?<BiPlus className='w-3 h-3 min-[480px]:w-2 min-[480px]:h-2 stroke-1'/>:<BiMinus className={` w-3 h-3 min-[480px]:w-2 min-[480px]:h-2 stroke-1`}/>}
    </div>
  )

}



