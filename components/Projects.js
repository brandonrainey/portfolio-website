import React, { useEffect, useRef } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import Image from 'next/image'

export default function Work({ workScroll, setWorkScroll, lightMode }) {
  const workDiv = useRef()

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
    <div
      ref={workDiv}
      className="flex justify-center mt-40 flex-col text-center projects gap-y-2"
    >
      <header className="font-bold text-5xl mb-10 tracking-wide">
        Projects
      </header>

      <div className="flex justify-center mt-6 mb-24 projectContainer">
        <div className="flex flex-row justify-around  absolute"></div>
        {/* projects */}
        <div className="flex flex-row  w-full justify-around projWrapper relative">
          {/* anime DB */}
          <div className="flex w-96 flex-col projectOneWrapper relative ">
            <div className=" absolute h-60 flex justify-center gap-x-10 projectOverlay rounded-t-lg">
              <div className="mt-28 linkButton">
                <a
                  href="https://mal-anime-db.netlify.app"
                  className={`font-bold text-2xl liveLink  ${
                    lightMode ? 'lightModeProjects' : null
                  }`}
                >
                  Live
                </a>
              </div>
              <div className="mt-28">
                <a
                  href="https://github.com/brandonrainey/anime-app"
                  className={`font-bold text-2xl liveLink ${
                    lightMode ? 'lightModeProjects' : null
                  }`}
                >
                  Github
                </a>
              </div>
            </div>

            <section
              className={`font-bold projectTitle text-xl proj1tt w-full justify-self-center text-center tracking-wide ${
                lightMode ? 'lightModeTitle' : ''
              }`}
            >
              Anime DB
            </section>

            <div className="flex flex-col projectBorder">
              <div className="flex justify-center imageOneWraper mt-2">
                <a
                  className="w-full relative projectOne h-60"
                  href="https://mal-anime-db.netlify.app"
                >
                  <Image
                    src="/animedbss.png"
                    className="rounded-t-lg projectOneImage w-full"
                    alt="anime db screenshot"
                    layout='fill'
                    priority={true}
                  />
                </a>
              </div>
              <div
                className={`aboutProj flex justify-center flex-col items-center ${
                  lightMode ? 'lightModeAbout' : null
                }`}
              >
                <span
                  className={`tooltip rounded shadow-lg p-2 bg-gray-100 text-gray-700  -ml-30 text-sm w-full descriptionOne description tracking-wide${
                    lightMode ? 'lightModeDescription' : null
                  }`}
                >
                  Anime database that takes data from an unofficial
                  MyAnimeList.com API and displays it in a grid of cards, with
                  basic filters and search functions. Built using Next.js and
                  Tailwind CSS.
                </span>
                About
                <FaChevronDown />
              </div>
            </div>
          </div>

          {/* e-commerce */}
          <div className="flex flex-col w-96 projectTwoWrapper relative ">
            <div className="w-96 absolute h-60 flex justify-center gap-x-10 projectOverlay rounded-t-lg">
              <div className="mt-28 opacity-100">
                <a
                  href="https://brainey-product-page.netlify.app/"
                  className={`font-bold text-2xl liveLink ${
                    lightMode ? 'lightModeProjects' : null
                  }`}
                >
                  Live
                </a>
              </div>
              <div className="mt-28">
                <a
                  href="https://github.com/brandonrainey/eCommerce-product-page"
                  className={`font-bold text-2xl liveLink ${
                    lightMode ? 'lightModeProjects' : null
                  }`}
                >
                  Github
                </a>
              </div>
            </div>

            <section
              className={`font-bold projectTitle2 text-xl proj1tt w-full justify-self-center text-center tracking-wide ${
                lightMode ? 'lightModeTitle' : ''
              }`}
            >
              eCommerce Product Page
            </section>
            <div className="flex flex-col projectBorder">
              <div className="flex justify-center mt-2 imageTwoWrapper">
                <a
                  className="w-full projectTwo relative h-60"
                  href="https://brainey-product-page.netlify.app/"
                >
                  <Image
                    src="/productpagess.png"
                    className="rounded-t-lg  w-full"
                    alt="e-commerce product page screenshot"
                    layout='fill'
                    priority={true}
                  />
                </a>
              </div>
              <div
                className={`aboutProj flex justify-center flex-col items-center ${
                  lightMode ? 'lightModeAbout' : null
                }`}
              >
                <span className="tooltip rounded shadow-lg p-2 bg-gray-100 text-gray-700  -ml-30 text-sm w-full descriptionTwo description tracking-wide">
                  E-commerce product page site built with Next.js and desgin
                  from Frontendmentor.com. Uses Firebase Authentication to allow
                  creating and logging into an account.
                </span>
                About
                <FaChevronDown />
              </div>
            </div>
          </div>

          {/* twitch-top-3 */}
          <div className="flex flex-col w-96 projectThreeWrapper relative">
            <div className="w-96 absolute h-60 flex justify-center gap-x-10 projectOverlay rounded-t-lg">
              <div className="mt-28 opacity-100 ">
                <a
                  href="https://twitch-top-3.netlify.app/"
                  className={`font-bold text-2xl liveLink ${
                    lightMode ? 'lightModeProjects' : null
                  }`}
                >
                  Live
                </a>
              </div>
              <div className="mt-28">
                <a
                  href="https://github.com/brandonrainey/twitch-top-3"
                  className={`font-bold text-2xl liveLink ${
                    lightMode ? 'lightModeProjects' : null
                  }`}
                >
                  Github
                </a>
              </div>
            </div>

            <section
              className={`font-bold projectTitle3 text-xl proj1tt w-full justify-self-center text-center tracking-wide ${
                lightMode ? 'lightModeTitle' : ''
              }`}
            >
              Twitch Top 3
            </section>

            <div className="flex flex-col projectBorder">
              <div className="flex justify-center mt-2 imageThreeWrapper">
                <a
                  className="w-full projectThree relative h-60"
                  href="https://twitch-top-3.netlify.app/"
                >
                  <Image
                    src="/twitchss.png"
                    className="rounded-t-lg h-60 w-full"
                    alt="twitch top 3 screenshot"
                    layout='fill'
                    priority={true}
                  />
                </a>
              </div>
              <div
                className={`aboutProj flex justify-center flex-col items-center ${
                  lightMode ? 'lightModeAbout' : null
                }`}
              >
                <span className="tooltip rounded shadow-lg p-2 bg-gray-100 text-gray-700 -ml-30 text-sm w-full descriptionThree description tracking-wide">
                  A Next.js built site using the Twitch API to display data.
                  Users can enter the name of a twitch channel and return the
                  top three clips from the past week of that streamer.
                </span>
                About
                <FaChevronDown />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full justify-around projWrapper2 relative">
        {/* room-homepage */}
        <div className="flex flex-col w-96 projectFourWrapper relative">
          <div className="w-96 absolute h-60 flex justify-center gap-x-10 projectOverlay rounded-t-lg">
            <div className="mt-28 opacity-100">
              <a
                href="https://the-room-homepage.netlify.app"
                className={`font-bold text-2xl liveLink ${
                  lightMode ? 'lightModeProjects' : null
                }`}
              >
                Live
              </a>
            </div>
            <div className="mt-28">
              <a
                href="https://github.com/brandonrainey/room-homepage"
                className={`font-bold text-2xl liveLink ${
                  lightMode ? 'lightModeProjects' : null
                }`}
              >
                Github
              </a>
            </div>
          </div>

          <section
            className={`font-bold projectTitle4 text-xl proj1tt w-full justify-self-center text-center tracking-wide ${
              lightMode ? 'lightModeTitle' : ''
            }`}
          >
            Room-Homepage
          </section>

          <div className="flex flex-col projectBorder">
            <div className="flex justify-center mt-2 imageFourWrapper">
              <a
                className="w-full projectTwo h-60 relative"
                href="https://the-room-homepage.netlify.app"
              >
                <Image
                  src="/roomHomepageSS.png"
                  className="rounded-t-lg h-60 w-full"
                  alt="room homepage screenshot"
                  layout='fill'
                  priority={true}
                />
              </a>
            </div>
            <div
              className={`aboutProj flex justify-center flex-col items-center ${
                lightMode ? 'lightModeAbout' : null
              }`}
            >
              <span className="tooltip rounded shadow-lg p-2 bg-gray-100 text-gray-700 -ml-30 text-sm w-full descriptionFour description tracking-wide">
                Static homepage recreated from a FrontendMentor challenge.
                Cycles through three hero images. Created with Next.js and a CSS
                Grid and Flexbox layout.
              </span>
              About
              <FaChevronDown />
            </div>
          </div>
        </div>

        {/* tile-memory-game */}
        <div className="flex flex-col w-96 projectFourWrapper relative">
          <div className="w-96 absolute h-60 flex justify-center gap-x-10 projectOverlay rounded-t-lg">
            <div className="mt-28 opacity-100">
              <a
                href="https://tile-memory-game.netlify.app"
                className={`font-bold text-2xl liveLink ${
                  lightMode ? 'lightModeProjects' : null
                }`}
              >
                Live
              </a>
            </div>
            <div className="mt-28">
              <a
                href="https://github.com/brandonrainey/tile-game"
                className={`font-bold text-2xl liveLink ${
                  lightMode ? 'lightModeProjects' : null
                }`}
              >
                Github
              </a>
            </div>
          </div>

          <section
            className={`font-bold projectTitle4 text-xl proj1tt w-full justify-self-center text-center tracking-wide ${
              lightMode ? 'lightModeTitle' : ''
            }`}
          >
            Tile-memory-game
          </section>

          <div className="flex flex-col projectBorder">
            <div className="flex justify-center mt-2 imageFiveWrapper">
              <a
                className="w-full projectTwo h-60 relative"
                href="https://tile-memory-game.netlify.app"
              >
                <Image
                  src="/tilegamess.png"
                  className="rounded-t-lg h-60 w-full"
                  alt="room homepage screenshot"
                  layout='fill'
                  priority={true}
                />
              </a>
            </div>
            <div
              className={`aboutProj flex justify-center flex-col items-center ${
                lightMode ? 'lightModeAbout' : null
              }`}
            >
              <span className="tooltip rounded shadow-lg p-2 bg-gray-100 text-gray-700 -ml-30 text-sm w-full descriptionFour description tracking-wide">
                A memory game with different difficulties where you memorize lit
                tiles in 5 seconds then have 10 seconds to recall and click the
                tiles. Made with Next.js and Tailwind CSS.
              </span>
              About
              <FaChevronDown />
            </div>
          </div>
        </div>

        {/* easybank landing page */}
        <div className="projectContainer2">
          <div className="flex flex-col w-96 projectFiveWrapper relative">
            <div className="w-96 absolute h-60 flex justify-center gap-x-10 projectOverlay rounded-t-lg">
              <div className="mt-28 opacity-100">
                <a
                  href="https://eb-landing-page.netlify.app"
                  className={`font-bold text-2xl liveLink ${
                    lightMode ? 'lightModeProjects' : null
                  }`}
                >
                  Live
                </a>
              </div>
              <div className="mt-28">
                <a
                  href="https://github.com/brandonrainey/easybank-landing-page"
                  className={`font-bold text-2xl liveLink ${
                    lightMode ? 'lightModeProjects' : null
                  }`}
                >
                  Github
                </a>
              </div>
            </div>

            <section
              className={`font-bold projectTitle4 text-xl proj1tt w-full justify-self-center text-center tracking-wide ${
                lightMode ? 'lightModeTitle' : ''
              }`}
            >
              Easybank-Landing-Page
            </section>

            <div className="flex flex-col projectBorder">
              <div className="flex justify-center mt-2 imageSixWrapper">
                <a
                  className="w-full projectTwo h-60 relative"
                  href="https://eb-landing-page.netlify.app"
                >
                  <Image
                    src="/eblandingpagess.png"
                    className="rounded-t-lg h-60 w-full"
                    alt="easybank landing page screenshot"
                    layout='fill'
                    priority={true}
                  />
                </a>
              </div>
              <div
                className={`aboutProj flex justify-center flex-col items-center ${
                  lightMode ? 'lightModeAbout' : null
                }`}
              >
                <span className="tooltip rounded shadow-lg p-2 bg-gray-100 text-gray-700 -ml-30 text-sm w-full descriptionFive description tracking-wide">
                  A site built on Nextjs replicating a design from a
                  FrontendMentor challenge. Simple bank landing page with
                  header/footer and multiple sections.
                </span>
                About
                <FaChevronDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
