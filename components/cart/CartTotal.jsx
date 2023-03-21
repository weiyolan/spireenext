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

  const { content, totalPrice, shipping, oldSupportAmount } = useAppContext().cart


  return (
    <motion.div className='flex flex-col mb-5 p-4 gap-2 bg-black/30 rounded-2xl select-none cursor-default text-primary  font-light text-base min-[480px]:text-sm font-sans' style={{ bottom: 0 + 'px' }} variants={containerVariants}>
      <motion.div variants={childVariants} className={`w-full flex `}>
        <motion.div whileHover={{scale:1.05}} className=' flex justify-left items-center w-1/2'>
          <p>Subtotal</p>
        </motion.div>
        <motion.div whileHover={{scale:1.05}} className='flex justify-end items-center w-1/2'>
          <p>€{totalPrice + (oldSupportAmount || 0)}</p>
        </motion.div>
      </motion.div>
      <motion.div variants={childVariants} className={`w-full flex `}>
        <motion.div whileHover={{scale:1.05}} className=' flex justify-left items-center w-1/2'>
          <p>incl. TVA</p>
        </motion.div>

        <motion.div whileHover={{scale:1.05}} className='flex justify-end items-center w-1/2'>
          <p>€{(totalPrice - totalPrice / 1.2).toFixed(2)}</p>
        </motion.div>
      </motion.div>
      <motion.div variants={childVariants} className={`w-full flex pb-2  border-b-[1px] border-b-white  `}>
        <motion.div whileHover={{scale:1.05}} className=' flex justify-left items-center w-1/2'>
          <p>Shipping</p>
        </motion.div>
        <motion.div whileHover={{scale:1.05}}className='flex justify-end items-center w-1/2'>
          {shipping ? <p>€{shipping}</p> : <p>free</p>}
        </motion.div>
      </motion.div>

      <motion.div variants={childVariants} className={`w-full flex font-medium text-lg min-[480px]:text-base `}>
        <motion.div whileHover={{scale:1.05}} className='flex justify-end w-2/3 items-center'>
          <p className=''>Total:</p>
        </motion.div>
        <motion.div whileHover={{scale:1.05}} className='flex justify-end w-1/3 items-center'>
          <p className=''>€{totalPrice + (oldSupportAmount || 0)}</p>
        </motion.div>
      </motion.div>

    </motion.div>

  )

}

