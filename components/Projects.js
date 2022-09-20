import React, { useEffect, useRef, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import Image from 'next/image'
import { Transition } from '@headlessui/react'
import { useInView } from 'react-intersection-observer'

export default function Work({ workScroll, setWorkScroll, lightMode }) {
  const workDiv = useRef()

  const [ref, inView]   = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: '50%'
  })

  const [ref2, inView2]   = useInView({
    /* Optional options */
    threshold: 0,
    
  })

  const [ref3, inView3]   = useInView({
    /* Optional options */
    threshold: 0,
    
  })

  const projectRefs = [ref, ref2, ref3]


  const [isShowing, setIsShowing] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ])

  function handleChange(index) {
    let copy = [...isShowing]
    copy[index] ? (copy[index] = false) : (copy[index] = true)
    setIsShowing(copy)
  }

  const [projects, setProjects] = useState([
    {
      title: 'Anime DB',
      image: '/animedbss.png',
      github: 'https://github.com/brandonrainey/anime-app',
      live: 'https://mal-anime-db.netlify.app/',
      description: '',
    },
    {
      title: 'eCommerce Product Page',
      image: '/e-commercess.png',
      github: 'https://github.com/brandonrainey/eCommerce-product-page',
      live: 'https://brainey-product-page.netlify.app/',
      description: '',
    },
    {
      title: 'Twitch Follow Tracker',
      image: '/twitchfollowsSS.png',
      github: 'https://github.com/brandonrainey/twitch-vip-tracker',
      live: 'https://mytwitchfollows.netlify.app/',
      description: '',
    },
    {
      title: 'Reddit Clone',
      image: '/redditCloneSS.png',
      github: 'https://github.com/brandonrainey/reddit-clone',
      live: 'https://brainey-reddit-clone.netlify.app/',
      description: '',
    },
    {
      title: 'Tile Memory Game',
      image: 'tilegamess.png',
      github: 'https://github.com/brandonrainey/tile-game',
      live: 'https://tile-memory-game.netlify.app/',
      description: '',
    },
    {
      title: 'Easybank Laning Page',
      image: '/eblandingpagess.png',
      github: 'https://github.com/brandonrainey/easybank-landing-page',
      live: 'https://eb-landing-page.netlify.app/',
      description: '',
    },
  ])

  useEffect(() => {
    if (workScroll === true) {
      workDiv.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      })
      setWorkScroll(false)
    }
  }, [workScroll])

  

  return (
    <div className="flex flex-wrap gap-y-16 gap-x-20 justify-center mt-32 ">
      <div className="w-full text-center font-bold text-5xl tracking-wide">
        Projects
      </div>
      {projects.map((project, index) => (
        <div
          className={`flex flex-col w-1/3 min-w-project group `}
          onMouseEnter={() => handleChange(index)}
          onMouseLeave={() => handleChange(index)}
          ref={ref}
          style={{
            transform: `${inView ? 'translateX(0)' : 'translateX(-50%)'}`,
            transition: `${inView ? 'all 1s' : ''}`,
            opacity: `${inView ? '1' : '0'}`,
          }}
        >
          <p className="text-center font-semibold text-2xl mb-2">
            {project.title}
          </p>

          <div className="flex flex-col relative  ">
            <img className="h-full rounded peer " src={project.image} />
            <Transition
              show={isShowing[index]}
              enter="transition-all duration-150"
              enterFrom="bg-transparent"
              enterTo="bg-gray-900 bg-opacity-50"
              leave="transition-all duration-150"
              leaveFrom="bg-gray-900 bg-opacity-50"
              leaveTo="bg-transparent"
              className="absolute h-full bg-gray-900  w-full flex rounded"
            >
              <Transition
                className="flex gap-12 justify-center items-center w-full"
                show={isShowing[index]}
              >
                <button className="bg-blue-600 hover:bg-indigo-500 text-xl h-12 w-24 rounded tracking-wide font-semibold ">
                  Live
                </button>
                <button className="bg-blue-600 hover:bg-indigo-500 text-xl h-12 w-24 rounded tracking-wide font-semibold">
                  Github
                </button>
              </Transition>
            </Transition>
          </div>
        </div>
      ))}
    </div>
  )
}
