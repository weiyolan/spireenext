import React, { useState } from 'react'
import { motion } from 'framer-motion'
// import Minus from './Minus'
import Add from './Add'
import { useAppContext } from '../context/appContext';

const childVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 0,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export default function CartItem({ item, title }) {
  const { content, supportAmount, setSupportAmount, addOne, removeOne, updateSupport, removeSupport } = useAppContext().cart;
  let [showSave, setShowSave] = useState(false)

  if (item?.id === 'support') {
    return (<motion.div variants={childVariants} className={`w-full flex text-primary text-base min-[480px]:text-sm ${title ? ' font-normal pb-1 border-b-[1px] border-primary' : ' font-light'} font-sans `}>
      <div className=' flex justify-center text-center items-center w-3/12'>
        <Add product={item} handleClick={removeSupport} />
      </div>

      <div className={`flex justify-between w-6/12 ml-4 text-left items-center whitespace-pre-wrap ${!title ? content[item?.id] === 0 ? 'opacity-30' : 'opacity-100' : ''}`}>
        {item.name}
        <Add support className={`${showSave ? 'opacity-100 duration-500 ' : 'duration-500 opacity-0 delay-200 '}`} product={item} handleClick={() => { updateSupport(); setShowSave(false) }} />
      </div>

      <div className={`inline-flex w-3/12 justify-end ${!title ? content[item?.id] === 0 ? 'opacity-30' : 'opacity-100' : ''}`}>
        <form className='flex w-fit items-end'>
          <label>€</label>
          <input name='supportAmount' min={0} id='supportAmount' type='number' value={supportAmount} className={`transition-all w-full inline-flex text-end text-inherit bg-transparent border-b
         border-b-white/50 animate-borderPulse focus:outline-none outline-none target:outline-none appearance-none hover:border-primary/50 hover:invalid:border-red-400 invalid:text-red-400 invalid:border-red-400 invalid:border-b-2 `}
            onChange={(e) => { setShowSave(true); setSupportAmount(+e.target.value) }} />

        </form>
      </div>

    </motion.div>)
  }


  return (
    <motion.div variants={childVariants} className={`w-full flex text-primary text-base min-[480px]:text-sm ${title ? ' font-normal pb-1 border-b-[1px] border-primary' : ' font-light'} font-sans `}>
      <div className=' flex justify-center text-center items-center w-3/12'>
        {title ? <p>#</p> :
          <>
            <Add product={item} handleClick={() => {removeOne(item)}} />
            <p className='mx-auto'>
              {item.qty}
            </p>
            <Add product={item} handleClick={() => addOne(item)} plus />
          </>}
      </div>

      <div className={`flex ml-4 text-left w-7/12 items-center whitespace-pre-wrap ${!title ? content[item?.id] === 0 ? 'opacity-30' : 'opacity-100' : ''}`}>
        {title ? 'Item' : item.name}
        {/* {item.title +'\n' +item.size } */}
      </div>
      {/* <div className='flex text-left w-3/5'>
            { }
        </div> */}
      <div className={`flex w-2/12 ${!title ? 'uppercase justify-center': ''}`}>
        {title ? 'Size' : (item.size)}
      </div>

      <div className={`flex w-2/12 justify-end ${!title ? content[item?.id] === 0 ? 'opacity-30' : 'opacity-100' : ''}`}>
        {title ? 'Price' : '€' + (item.qty * item.price)}
      </div>

    </motion.div>
  )

}

