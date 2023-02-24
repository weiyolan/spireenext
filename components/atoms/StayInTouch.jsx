import React, { useState } from 'react'
import { useAppContext } from '../context/appContext';
import Button from './Button';

export default function StayInTouch() {

  let [success, setSuccess] = useState(false)
  // let [buttonHovering,setButtonHovering] = useState(false)
  const { locale } = useAppContext();
  // let [name,setName] = useState('');
  // let [lastName,setLastName] = useState('');
  let [email, setEmail] = useState('');
  // let [message,setMessage] = useState('');
  // let [honey,setHoney] = useState('');

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
      .then(() => { setLightbox(true); setSuccess(true); setName(''); setLastName(''); setEmail(''); setHoney(''); setMessage('') })
      .catch((error) => alert(error));
  };

  return (
    <form className='-translate-x-2'
      onSubmit={handleSubmit} name='GetInTouch' method="POST" data-netlify="true">
      {/* initial='hidden' viewport={{ once: true }} whileInView='visible' variants={variant}  netlify-honeypot="bot-field" */}
      <input required type='email' onChange={(e) => {setEmail(e.target.value) }}
        className={`p-2 px-3 mb-2 ml-0 w-full text-sm block
          backdrop-blur bg-black/30 font-light text-white placeholder:text-white/50 
          target:outline-white rounded-full
          autofill:bg-white/10  valid:scale-[0.99]
            outline-none -outline-offset-2 focus:outline-none focus:animate-outlinePulse
            border border-transparent invalid:text-pink-600
            focus:-outline-offset-2 focus:outline-white/20`}
        id='email'
        placeholder="example@spiree.run"
        value={email}>

        </input>

        <button type='submit' text='Submit' 
        className={`inline-flex w-fit relative rounded-full bg-black/30 backdrop-blur
    transition-all
    font-sans font-semibold whitespace-nowrap select-none uppercase tracking-max
    cursor-pointer text-xs px-4 py-2 
    outline-none focus-visible:outline-white border border-solid border-transparent text-white hover:bg-black/50 active:bg-black/50`}>
        SUBMIT
        </button>




    </form>
  )
}
