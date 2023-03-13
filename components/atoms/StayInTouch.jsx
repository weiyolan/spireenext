import React, { useState } from 'react'
import { useAppContext } from '../context/appContext';
import Button from './Button';
import { toast } from 'react-hot-toast';

export default function StayInTouch() {

  let [success, setSuccess] = useState(false)
  // let [buttonHovering,setButtonHovering] = useState(false)
  const { locale } = useAppContext();
  // let [name,setName] = useState('');
  // let [lastName,setLastName] = useState('');
  let [email, setEmail] = useState('');
  // let [message,setMessage] = useState('');
  let [honey, setHoney] = useState('');

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log( encode({
      "form-name": e.target.getAttribute("name"),
      // 'name': name,
      // 'lastName': lastName,
      'email': email,
      // 'message': message,
      'bot-field': honey
    }))
    // const submitEmail = 
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": e.target.getAttribute("name"),
        // 'name': name,
        // 'lastName': lastName,
        'email': email,
        // 'message': message,
        'bot-field': honey
      }),
    })
      // .then(() => { setLightbox(true); setSuccess(true); setName(''); setLastName(''); setEmail(''); setHoney(''); setMessage('') })
      .then((res) => {console.log('success') ; console.log(res); setEmail(''); setHoney('') })
      .catch((error) => console.log(error));

    // toast.promise(submitEmail, {
    //   loading: 'Loading..',
    //   success: 'Email submitted',
    //   loading: (err) => `There was an error registering your email:\n${err.message.toString()}`
    // },
    // {
    //   style: {
    //     minWidth: '250px',
    //   }})
  };

  return (
    <form className='sm:-translate-x-2 flex text-white flex-wrap justify-center sm:justify-start items-center sm:items-start'
      onSubmit={handleSubmit} name='GetInTouch' method="POST" data-netlify="true"  netlify-honeypot="bot-field">
      {/* initial='hidden' viewport={{ once: true }} whileInView='visible' variants={variant}   */}
      <input type='hidden' name='form-name' value='GetInTouch' />
      <input required type='email' onChange={(e) => { setEmail(e.target.value) }}
        className={`p-1 px-3 mb-2 mx-2 min-w-fit ml-0 text-sm block
          backdrop-blur bg-black/30 font-normal text-white placeholder:text-white/50 
          target:outline-white rounded-full
          autofill:bg-white/10  valid:scale-[0.99]
            outline-none -outline-offset-2 
            border border-transparent invalid:text-pink-600
             focus-visible:outline-black focus-visible:animate-outlinePulse`}
        id='email'
        placeholder="example@spiree.run"
        value={email}>
      </input>

      <p className='hidden'>
        <label>{`${locale === 'en' ? "Don't fill this out if you're human:" : 'Ne pas remplir si vous êtes humain.'}`}</label>
        <input name="bot-field" value={honey} onChange={(e) => setHoney(e.target.value)} />
      </p>

      <button type='submit' text='Submit'
        className={`inline-flex justify-center items-center mb-2 w-fit relative rounded-full bg-black/20 backdrop-blur
    transition-all
    font-sans font-semibold whitespace-nowrap select-none uppercase tracking-max
    cursor-pointer text-xs px-3 py-1.5  
    outline-none focus-visible:outline-white border border-solid border-transparent text-white hover:bg-black/50 active:bg-black/50`}>
        SUBMIT
      </button>




    </form>
  )
}
