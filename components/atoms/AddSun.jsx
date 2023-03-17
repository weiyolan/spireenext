import React, { useState } from 'react'
import { useAppContext } from '../context/appContext'
import Button from './Button'
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
export default function AddSun({ className, sun }) {
  let [size, setSize] = useState('select your size');
  const { cart: { addOne }, width } = useAppContext()

  function handleClick() {
    if (size === 'select your size') {
      toast.error(`${'Please select your size first.'}`, {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#FFFAEA',
        },
      })

    } else {
      addOne({ id: sun ? 'sun' : 'moon', size: size, price: 99, name: `${sun ? 'Sun' : 'Moon'} Merino Base Layer` })
    }
  }
  // {id:'sun', price:99, name: 'Sun Merino Base Layer'}
  // {id:'moon',price:99,name: 'Moon Merino Base Layer'}

  return (
    <motion.form layout transition={{duration:0.5}} className='flex mx-auto mobm:mx-0 '>
      <div className='flex relative overflow-hidden rounded-full mr-4 sm:mr-8'>
        {/* <label required htmlFor='size' className='text-base cursor-pointer'>
        Size:
      </label> */}

        {/* <span className='text-base ml-2 xs:ml-6 font-medium invalid:text-red-400'>€</span> */}
        <select name='size' min={0} id='supportAmount'
          className={`transition-all text-xs font-light pl-1 py-0 mobm:px-2 sm:text-base bg-black/30 backdrop-blur text-center
          cursor-pointer focus:outline-none outline-none target:outline-none hover:border-primary/50 hover:invalid:border-red-400 invalid:text-red-400 invalid:border-red-400 invalid:border-b-2 `}
          onChange={(e) => { setSize(e.target.value) }} required>

          <option value='select your size'>select your size</option>
          <option value='xs'>xs</option>
          <option value='s'>s</option>
          <option value='m'>m</option>
          <option value='l'>l</option>

        </select>
      </div>

      <Button disable={size === 'select your size'} handleClick={handleClick} className='z-[2]' small={width < 400} med={width > 400 && width < 1200} text='Add to cart' />
    </motion.form>
  )
}

