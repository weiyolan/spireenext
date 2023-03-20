import React, { useState } from 'react'
import { useAppContext } from '../context/appContext'
import Button from './Button'
import { toast } from 'react-hot-toast';

export default function AddSunMoon({className}) {
  let [size, setSize] = useState('select your size');
  const { cart:{addOne}, width } = useAppContext()

  function handleClick(sun) {
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



  return (
    <form className='flex gap-2 mobl:gap-4 mx-auto '>
      <div className='flex relative overflow-hidden rounded-full'>
        {/* <label required htmlFor='size' className='text-base cursor-pointer'>
        Size:
      </label> */}

        {/* <span className='text-base ml-2 xs:ml-6 font-medium invalid:text-red-400'>€</span> */}
        <select name='size' min={0} id='supportAmount'
          className={`transition-all text-xs font-light pl-1 py-0 mobm:px-2 sm:text-base bg-black/30 backdrop-blur text-center
          cursor-pointer focus:outline-none outline-none target:outline-none hover:border-primary/50 hover:invalid:border-red-400 invalid:text-red-400 invalid:border-red-400 invalid:border-b-2 `}
          onChange={(e) => { setSize(e.target.value) }} required>

          <option value='select your size'>Your size</option>
          <option value='xs'>xs</option>
          <option value='s'>s</option>
          <option value='m'>m</option>
          <option value='l'>l</option>


        </select>
      </div>

      <Button className='z-[2]' handleClick={()=>handleClick(true)} small={width<400} med text='Add Sun' />
      <Button className='z-[2]' handleClick={()=>handleClick(false)} small={width<400} med text='Add Moon' />
    </form>
  )
}
