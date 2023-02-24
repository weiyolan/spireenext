import React from 'react'
import { motion } from 'framer-motion'
// import Minus from './Minus'
import Add from './Add'

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


  return (
    <motion.div variants={childVariants} className={`w-full flex text-white ${title ? 'text-sm font-normal pb-1 border-b-[1px] border-white' : ' font-light text-sm'} font-sans `}>
      <div className=' flex justify-center text-center items-start w-3/12'>
        {title ? <p>#</p> :
          <>
            <Add/>
            <p className='mx-auto'>
              {item.qty}
            </p>
            <Add plus/>
          </>}
      </div>

      <div className='flex ml-4 text-left w-7/12 items-center whitespace-pre-wrap'>
        {title ? 'Item' : item.name}
        {/* {item.title +'\n' +item.size } */}
      </div>
      {/* <div className='flex text-left w-3/5'>
            { }
        </div> */}

      <div className='flex w-2/12 justify-end'>
        {title ? 'Price' : '€' + (item.qty * item.price)}
      </div>

    </motion.div>
  )

}

