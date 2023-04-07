import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

import { useInView } from 'react-intersection-observer'
import { motion, Variants } from 'framer-motion'

export default function Work({ workScroll, setWorkScroll }) {
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

  //toggles the showingDescription value
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
          Developed a responsive and feature-rich e-commerce site, integrating Stripe payment processing for seamless transactions.
          </li>
          <li className="mb-1">
          Implemented Google OAuth and Firestore backend for secure user authentication, order storage, and efficient handling of Stripe events via webhooks.
          </li>
          <li className="mb-1">
          Employed Next.js, TypeScript, Redux Toolkit, and Tailwind CSS to create a modern and user-friendly interface.
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
      page: '/anime-database',
      description: (
        <ul className="transition-all list-disc list-inside gap-2 px-1">
          <li className="mb-1">
          Developed a dynamic application that fetches data from an API to display in a grid of cards, incorporating paginated results and search functionality for a user-friendly experience.
          </li>
          <li className="mb-1">
          Implemented a watchlist calendar feature, allowing users to add anime using local storage for easy access and organization.
          </li>
          <li className="mb-1">
          Crafted using Next.js, TypeScript, and styled with Tailwind CSS for a modern and visually appealing interface.
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
      page: '/twitch-follow-tracker',
      description: (
        <ul className="transition-all list-disc list-inside gap-2 px-1">
          <li className="mb-1">
          Developed an application that fetches data from the Twitch API to display a connected user's followed streams in a grid of cards, providing a personalized experience.
          </li>
          <li className="mb-1">
          Enhanced by displaying up to 3 of the latest VODs upon card selection, and included search by name for easy navigation.
          </li>
          <li className="mb-1">
          Created using Next.js, incorporated Redux Toolkit for state management, and styled with Tailwind CSS.
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
      page: '/reddit-clone',
      description: (
        <ul className="transition-all list-disc list-inside gap-2 px-1">
          <li className="mb-1">
          Developed an application that implements CRUD functionality for posts and comments on specific subreddits, providing users with an interactive experience.
          </li>
          <li className="mb-1">
          Utilized Firebase Firestore as a backend for efficient data storage and retrieval.
          </li>
          <li className="mb-1">
          Crafted using the Next.js React framework and styled with Tailwind CSS for a modern and visually appealing interface.
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
      page: '/tile-memory-game',
      description: (
        <ul className="transition-all list-disc list-inside gap-2 px-1s">
          <li className="mb-1">
          Developed an engaging memory game that displays a square grid of tiles, challenging users to memorize and recall a pattern within a specified time limit.
          </li>
          <li className="mb-1">
          Enhanced user experience by offering multiple grid size options, accompanied by visually appealing animations and a progress bar.
          </li>
          <li className="mb-1">
          Crafted using the Next.js React framework and styled with Tailwind CSS for a modern and visually appealing interface.
          </li>
        </ul>
      ),
      showing: false,
      showingDescription: false,
    },
    {
      title: 'Developer Application',
      image: '/applicationSS.png',
      github: 'https://github.com/brandonrainey/developer-application-v2',
      live: 'https://developer-job-application.netlify.app',
      page: '/developer-application',
      description: (
        <ul className="transition-all list-disc list-inside gap-2 px-1s">
          <li className="mb-1">
          Developed a streamlined three-step application tailored specifically for frontend developers, offering an intuitive user experience.
          </li>
          <li className="mb-1">
          Incorporated various input element styles for efficient and interactive data collection from users.
          </li>
          <li className="mb-1">
          Crafted using the Next.js React framework and styled with SCSS for a modern and visually appealing interface.
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

  //scrolls into view
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
    <div className="flex flex-wrap gap-y-16 gap-x-20 justify-center mt-32">
      <div
        className="w-full text-center font-bold text-5xl sm:tracking-wide "
        ref={workDiv}
      >
        <p className="underline underline-offset-[16px]">Projects</p>
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
            />

            {/* Hover Overlay */}
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
                <button
                  className={`bg-sky-900/50 border-4 hover:bg-indigo-500 text-xl h-12 w-24 rounded-3xl tracking-wide font-semibold shadow-xl ${
                    projects[index].showingDescription ? 'hidden' : ''
                  } `}
                  onClick={() => router.push(project.live)}
                >
                  Live
                </button>

                <button
                  className={`bg-sky-900/50 border-4 hover:bg-indigo-500 text-xl h-12 w-24 rounded-3xl tracking-wide font-semibold shadow-xl ${
                    projects[index].showingDescription ? 'hidden' : ''
                  } `}
                  onClick={() => router.push(project.github)}
                >
                  Github
                </button>
              </div>

              <div className="flex w-full justify-center py-4 mb-4">
                <button
                  className={`bg-sky-900/50 border-4 hover:bg-indigo-500 text-xl h-12 w-40 rounded-3xl tracking-wide font-semibold shadow-xl ${
                    projects[index].showingDescription ? 'hidden' : ''
                  }  `}
                  onClick={() => router.push(projects[index].page)}
                >
                  Learn More
                </button>
              </div>

              <motion.div
                className={`${
                  projects[index].showingDescription ? 'h-full' : 'h-10'
                } bg-sky-900	group transition-all duration-300 rounded text-white border-2 text-center font-bold overflow-hidden flex justify-center items-center flex-col shadow-xl text-[2.9vw] md:hidden xl:block sm:text-base `}
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
                <motion.div className=" h-full flex items-center justify-center">
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
