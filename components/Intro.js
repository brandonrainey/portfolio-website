import React from 'react'
import Image from 'next/image'

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

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
      <div className='h-52 sm:h-72 w-52 sm:w-72 border-8 border-[#052033] rounded-full'>
      <Image
          src="/pfp.png"
          className=" self-center mt-8 rounded-full "
          alt="profile picture"
          width={288}
          height={288}
          priority={true}
          placeholder='blur'
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(288, 288))}`}
        />
      </div>
      
      <div className="flex justify-center mt-4">
        <p className="md:text-4xl text-2xl md:w-3/4 text-center font-bold  tracking-wide ">
          I am a Frontend Developer who enjoys solving interesting problems and
          building websites people love to use.
        </p>
      </div>
    </div>
  )
}
