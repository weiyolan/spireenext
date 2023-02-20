import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'
import {useEffect, useState} from 'react'
import YW from '../public/images/logo_yw_b.svg'
import ChooseLanguage from './ChooseLanguage'
import {useRouter} from 'next/router'

// let borderDebug = 'border border-red-500';

export default function NavDesk({from}) {
    let [selectedB,setSelectedB] = useState(from);
    const router = useRouter()
    const { locale } = router    
    // let [show, setShow] = useState({transform:'translateY(0)'})
    // let [lastTop, setLastTop] = useState(0)

    function selectButton (selection) {
        setSelectedB(selection)
    }

    useEffect(()=>{
      setSelectedB(from)
    },[from])

  

    // function handleScroll () {
    //   if(window.scrollY > lastTop){ //if it will be greater than the previous
    //     setShow(false);//set the value to the negetive of height of navbar 
    //   }
    //   else{
    //     setShow(true);
    //   }
    //   setLastTop(window.scrollY); //New Position Stored
    // }

  
    // useEffect(()=>{
    //   window.addEventListener('scroll', handleScroll, ) //{passive:true}
    //   return () => {window.removeEventListener('scroll', handleScroll)}
    // },[lastTop])

    // useEffect(()=>{
    //   console.log(lastTop)
    // },[lastTop])


    return (
        <nav className={`flex fixed justify-center w-full h-16 rounded-b-3xl top-0 z-10 bg-white/5 backdrop-blur-sm`}>
            
            <div className='inline-flex absolute items-center h-16 left-0'>
              <Link  href={`/`} title='Go to the homepage' onClick={()=>selectButton('Home')}>
              {/* <YW
                width='40'
                className='m-2'
                alt="ywdesign svg-logo"
                onClick={()=>selectButton('Home')}/> */}
              <YW className='m-2 w-10 h-10' alt="ywdesign logo" />
              </Link> 
            </div>

            <div className='flex mx-auto'>
              <Button className='' to="" title="Home" text={home[locale].text} mode={selectedB==='Home'?'selected':'unselected'} handleClick={selectButton}/>
              <Button className='' to="services" title="Services" text={services[locale].text} mode={selectedB==='Services'?'selected':'unselected'} handleClick={selectButton}/>
              <Button className='' to="aboutme" title="About Me" text={aboutme[locale].text} mode={selectedB==='About Me'?'selected':'unselected'} handleClick={selectButton}/>
              <Button className='' to="roadmap" title="Roadmap"  text={roadmap[locale].text} mode={selectedB==='Roadmap'?'selected':'unselected'} handleClick={selectButton}/>
              <Button className='' to="contact" title="Contact"  text={contact[locale].text} mode={selectedB==='Contact'?'selected':'unselected'} handleClick={selectButton}/>
            </div>
            
            <div className='flex absolute  h-16 right-0 '>
              {/* <Button className=''  to="contact/#Form" title="Contact" text="Have a question?" handleClick={selectButton} /> */}
              {/* <Button className='' to="" title="EN"/> */}
              <ChooseLanguage toggleOpen={()=>{}}/>
              <Button className='' to="contact/#Form" title="Contact" text={quote[locale].text} handleClick={selectButton} mode={'dark'}/>

            </div>
        </nav>
    )
}

let home = {en: {text: 'Home'}, fr: {text: 'Accueil'}}
let services = {en: {text: 'Services'}, fr: {text: 'Services'}}
let aboutme = {en: {text: 'About Me'}, fr: {text: 'A Propos'}}
let roadmap = {en: {text: 'Workflow'}, fr: {text: 'Votre Chemin'}}
let contact = {en: {text: 'Contact'}, fr: {text: 'Contact'}}
let quote = {en: {text: 'Ask a Quote'}, fr: {text: 'Demander un Devis'}}