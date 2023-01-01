import React, { useRef, useEffect } from 'react'
import Form from './Form'

export default function Contact(props) {
  const contactDiv = useRef()

  const emailText = useRef()

  useEffect(() => {
    if (props.contactScroll === true) {
      contactDiv.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      })
      props.setContactScroll(false)
    }
  }, [props.contactScroll])

  console.log(emailText.current)
  return (
    <div
      ref={contactDiv}
      className={`flex justify-center mt-40 flex-col text-center mb-4 bg-gradient-to-t to-[#13385c]/50 from-[#13385c]/50 w-full md:w-3/4 self-center rounded-lg py-8 drop-shadow-lg ${props.lightMode ? 'bg-[#052033] text-white' : ''}`}
    >
      <header className="font-bold text-5xl tracking-wide">Contact</header>
      <p
        className="font-bold underline mt-6 tracking-wide cursor-copy"
        ref={emailText}
        value="brandonhrainey@gmail.com"
        onClick={() => {
          navigator.clipboard.writeText('brandonhrainey@gmail.com')
        }}
      >
        brandonhrainey@gmail.com
      </p>
      <Form lightMode={props.lightMode} />
      <div className="flex justify-center mt-4 gap-x-6">
        <a href="https://github.com/brandonrainey">
          <img
            src={`${
              props.lightMode ? '/githubIcon.png' : '/githubIconWhite.png'
            }`}
            className="h-10 w-10"
            alt="github icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/brandon-rainey/">
          <img
            src={`${
              props.lightMode ? '/linkedinIconBlack.png' : '/linkedinIcon.png'
            }`}
            className="h-10 w-10 rounded-full"
            alt="linkedin icon"
          />
        </a>
      </div>
    </div>
  )
}
