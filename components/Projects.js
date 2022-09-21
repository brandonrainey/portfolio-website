import React, { useEffect, useRef, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import Image from 'next/image'
import { Transition } from '@headlessui/react'
import { useInView } from 'react-intersection-observer'

export default function Work({ workScroll, setWorkScroll, lightMode }) {
  const workDiv = useRef()

  const testRef = useRef()

  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: '20% 0px 20% 0px',
  })

  const [ref2, inView2] = useInView({
    /* Optional options */
    threshold: 0,
  })

  const [ref3, inView3] = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: '20% 0px 20% 0px',
  })

  const [ref4, inView4] = useInView({
    /* Optional options */
    threshold: 0,
  })

  const [ref5, inView5] = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: '20% 0px 20% 0px',
  })

  const [ref6, inView6] = useInView({
    /* Optional options */
    threshold: 0,
  })

  const projectRefs = [ref, ref2, ref3, ref4, ref5, ref6]

  const projectInView = [inView, inView2, inView3, inView4, inView5, inView6]

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

  const [showDescription, setShowDescription] = useState(false)

  const [projects, setProjects] = useState([
    {
      title: 'Anime DB',
      image: '/animedbss.png',
      github: 'https://github.com/brandonrainey/anime-app',
      live: 'https://mal-anime-db.netlify.app/',
      description: (
        <ul className="transition-all list-disc list-inside gap-2 px-1">
          <li className="mb-1">
            Fetches data from an API to display in a grid of cards.
          </li>
          <li className="mb-1">Paginated results with search functionality</li>
          <li className="mb-1">
            Created using Create-React-App and styled with Tailwind CSS
          </li>
        </ul>
      ),
    },
    {
      title: 'eCommerce Product Page',
      image: '/productpagess.png',
      github: 'https://github.com/brandonrainey/eCommerce-product-page',
      live: 'https://brainey-product-page.netlify.app/',
      description: (
        <ul className="transition-all list-disc list-inside gap-2 px-1">
          <li className="mb-1">
            Displays product image gallery/lightbox, with state to add and track
            items in cart.
          </li>
          <li className="mb-1">
            Ability to create and log in to account using Firebase
            Authentication.
          </li>
          <li className="mb-1">
            Created using Next.js React framework, recreated visually following
            Frontend Mentor design challenge.
          </li>
        </ul>
      ),
    },
    {
      title: 'Twitch Follow Tracker',
      image: '/twitchfollowsSS.png',
      github: 'https://github.com/brandonrainey/twitch-vip-tracker',
      live: 'https://mytwitchfollows.netlify.app/',
      description: (
        <ul className="transition-all list-disc list-inside gap-2 px-1">
          <li className="mb-1">
            Fetches data from the Twitch API to display connected user&apos;s
            followed streams in a grid of cards.
          </li>
          <li className="mb-1">
            Displays the up to the 3 latest VOD&apos;s from a streamer when
            clicking on a card, also allowing search by name.
          </li>
          <li className="mb-1">
            Created using Next.js with Redux Toolkit state management, and
            styled with Tailwind CSS.
          </li>
        </ul>
      ),
    },
    {
      title: 'Reddit Clone',
      image: '/redditCloneSS.png',
      github: 'https://github.com/brandonrainey/reddit-clone',
      live: 'https://brainey-reddit-clone.netlify.app/',
      description: (
        <ul className="transition-all list-disc list-inside gap-2 px-1">
          <li className="mb-1">
            Implements CRUD functionality of posts with comments on specific
            reddits
          </li>
          <li className="mb-1">
            Stores and fetches data using Firebase Firestore as a backend
          </li>
          <li className="mb-1">
            Created using Next.js React framework and styled with Tailwind CSS
          </li>
        </ul>
      ),
    },
    {
      title: 'Tile Memory Game',
      image: '/tilegamess.png',
      github: 'https://github.com/brandonrainey/tile-game',
      live: 'https://tile-memory-game.netlify.app/',
      description: (
        <ul className="transition-all list-disc list-inside gap-2 px-1s">
          <li className="mb-1">
            Displays square grid of tiles where user memorizes a pattern and
            recalls that pattern in a time limit.
          </li>
          <li className="mb-1">
            User can choose several grid sizes, with visual animations and
            progress bar
          </li>
          <li className="mb-1">
            Created using Next.js React framework, styled with Tailwind CSS
          </li>
        </ul>
      ),
    },
    {
      title: 'Easybank Landing Page',
      image: '/eblandingpagess.png',
      github: 'https://github.com/brandonrainey/easybank-landing-page',
      live: 'https://eb-landing-page.netlify.app/',
      description: (
        <ul className="transition-all list-disc list-inside gap-2 px-1s">
          <li className="mb-1">
            Landing page with multiple sections including a header nav, hero
            image, articles and footer.
          </li>
          <li className="mb-1">
            Desgin is from a Frontend Mentor challenge, and was recreated
            visually only.
          </li>
          <li className="mb-1">
            Created using Next.js React framework, styled with vanilla CSS
          </li>
        </ul>
      ),
    },
  ])

  function handleMoveOut() {
    setIsShowing([false, false, false, false, false, false])
  }

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

  useEffect(() => {
    window.addEventListener('scroll', handleMoveOut)

    return () => {
      window.removeEventListener('scroll', handleMoveOut)
    }
  }, [])

  return (
    <div className="flex flex-wrap gap-y-16 gap-x-20 justify-center mt-32 ">
      <div
        className="w-full text-center font-bold text-5xl tracking-wide"
        ref={workDiv}
      >
        Projects
      </div>
      {projects.map((project, index) => (
        <div
          className={`flex flex-col w-1/3 min-w-project group shadow-xl`}
          onMouseEnter={() => handleChange(index)}
          onMouseLeave={() => handleChange(index)}
          ref={projectRefs[index]}
          style={{
            transform: `${
              projectInView[index] ? 'translateX(0)' : 'translateX(-50%)'
            }`,
            transition: `${projectInView[index] ? 'all 1s' : ''}`,
            opacity: `${projectInView[index] ? '1' : '0'}`,
          }}
          key={index}
        >
          <p className="text-center font-semibold text-2xl mb-2">
            {project.title}
          </p>

          <div className="flex flex-col relative  h-full" ref={testRef}>
            <Image
              className="h-full rounded "
              src={project.image}
              alt="project thumbnail"
              layout='responsive'
              width={`100%`}
              height={`60%`}
            />
            <Transition
              show={isShowing[index]}
              enter="transition-all duration-150"
              enterFrom="bg-transparent"
              enterTo="bg-gray-900 bg-opacity-50"
              leave="transition-all duration-150"
              leaveFrom="bg-gray-900 bg-opacity-50"
              leaveTo="bg-transparent"
              className="absolute h-full bg-gray-900  w-full flex flex-col rounded justify-center "
            >
              <Transition
                className="flex gap-12 justify-center items-center w-full mt-auto mb-auto py-1"
                show={isShowing[index]}
              >
                <a href={project.live}>
                  <button
                    className={`bg-blue-900 hover:bg-indigo-500 hover:underline text-xl h-12 w-24 rounded tracking-wide font-semibold shadow-xl ${
                      lightMode ? 'text-white' : ''
                    }`}
                  >
                    Live
                  </button>
                </a>

                <a href={project.github}>
                  <button
                    className={`bg-blue-900 hover:bg-indigo-500 hover:underline text-xl h-12 w-24 rounded tracking-wide font-semibold shadow-xl ${
                      lightMode ? 'text-white' : ''
                    }`}
                  >
                    Github
                  </button>
                </a>
              </Transition>
              <Transition
                className={`${
                  showDescription ? 'h-full' : 'h-6'
                } bg-sky-900	 transition-all duration-300 rounded text-white text-center font-bold overflow-hidden flex justify-center items-center flex-col shadow-xl text-xs lg:text-base`}
                show={isShowing[index]}
                leave="transition-all"
                leaveFrom="h-0 w-0"
                leaveTo="h-0 w-0"
                onMouseEnter={() => setShowDescription(true)}
                onMouseLeave={() => setShowDescription(false)}
              >
                {showDescription ? '' : 'Description'}
                {showDescription ? project.description : ''}
              </Transition>
            </Transition>
          </div>
        </div>
      ))}
    </div>
  )
}
