  import React from 'react'
import { motion } from 'framer-motion'

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

export default function CartItem({total: {totalPrice, tva, shipping}}) {
    

  return (<div className='text-white  font-light text-base min-[480px]:text-sm font-sans'>
    <motion.div variants={childVariants} className={`w-full flex `}>
      <div className=' flex justify-left items-center w-1/2'>
        <p>Subtotal</p>
      </div>
      <div className='flex justify-end items-center w-1/2'>
        <p>€{totalPrice}</p>
      </div>
    </motion.div>
    <motion.div variants={childVariants} className={`w-full flex `}>
      <div className=' flex justify-left items-center w-1/2'>
        <p>incl. TVA</p>
      </div>

      <div className='flex justify-end items-center w-1/2'>
        <p>€{tva}</p>
      </div>
    </motion.div>
    <motion.div variants={childVariants} className={`w-full flex pb-2  border-b-[1px] border-b-white  `}>
      <div className=' flex justify-left items-center w-1/2'>
        <p>Shipping</p>
      </div>
      <div className='flex justify-end items-center w-1/2'>
        {shipping===0?<p>free</p>:<p>€{shipping}</p>}
      </div>
    </motion.div>

    <motion.div variants={childVariants} className={`w-full flex pb-2 font-medium text-lg min-[480px]:text-base `}>
      <div className='flex justify-end w-2/3 items-center'>
        <p className=''>Total:</p>
      </div>
      <div className='flex justify-end w-1/3 items-center'>
        <p className=''>€{totalPrice}</p>
      </div>
    </motion.div>


    </div>
  )

}

