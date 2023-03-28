import React from 'react'
import Image from 'next/image'

const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)

const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

export default function Intro(props) {
  return (
    <div
      className={`flex flex-col justify-center items-center text-center mt-14 md:mt-20 rounded-lg py-8 w-11/12 md:w-3/4 self-center drop-shadow-lg bg-gradient-to-t from-[#37457370] ${
        props.lightMode ? 'bg-[#052033] text-white rounded-lg' : ''
      }`}
    >
      <h1 className="font-bold text-4xl sm:tracking-wide pb-6">
        Hi, I&apos;m Brandon
      </h1>
      
      <img
          src="/pfp.png"
          className=" self-center mt-8 rounded-full h-52 sm:h-72 w-52 sm:w-72 border-8 border-[#052033]"
          alt="profile picture"
          
        />
      
      
      <div className="flex justify-center mt-4">
        <p className="md:text-4xl text-2xl md:w-3/4 text-center font-bold  tracking-wide ">
          I am a Frontend Developer who enjoys solving interesting problems and
          building websites people love to use.
        </p>
      </div>
    </div>
  )
}
