import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

import { useInView } from 'react-intersection-observer'
import { motion, Variants } from 'framer-motion'

export default function Work({ workScroll, setWorkScroll, lightMode }) {
  const workDiv = useRef()

  const testRef = useRef()

  const router = useRouter()

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

  function handleHoverIn(index) {
    let copy = [...projects]
    copy[index].showing = true
    setProjects(copy)
  }

  function handleHoverOut(index) {
    let copy = [...projects]
    copy.map((item) => {
      copy[index].showing = false
    })
    setProjects(copy)
  }

  function handleDescription(index) {
    let copy = [...projects]
    projects[index].showingDescription
      ? (projects[index].showingDescription = false)
      : (projects[index].showingDescription = true)
    setProjects(copy)
  }

  const [projects, setProjects] = useState([
    {
      title: 'Stripe Shop',
      image: '/stripeShopSS.webp',
      github: 'https://github.com/brandonrainey/stripe-shop',
      live: 'https://stripe-shop.netlify.app/',
      page: '/stripe-shop',
      description: (
        <ul className="transition-all list-disc list-inside gap-2 px-1">
          <li className="mb-1">
            Responsive and featured Ecommerce site connected with stripe payment
            processing.
          </li>
          <li className="mb-1">
            Uses google OAuth with firestore backend to store users and thier
            orders utilizing a webhook to capture stripe events.
          </li>
          <li className="mb-1">
            Created using Next.js, Typescript, Redux Toolkit, and Tailwind CSS.
          </li>
        </ul>
      ),
      showing: false,
      showingDescription: false,
    },
    {
      title: 'Anime Database',
      image: '/animedbss.webp',
      github: 'https://github.com/brandonrainey/anime-database',
      live: 'https://anime-calendar.netlify.app',
      page: '/stripe-shop',
      description: (
        <ul className="transition-all list-disc list-inside gap-2 px-1">
          <li className="mb-1">
            Fetches data from an API to display in a grid of cards, with
            paginated results and search functionality
          </li>
          <li className="mb-1">
            Add anime to watchlist calendar using local storage
          </li>
          <li className="mb-1">
            Created using Next.js, Typescript and styled with Tailwind CSS
          </li>
        </ul>
      ),
      showing: false,
      showingDescription: false,
    },

    {
      title: 'Twitch Follow Tracker',
      image: '/twitchfollowsSS.webp',
      github: 'https://github.com/brandonrainey/twitch-vip-tracker',
      live: 'https://mytwitchfollows.netlify.app',
      page: '/stripe-shop',
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
      showing: false,
      showingDescription: false,
    },
    {
      title: 'Reddit Clone',
      image: '/redditCloneSS.webp',
      github: 'https://github.com/brandonrainey/reddit-clone',
      live: 'https://brainey-reddit-clone.netlify.app',
      page: '/stripe-shop',
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
      showing: false,
      showingDescription: false,
    },
    {
      title: 'Tile Memory Game',
      image: '/tilegamess.webp',
      github: 'https://github.com/brandonrainey/tile-game',
      live: 'https://tile-memory-game.netlify.app',
      page: '/stripe-shop',
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
      showing: false,
      showingDescription: false,
    },
    {
      title: 'Easybank Landing Page',
      image: '/eblandingpagess.webp',
      github: 'https://github.com/brandonrainey/easybank-landing-page',
      live: 'https://eb-landing-page.netlify.app',
      page: '/stripe-shop',
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
      showing: false,
      showingDescription: false,
    },
  ])

  function handleMoveOut() {
    let copy = [...projects]
    copy.map((item) => {
      item.showingDescription = false
    })
    setProjects(copy)
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
        className="w-full text-center font-bold text-5xl tracking-wide "
        ref={workDiv}
      >
        <p className="">Projects</p>
      </div>
      {projects.map((project, index) => (
        <motion.div
          className={`flex flex-col sm:w-2/3 md:w-1/3 min-w-project group shadow-xl`}
          onMouseEnter={() => handleHoverIn(index)}
          onMouseLeave={() => handleHoverOut(index)}
          ref={projectRefs[index]}
          style={{
            transform: `${
              projectInView[index] ? 'translateX(0)' : 'translateX(-50%)'
            }`,
            transition: `${projectInView[index] ? 'all 1s' : 'none'}`,
            opacity: `${projectInView[index] ? '1' : '0'}`,
          }}
          key={index}
        >
          <p className="text-center font-semibold text-2xl mb-2">
            {project.title}
          </p>

          <div className="flex flex-col relative  h-full" ref={testRef}>
            <img
              className="h-full rounded w-auto"
              src={project.image}
              alt="project thumbnail"
              layout="responsive"
            />

            <motion.div
              style={{ display: projects[index].showing ? 'flex' : 'none' }}
              className="absolute h-full bg-gray-900/[.6]  w-full flex flex-col rounded justify-center "
              animate={{
                opacity: projects[index].showing ? 1 : 0,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <div className="flex gap-12 justify-center items-center w-full mt-auto mb-auto py-1">
                <a href={project.live}>
                  <button
                    className={`bg-sky-900/50 border-4 hover:bg-indigo-500 text-xl h-12 w-24 rounded-3xl tracking-wide font-semibold shadow-xl ${
                      projects[index].showingDescription ? 'hidden' : ''
                    } ${lightMode ? 'text-white' : ''}`}
                  >
                    Live
                  </button>
                </a>

                <a href={project.github}>
                  <button
                    className={`bg-sky-900/50 border-4 hover:bg-indigo-500 text-xl h-12 w-24 rounded-3xl tracking-wide font-semibold shadow-xl ${
                      projects[index].showingDescription ? 'hidden' : ''
                    } ${lightMode ? 'text-white' : ''}`}
                  >
                    Github
                  </button>
                </a>
              </div>

              {/* <div className='flex w-full justify-center py-4 mb-8'>
                <a href={project.page}>
                  <button
                    className={`bg-sky-900/50 border-4 hover:bg-indigo-500 text-xl h-12 w-40 rounded-3xl tracking-wide font-semibold shadow-xl ${projects[index].showingDescription ? 'hidden' : ''} ${
                      lightMode ? 'text-white' : ''
                    }`}
                  >
                    Learn More
                  </button>
                </a>
              </div> */}

              <motion.div
                className={`${
                  projects[index].showingDescription ? 'h-full' : 'h-10'
                } bg-sky-900	group transition-all duration-300 rounded text-white border-2 text-center font-bold overflow-hidden flex justify-center items-center flex-col shadow-xl text-[3.5vw] sm:text-base 2xl:text-lg`}
                whileHover={{
                  height: '100%',
                  transition: {
                    duration: 0.07,
                  },
                }}
                onMouseEnter={(e) => {
                  setTimeout(() => {
                    handleDescription(index)
                  }, 70)
                }}
                onMouseLeave={(e) => {
                  handleDescription(index)
                }}
              >
                <motion.div className="">
                  {projects[index].showingDescription
                    ? project.description
                    : 'Description'}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
