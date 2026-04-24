import '@/styles/globals.css'
import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import {Work_Sans, Quicksand} from '@next/font/google'
import {AppWrapper} from '@components/context/appContext';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';
const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-worksans',
  display:'swap',
})

const quickSand = Quicksand({
  subsets: ['latin'],
  variable:'--font-quicksand',
  display:'swap',
  weight:['300','400','500','600','700'],
})

export default function App({ Component, pageProps }) {
  let [scrolled, setScrolled] = useState(0)
  let router = useRouter();

  useEffect(()=>{
    let pending = false;
    function handleScroll () {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        const denom = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const ratio = denom > 0 ? (document.documentElement.scrollTop + document.body.scrollTop) / denom : 0;
        setScrolled(ratio);
        pending = false;
      });
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, {passive:true})
    return () => {window.removeEventListener('scroll', handleScroll)}
  },[])

  return (
  <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
      </Head>
      <AppWrapper scrolled={scrolled}>
        <div
          key={router.route}
          className={`${workSans.variable} ${quickSand.variable} font-sans relative scroll-smooth w-full h-[100dh] overflow-hidden animate-pageFade`}>
          <Component {...pageProps} />
          <Toaster/>
        </div>
      </AppWrapper>
    </>
    )
}
