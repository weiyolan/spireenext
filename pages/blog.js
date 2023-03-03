import React, { useEffect, useState, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Background from '@/components/sections/Background'
import { PageWrapper } from '@/components/context/pageContext'
import { useAppContext } from '@/components/context/appContext'
import { client } from '@lib/sanity'
// import { useDimensions } from '@/utils/useDimensions'

import Title from '@/components/sections/Title'
import Layout from '@/components/sections/Layout'
import Footer from '@/components/sections/Footer'
import Overlay from '../public/images/blogBackgroundOverlay.svg'

import Navbar from '@/components/navbar/Navbar'
import ShoppingCart from '@/components/cart/ShoppingCart'
import FadeDiv from '@/components/scroll/FadeDiv'
import Arrow from '@/components/atoms/Arrow'
import BlogPost from '@/components/sections/BlogPost'

export default function Blogpage({ posts }) {

  const { locale, scrolled, width, height, handleLightboxes } = useAppContext();
  // let mobile = width < 768
  let [titleHeight, setTitleHeight] = useState(undefined)
  let [footerHeight, setFooterHeight] = useState(undefined)
  let [positions, setPositions] = useState(undefined)
  // let [blogHeight,setBlogHeight]
  let [visibility, setVisibility] = useState(() => { let newArray = new Array(posts.length).fill(false); newArray[posts.length - 1] = true; return newArray })
  // let [clicked, setClicked] = useState(false)
  const [touchStart, setTouchStart] = useState(undefined);
  const [touchEnd, setTouchEnd] = useState(undefined);
  const [touchElement, setTouchElement] = useState(undefined);
  
  let [touching,setTouching] = useState(false)
  let [disableScroll, setDisableScroll] = useState(false);
    // // const startElementRef = useRef(null);
  
    // useEffect(() => {
    //   function handleTouchStart(e) {
    //     const isStartElement = e.target.closest('#startElement');
    //     setDisableScroll(isStartElement);
    //   }
  
    //   function handleTouchEnd() {
    //     setDisableScroll(false);
    //   }
  
    //   document.addEventListener('touchstart', handleTouchStart, { passive: true });
    //   document.addEventListener('touchend', handleTouchEnd);
  
    //   return () => {
    //     document.removeEventListener('touchstart', handleTouchStart);
    //     document.removeEventListener('touchend', handleTouchEnd);
    //   };
    // }, []);
  


  function handleTouchStart(e) {
    let parents = document.getElementsByName('blogPost');
    let isChild = Array.from(parents, (parent)=>parent.contains(e.target)).find((el)=>el===true)

    if (isChild) {
    setDisableScroll(true);
    } 
      setTouchStart(e.targetTouches[0].clientY);
      setTouchElement(e.target)
    
 // console.log(e.target.parents('div#blogPost'))
  }

  function handleTouchMove(e) {
    // console.log(e.targetTouches[0].clientY)
    setTouchEnd(e.targetTouches[0].clientY);
  }

  function handleTouchEnd() {
    // let parents = document.getElementsByName('blogPost');
    // let isChild = Array.from(parents, (parent)=>parent.contains(touchElement)).find((el)=>el===true)
    // let isChild = parent.contains(touchElement);

    // console.log(parents, testArray)
    // console.log(testArray.find((el)=>el==true)==true)
    // console.log(parent, touchElement, testArray)
    // console.log(disableScroll)
    // console.log(touchStart, touchEnd)

    if (disableScroll && touchEnd>0 && (touchStart - touchEnd > 40)) {
      // do your stuff here for left swipe
      // console.log('activating next!')  
      nextPost();
    }

    if (disableScroll && touchEnd>0 && (touchStart - touchEnd < -40)) {
      // do your stuff here for right swipe
      // console.log('activating next!')  
      prevPost();
    }
    setTouchEnd(undefined);
    setTouchStart(undefined);
    setDisableScroll(false);
  }

  // useEffect(() => {
  //   if (disableScroll) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = '';
  //   }
  // }, [disableScroll]);

  useEffect(() => {
    // console.log(disableScroll)
    if (disableScroll) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [disableScroll]);

  function handleVisibility(i) {
    let newVisibility = new Array(posts.length).fill(false);
    newVisibility[i] = true;
    console.log(newVisibility)

    setVisibility(newVisibility)
  }

  function nextPost() {
    let currentPost = visibility.indexOf(true);
    if (currentPost === visibility.length - 1) {
      // do nothing
      // console.log('at end')
    } else {
      let nextPost = currentPost + 1;
      handleVisibility(nextPost)
    }
  }

  function prevPost() {
    let currentPost = visibility.indexOf(true);
    if (currentPost === 0) {
      // do nothing
      // console.log('at start')
    } else {
      let prevPost = currentPost - 1;
      handleVisibility(prevPost)
    }
  }

  useEffect(()=>{
    // let {left}console
    console.log(positions)
  },[positions])

  let pageMobile = width<648;

  return (

    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content=" " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} tabIndex={0} onKeyDown={(e) => { if (e.code === 'ArrowDown') { nextPost() } else if (e.code === 'ArrowUp') { prevPost() } }} className={`w-full min-h-screen`} onClick={handleLightboxes}>
        <PageWrapper
          darkMode={false}
          normalColor={'#000'}
          pageMobile={pageMobile}
        // mobile={mobile}
        >
          <Background className='object-cover object-bottom-left sm:object-left-bottom' src='/images/blogBackground.jpg' />
          <Overlay className='fixed min-h-screen min-w-full opacity-90 left-1/2 top-0 -translate-x-1/2' />
          <Title setHeight={setTitleHeight} mainTitle='The Finish Line' subTitle='Read along and get updated on when you will receive your celestial shirt' />

          <FadeDiv amount={20} style={{  }} className='relative font-quick border border-white flex w-full mt-4 h-[70vh] min-h-[50vh] left-1/2 -translate-x-1/2 '>
            <div style={{ left: positions?.linePosition }} className='absolute top-1/2 -translate-x-1/2 -translate-y-1/2  flex h-[90vh] mr-10'>
              <div id='line' className='h-full border-l-2 border-l-black' />
            </div>

            <div className='flex flex-col w-full'>
              {/* {console.log(posts.length)} */}
              {posts.map((post, i) => <BlogPost setPositions={i === 0 ? setPositions : undefined} visibility={visibility} style={{}} myKey={i} key={i} post={post} />)}
            </div>

            <div style={{ left: positions?.buttonPosition }} className='absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex mr-10'>
            {!pageMobile && <div className='flex-col my-auto '>
              <Arrow disable={visibility[0]} handleClick={prevPost} up className={`w-6 my-4 transition-all  ${visibility[0] ? 'opacity-50' : 'opacity-100 cursor-pointer'}`} />
              <Arrow disable={visibility[visibility.length-1]} handleClick={nextPost} className={`w-6 my-4 transition-all  ${visibility[visibility.length - 1] ? 'opacity-50' : 'opacity-100 cursor-pointer'}`} />
            </div>}
          </div>

          </FadeDiv>


         



          {/* <Title text={'Merino'}/> */}


          <Navbar from='blog' />
          <Footer setFooterNormalHeight={setFooterHeight}  className='' noMotion />
          <ShoppingCart />
        </PageWrapper>

      </main>
    </>



  )
}

export async function getStaticProps() {
  const posts = await client.fetch(`*[_type == "post"]`);
  // const products = await client.fetch(`*[_type == "product"]`);

  return {
    props: {
      posts
    }
  };
}
