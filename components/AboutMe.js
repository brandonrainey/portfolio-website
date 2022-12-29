import React, { useRef, useEffect } from 'react'

export default function AboutMe(props) {
  const aboutMeDiv = useRef()

  useEffect(() => {
    if (props.aboutMeScroll === true) {
      aboutMeDiv.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      })
      props.setAboutMeScroll(false)
    }
  }, [props.aboutMeScroll])
  return (
    <div
      ref={aboutMeDiv}
      className={`flex justify-center mt-40 flex-col text-center bg-gradient-to-t from-[#13385c]/50 to-[#1e5387]/50  md:w-3/4 py-8 self-center rounded-lg drop-shadow-lg ${
        props.lightMode ? 'bg-[#052033] text-white' : ''
      }`}
    >
      <h1 className="font-bold text-5xl tracking-wide">About Me</h1>
      <div className="flex justify-center mt-6">
        <p className="sm:w-1/2 w-3/4 tracking-wide">
          I am a 28 year old Frontend Developer currently based out of Goose
          Creek, South Carolina. I first started coding in high school classes
          using Java and C++. Ive always been interested in technology while
          trying to figure out how things work, and web development allows me to
          create those very things. I just recently started my self taught
          developer journey over 1 year ago, focusing on HTML, CSS, and
          Javascript.
          <br />
          <br />I love creating websites and web apps with Javascript/React, and
          enjoying solving interesting problems while learning new things at the
          same time. My interests include following the newest tech, listening
          and playing music, pc gaming, and anime. I am actively looking for
          employment as a Frontend Developer, so feel free to contact me if your
          interested in a committed life long learner!
        </p>
      </div>
    </div>
  )
}
