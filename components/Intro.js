import React from 'react'

export default function Intro(props) {
  return (
    <div
      className={`flex flex-col justify-center items-center text-center mt-14 md:mt-20 rounded-lg py-8 w-11/12 md:w-3/4 self-center drop-shadow-lg bg-gradient-to-t from-[#37457370] `}
    >
      <h1 className="font-bold text-4xl sm:tracking-wide pb-6">
        Hi, I&apos;m Brandon
      </h1>

      <img
        src="/pfp.webp"
        className=" self-center mt-8 rounded-full h-52 sm:h-72 w-52 sm:w-72 border-8 border-[#052033]"
        alt="profile picture"
      />

      <div className="flex justify-center mt-4">
        <p className="md:text-4xl text-2xl md:w-3/4 text-center font-bold  tracking-wide ">
          As a driven Frontend Developer, I specialize in crafting visually
          stunning, user-centric websites that captivate and engage. Let's
          collaborate to create exceptional experiences that make a lasting
          impact.
        </p>
      </div>
    </div>
  )
}
