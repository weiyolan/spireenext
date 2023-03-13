import React from 'react'
import { useAppContext } from '../context/appContext'
import Button from './Button'

export default function AddSize() {

  const { cart:{addOne}, width } = useAppContext()




  return (
    <form className='flex mx-auto mobm:mx-0 '>
      <div className='flex relative overflow-hidden rounded-full mr-4 sm:mr-8'>
        {/* <label required htmlFor='size' className='text-base cursor-pointer'>
        Size:
      </label> */}

        {/* <span className='text-base ml-2 xs:ml-6 font-medium invalid:text-red-400'>€</span> */}
        <select name='size' min={0} id='supportAmount'
          className={`transition-all text-xs font-light pl-1 py-0 mobm:px-2 sm:text-base bg-black/30 backdrop-blur text-center
          focus:outline-none outline-none target:outline-none hover:border-white/50 hover:invalid:border-red-400 invalid:text-red-400 invalid:border-red-400 invalid:border-b-2 `}
          onChange={(e) => { }} required>

          <option value='select your size'>select your size</option>
          <option value='xs'>xs</option>
          <option value='s'>s</option>
          <option value='m'>m</option>
          <option value='l'>l</option>


        </select>
      </div>

      <Button className='z-[2]' small={width<400} med={width>400 && width<1200} text='Add to cart' />
    </form>
  )
}
