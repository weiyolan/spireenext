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
  const { content, supportAmount, setSupportAmount } = useAppContext().cart;
  let [change, setChange] = useState(false)

  if (item?.id === 'support') {
    return (<motion.div variants={childVariants} className={`w-full flex text-white text-base min-[480px]:text-sm ${title ? ' font-normal pb-1 border-b-[1px] border-white' : ' font-light'} font-sans `}>
      <div className=' flex justify-center text-center items-center w-3/12'>
        {<>
          {/* remove support */}
          <Add product={item} />
        </>
        }
      </div>

      <div className={`flex ml-4 text-left w-7/12 items-center whitespace-pre-wrap ${!title ? content[item?.id] === 0 ? 'opacity-30' : 'opacity-100' : ''}`}>
        {item.name}
      </div>
      <div className={`flex w-2/12 justify-end ${!title ? content[item?.id] === 0 ? 'opacity-30' : 'opacity-100' : ''}`}>
        <form className='flex w-full items-end'>
          <label>€</label>
          <input name='supportAmount' min={0} id='supportAmount' type='number' value={supportAmount} className={`transition-all w-8 inline-flex text-inherit bg-transparent text-center border-b
         border-b-white/50 animate-borderPulse focus:outline-none outline-none target:outline-none appearance-none hover:border-white/50 hover:invalid:border-red-400 invalid:text-red-400 invalid:border-red-400 invalid:border-b-2 `}
            onChange={(e) => { setSupportAmount(e.target.value) }} />

        </form>
        {change && <Add product={item} support />}

      </div>

    </motion.div>)
  }


  return (
    <motion.div variants={childVariants} className={`w-full flex text-white text-base min-[480px]:text-sm ${title ? ' font-normal pb-1 border-b-[1px] border-white' : ' font-light'} font-sans `}>
      <div className=' flex justify-center text-center items-center w-3/12'>
        {title ? <p>#</p> :
          <>
            <Add product={item} />
            <p className='mx-auto'>
              {item.qty}
            </p>
            <Add product={item} plus />
          </>}
      </div>

      <div className={`flex ml-4 text-left w-7/12 items-center whitespace-pre-wrap ${!title ? content[item?.id] === 0 ? 'opacity-30' : 'opacity-100' : ''}`}>
        {title ? 'Item' : item.name}
        {/* {item.title +'\n' +item.size } */}
      </div>
      {/* <div className='flex text-left w-3/5'>
            { }
        </div> */}

      <div className={`flex w-2/12 justify-end ${!title ? content[item?.id] === 0 ? 'opacity-30' : 'opacity-100' : ''}`}>
        {title ? 'Price' : '€' + (item.qty * item.price)}
      </div>

    </motion.div>
  )

}

