import React, { useEffect, useRef, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import Image from 'next/image'

export default function Work({ workScroll, setWorkScroll, lightMode }) {
  const workDiv = useRef()

  const [projects, setProjects] = useState([
    {
    title: 'Anime DB',
    image: '/animedbss.png',
    github: 'https://github.com/brandonrainey/anime-app',
    live: 'https://mal-anime-db.netlify.app/',
    description: ''
    },
    {
      title: 'eCommerce Product Page',
      image: '/e-commercess.png',
      github: 'https://github.com/brandonrainey/eCommerce-product-page',
      live: 'https://brainey-product-page.netlify.app/',
      description: ''
      },
      {
        title: 'Twitch Follow Tracker',
        image: '/twitchfollowsSS.png',
        github: 'https://github.com/brandonrainey/twitch-vip-tracker',
        live: 'https://mytwitchfollows.netlify.app/',
        description: ''
        },
        {
          title: 'Reddit Clone',
          image: '/redditCloneSS.png',
          github: 'https://github.com/brandonrainey/reddit-clone',
          live: 'https://brainey-reddit-clone.netlify.app/',
          description: ''
          },
          {
            title: 'Tile Memory Game',
            image: 'tilegamess.png',
            github: 'https://github.com/brandonrainey/tile-game',
            live: 'https://tile-memory-game.netlify.app/',
            description: ''
            },
            {
              title: 'Easybank Laning Page',
              image: '/eblandingpagess.png',
              github: 'https://github.com/brandonrainey/easybank-landing-page',
              live: 'https://eb-landing-page.netlify.app/',
              description: ''
              }
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
    <div className='flex flex-wrap gap-6 gap-x-20 justify-center mt-20 '>
      {projects.map((project) => (
        <div className='flex w-1/3 min-w-project  '>
          <div className='flex flex-col relative  '>
            <p className='text-center font-semibold text-2xl '>{project.title}</p>
            <img className='h-full mt-2 rounded peer ' src={project.image}/>
            <div className='absolute h-full bg-blue-400 w-1/2 peer-hover:bg-red-400 '></div>
          </div>
          
          
        </div>
      ))}
    </div>
  )
}
