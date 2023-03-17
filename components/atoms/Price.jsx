import React from 'react'
import { motion } from 'framer-motion'
export default function Price() {
  return (
    <motion.div layout transition={{duration:0.5}} className='font-quick text-inherit mt-2 mb-4 sm:my-4 font-light'>
        <p className='text-3xl'>€99,-</p>
        <p className='text-xs'>Incl. VAT & Shipping in EU</p>
    </motion.div>
  )
}
