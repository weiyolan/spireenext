import React from 'react'
import { motion } from 'framer-motion'
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

const containerVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100, staggerChildren: 0.1, delayChildren: 0.05 }
    }
  },
  closed: {
    y: 20,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, staggerChildren: 0.05, staggerDirection: -1, when: "afterChildren" }
    }
  }
};

export default function CartTotal() {

  const { content, totalPrice, shipping } = useAppContext().cart



  return (
  <motion.div className='flex flex-col mb-5 p-4 gap-2 bg-black/30 rounded-2xl text-white  font-light text-base min-[480px]:text-sm font-sans' style={{ bottom: 0 + 'px' }} variants={containerVariants}>
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
        <p>€{(totalPrice - totalPrice / 1.2).toPrecision(2)}</p>
      </div>
    </motion.div>
    <motion.div variants={childVariants} className={`w-full flex pb-2  border-b-[1px] border-b-white  `}>
      <div className=' flex justify-left items-center w-1/2'>
        <p>Shipping</p>
      </div>
      <div className='flex justify-end items-center w-1/2'>
        {shipping ? <p>€{shipping}</p> : <p>free</p>}
      </div>
    </motion.div>

    <motion.div variants={childVariants} className={`w-full flex font-medium text-lg min-[480px]:text-base `}>
      <div className='flex justify-end w-2/3 items-center'>
        <p className=''>Total:</p>
      </div>
      <div className='flex justify-end w-1/3 items-center'>
        <p className=''>€{totalPrice}</p>
      </div>
    </motion.div>

  </motion.div>

  )

}

