import React from 'react'
import { useAppContext } from '../context/appContext'
import {AiOutlinePlus} from 'react-icons/ai'
import {BiPlus, BiMinus} from 'react-icons/bi'

export default function Add ({product, plus}) {
  let {addOne, removeOne} = useAppContext().cart


  return (
    <div className={`rounded-full flex justify-center items-center mt-0.5 w-4 h-4 select-none transition-all cursor-pointer  
    bg-black/20 hover:bg-black/40 hover:scale-105 active:scale-95
    text-center font-medium text-xs`}
    onClick={plus?addOne:removeOne}>
      {plus?<BiPlus className='w-2 h-2  stroke-1'/>:<BiMinus className='w-2 h-2  stroke-1'/>}
    </div>
  )

}



