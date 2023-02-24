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
    

  return (<>
    <motion.div variants={childVariants} className={`w-full flex text-white  font-light text-sm font-sans `}>
      <div className=' flex justify-left items-center w-1/2'>
        <p>Subtotal</p>
      </div>
      <div className='flex justify-end items-center w-1/2'>
        <p>€{totalPrice}</p>
      </div>
    </motion.div>
    <motion.div variants={childVariants} className={`w-full flex text-white  font-light text-sm font-sans `}>
      <div className=' flex justify-left items-center w-1/2'>
        <p>incl. TVA</p>
      </div>

      <div className='flex justify-end items-center w-1/2'>
        <p>€{tva}</p>
      </div>
    </motion.div>
    <motion.div variants={childVariants} className={`w-full flex pb-2 text-white border-b-[1px] border-b-white font-light text-sm font-sans `}>
      <div className=' flex justify-left items-center w-1/2'>
        <p>Shipping</p>
      </div>
      <div className='flex justify-end items-center w-1/2'>
        {shipping===0?<p>free</p>:<p>€{shipping}</p>}
      </div>
    </motion.div>

    <motion.div variants={childVariants} className={`w-full flex pb-2 text-white  font-light text-sm font-sans `}>
      <div className='flex justify-end w-2/3 items-center'>
        <p className='font-medium text-base'>Total:</p>
      </div>
      <div className='flex justify-end w-1/3 items-center'>
        <p className='font-medium text-base'>€{totalPrice}</p>
      </div>
    </motion.div>


    </>
  )

}

