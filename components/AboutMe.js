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
      className="flex justify-center mt-40 flex-col text-center"
    >
      <h1 className="font-bold text-5xl tracking-wide">About Me</h1>
      <div className="flex justify-center mt-6">
        <p className="w-1/2 aboutMeText tracking-wide">
          I am a 28 year old aspiring developer currently based out of Ladson,
          South Carolina. I started my self taught developer journey about 9
          months ago, focusing on the frontend. My intrests include Tech, Music,
          Video Games, and Anime. I try to reflect them in my personal projects.
          I am also interested in the future of the web, including
          cryptocurrencies and NFTs. I enjoy creating websites and apps with
          Javascript, but am always open to expanding my programming knowledge
          into other software engineering areas.
        </p>
      </div>
    </div>
  )
}
