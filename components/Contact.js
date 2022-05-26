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
<<<<<<< HEAD
      className="flex justify-center mt-40 flex-col text-center"
=======
      className="flex justify-center mt-40 flex-col text-center mb-4"
>>>>>>> e8135675bb94c960c61990985549edb54ed54819
    >
      <header className="font-bold text-5xl tracking-wide">Contact</header>
      <p
        className="font-bold underline mt-6 tracking-wide email"
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
          />
        </a>
      </div>
    </div>
  )
}
