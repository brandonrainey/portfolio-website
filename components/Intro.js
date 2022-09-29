import React from 'react'

export default function Intro() {
  return (
    <div className="flex flex-col justify-center items-center text-center mt-24 md:mt-44">
      <h1 className="font-bold text-4xl tracking-wide">Hi, I&apos;m Brandon</h1>

      <img
        src="/pfp.png"
        className="h-52 sm:h-72 w-52 sm:w-72 self-center mt-8"
        alt="profile picture"
      />

      <div className="flex justify-center mt-4">
        <p className="md:text-6xl text-3xl w-3/4 text-center font-bold  tracking-wide">
          I am a Frontend Developer who enjoys solving interesting problems and
          creating websites people love to use.
        </p>
      </div>
      <p className="mt-4 w-3/4 md:text-base text-sm tracking-wide self-center">
        I am self-taught, currently focusing on the Frontend using primarily
        React, <br />
        but I am always open to learning new frameworks and languages.
      </p>
    </div>
  )
}
