import React from 'react'
import SupportCard from './SupportCard'

export default function AllSupportCards() {

    // let [] 

  return (
    
    <section className='w-full flex flex-col sm:flex-row sm:flex-wrap relative items-center justify-center sm:items-start mx-auto mt-8'>
    <SupportCard amount={50} title='Run With Purpose' percent={5} />
    <SupportCard amount={100} title='Chase The Horizon' percent={10} />
    <SupportCard amount={200} title='Reach New Heights' percent={20} />
  </section>


  )
}
