import React, { useRef, useEffect } from "react";

export default function Contact(props) {
  const contactDiv = useRef();

  const emailText = useRef();

  

  useEffect(() => {
    if (props.contactScroll === true) {
      contactDiv.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      props.setContactScroll(false);
    }
  }, [props.contactScroll]);

  console.log(emailText.current)
  return (
    <div
      ref={contactDiv}
      className="flex justify-center mt-40 flex-col text-center"
    >
      <header className="font-bold text-5xl">Contact</header>
      <p className="font-bold underline mt-6" ref={emailText} value='brandonhrainey@gmail.com' onClick={() => {navigator.clipboard.writeText(emailText.current.value)}}>brandonhrainey@gmail.com</p>
      <div className="flex justify-center mt-4">
        <a href="https://github.com/Genlord">
          <img src="/githubIcon.png" className="h-10 w-10" />
        </a>
      </div>
    </div>
  );
}
