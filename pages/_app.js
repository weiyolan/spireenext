import '@/styles/globals.css'
import Head from 'next/head'
import React, {useState, useEffect} from 'react'
import {Work_Sans, Quicksand} from '@next/font/google'
import {AppWrapper} from '@components/context/appContext';
import ScrollVisual from '@/components/scroll/ScrollVisual';
// import { useScrollPercentage } from 'react-scroll-percentage';

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-worksans',
  display:'swap',
  // weight:[100,200,300,400,500,600,700,800,900]
})

const quickSand = Quicksand({
  subsets: ['latin'],
  variable:'--font-quicksand',
  display:'swap',
  weight:['300','400','500','600','700'],
})

export default function App({ Component, pageProps }) {
  let [scrolled, setScrolled] = useState(0)
  // let scrolled=0;
    // let [ref, percentage] = useScrollPercentage();

  useEffect(()=>{
   console.log(scrolled) 
  //  console.log(percentage) 
  })

  function handleScroll () {
    let ratio = (document.documentElement.scrollTop + document.body.scrollTop)/(document.documentElement.scrollHeight - document.documentElement.clientHeight)
    setScrolled(ratio)
    // scrolled = ratio
  }
  useEffect(()=>{
    
    let ratio = (document.documentElement.scrollTop + document.body.scrollTop)/(document.documentElement.scrollHeight - document.documentElement.clientHeight)
    setScrolled(ratio)
    // scrolled = ratio;
    
    window.addEventListener('scroll', handleScroll, {passive:true})

    return () => {window.removeEventListener('scroll', handleScroll)}
  },[])

  return (
  <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />

      </Head>

      <AppWrapper scrolled={scrolled.toPrecision(2)}>
        <div className={`${workSans.variable} ${quickSand.variable} font-sans relative scroll-smooth w-full overflow-hidden `}>
          
          <Component {...pageProps} />

        </div>
      </AppWrapper>

    </>
    )
}
