import React, { useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Work({ workScroll, setWorkScroll, lightMode}) {
  const workDiv = useRef();

  useEffect(() => {
    if (workScroll === true) {
      workDiv.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      setWorkScroll(false);
    }
  }, [workScroll]);

  return (
    <div
      ref={workDiv}
      className="flex justify-center mt-40 flex-col text-center"
    >
      <header className="font-bold text-5xl mb-10">Projects</header>

      <div className="flex justify-center mt-6 mb-24 projectContainer">
        <div className="flex flex-row justify-around justify-center absolute"></div>
        {/* projects */}
        <div className="flex flex-row justify-center w-full justify-around projWrapper relative">
          {/* anime DB */}
          <div className="flex w-96 flex-col projectOneWrapper relative ">
            <div className=" absolute h-60 flex justify-center gap-x-10 projectOverlay rounded-t-lg">
              <div className="mt-28 ">
                <a
                  href="https://mal-anime-db.netlify.app"
                  className={`font-bold text-2xl underline hover:text-blue-400 ${lightMode ? 'lightModeProjects' : null}`}
                >
                  Live
                </a>
              </div>
              <div className="mt-28">
                <a
                  href="https://github.com/Genlord/anime-app"
                  className={`font-bold text-2xl underline hover:text-blue-400 ${lightMode ? 'lightModeProjects' : null}`}
                >
                  Github
                </a>
              </div>
            </div>

            <section className="font-bold projectTitle text-xl proj1tt w-full justify-self-center text-center">
              Anime DB
            </section>

            <div className="flex justify-center imageOneWraper">
              <a
                className="w-full relative projectOne"
                href="https://mal-anime-db.netlify.app"
              >
                <img
                  src="/animedbss.png"
                  className="rounded-t-lg h-60 projectOneImage"
                  alt="anime db screenshot"
                  
                />
              </a>
            </div>
            <div className={`aboutProj flex justify-center flex-col items-center ${lightMode ? 'lightModeAbout' : null}`}>
              <span className={`tooltip rounded shadow-lg p-2 bg-gray-100 text-gray-700  -ml-30 text-sm w-full descriptionOne description ${lightMode ? 'lightModeDescription' : null}`}>
                Anime database that takes data from an unofficial MyAnimeList.com API and displays it in 
                a grid of cards, with basic filters and search functions. Built using Next.js and Tailwind CSS.
              </span>
              About
              <FaChevronDown />
            </div>
          </div>

          {/* e-commerce */}
          <div className="flex flex-col w-96 projectTwoWrapper relative">
            <div className="w-96 absolute h-60 flex justify-center gap-x-10 projectOverlay rounded-t-lg">
              <div className="mt-28 opacity-100">
                <a
                  href="https://compparts.netlify.app"
                  className={`font-bold text-2xl underline hover:text-blue-400 ${lightMode ? 'lightModeProjects' : null}`}
                >
                  Live
                </a>
              </div>
              <div className="mt-28">
                <a
                  href="https://github.com/Genlord/e-commerce"
                  className={`font-bold text-2xl underline hover:text-blue-400 ${lightMode ? 'lightModeProjects' : null}`}
                >
                  Github
                </a>
              </div>
            </div>

            <section className="font-bold projectTitle2 text-xl proj1tt w-full justify-self-center">
              E-Commerce
            </section>

            <div className="flex justify-center">
              <a
                className="w-full projectTwo"
                href="https://compparts.netlify.app"
              >
                <img
                  src="/e-commercess.png"
                  className="rounded-t-lg h-60"
                  alt="e-commerse screenshot"
                />
              </a>
            </div>
            <div className={`aboutProj flex justify-center flex-col items-center ${lightMode ? 'lightModeAbout' : null}`}>
              <span className="tooltip rounded shadow-lg p-2 bg-gray-100 text-gray-700  -ml-30 text-sm w-full descriptionTwo description">
                Basic e-commerce template site built with Create-React-App and
                Material UI. Uses Firebase Authentication and Firestore Database
                to also implement simple CRUD functions.
              </span>
              About
              <FaChevronDown />
            </div>
          </div>

          {/* twitch-top-3 */}
          <div className="flex w-24 flex-col w-96 projectThreeWrapper relative">
            <div className="w-96 absolute h-60 flex justify-center gap-x-10 projectOverlay rounded-t-lg">
              <div className="mt-28 opacity-100 ">
                <a
                  href="https://twitch-top-3.netlify.app/"
                  className={`font-bold text-2xl underline hover:text-blue-400 ${lightMode ? 'lightModeProjects' : null}`}
                >
                  Live
                </a>
              </div>
              <div className="mt-28">
                <a
                  href="https://github.com/Genlord/twitch-top-3"
                  className={`font-bold text-2xl underline hover:text-blue-400 ${lightMode ? 'lightModeProjects' : null}`}
                >
                  Github
                </a>
              </div>
            </div>

            <section className="font-bold projectTitle3 text-xl proj1tt w-full justify-self-center">
              Twitch Top 3
            </section>

            <div className="flex justify-center">
              <a
                className="w-full projectThree"
                href="https://twitch-top-3.netlify.app/"
              >
                <img
                  src="/twitchss.png"
                  className="rounded-t-lg h-60"
                  alt="twitch top 3 screenshot"
                />
              </a>
            </div>
            <div className={`aboutProj flex justify-center flex-col items-center ${lightMode ? 'lightModeAbout' : null}`}>
              <span className="tooltip rounded shadow-lg p-2 bg-gray-100 text-gray-700 -ml-30 text-sm w-full descriptionThree description">
                A Next.js built site using the Twitch API to display data. Users can enter the name of a twitch
                channel and return the top three clips from the past week of that streamer.
              </span>
              About
              <FaChevronDown />
            </div>
          </div>

          
        </div>
      </div>
      <div className="flex flex-row justify-center w-full justify-around projWrapper2 relative">

        {/* room-homepage */}
        <div className="flex flex-col w-96 projectFourWrapper relative">
            <div className="w-96 absolute h-60 flex justify-center gap-x-10 projectOverlay rounded-t-lg">
              <div className="mt-28 opacity-100">
                <a
                  href="https://the-room-homepage.netlify.app"
                  className={`font-bold text-2xl underline hover:text-blue-400 ${lightMode ? 'lightModeProjects' : null}`}
                >
                  Live
                </a>
              </div>
              <div className="mt-28">
                <a
                  href="https://github.com/Genlord/room-homepage"
                  className={`font-bold text-2xl underline hover:text-blue-400 ${lightMode ? 'lightModeProjects' : null}`}
                >
                  Github
                </a>
                
              </div>
            </div>

            <section className="font-bold projectTitle4 text-xl proj1tt w-full justify-self-center">
              Room-Homepage
            </section>

            <div className="flex justify-center">
              <a
                className="w-full projectTwo"
                href="https://the-room-homepage.netlify.app"
              >
                <img
                  src="/roomHomepageSS.png"
                  className="rounded-t-lg h-60"
                  alt="room homepage screenshot"
                />
              </a>
            </div>
            <div className={`aboutProj flex justify-center flex-col items-center ${lightMode ? 'lightModeAbout' : null}`}>
              <span className="tooltip rounded shadow-lg p-2 bg-gray-100 text-gray-700 -ml-30 text-sm w-full descriptionFour description">
                Static homepage made from a FrontendMentor challenge. Active
                states on the nav and buttons, and cycles through three hero
                images. Created with Next.js and a basic CSS Grid and Flexbox
                layout.
                
              </span>
              About
              <FaChevronDown />
            </div>
          </div>

        {/* gpu-comparison */}
        <div className="projectContainer2">
            <div className="flex flex-col w-96 projectFiveWrapper relative">
              <div className="w-96 absolute h-60 flex justify-center gap-x-10 projectOverlay rounded-t-lg">
                <div className="mt-28 opacity-100">
                  <a
                    href="https://gpu-comparison.netlify.app"
                    className={`font-bold text-2xl underline hover:text-blue-400 ${lightMode ? 'lightModeProjects' : null}`}
                  >
                    Live
                  </a>
                </div>
                <div className="mt-28">
                  <a
                    href="https://github.com/Genlord/gpu-comparison"
                    className={`font-bold text-2xl underline hover:text-blue-400 ${lightMode ? 'lightModeProjects' : null}`}
                  >
                    Github
                  </a>
                </div>
              </div>

              <section className="font-bold projectTitle4 text-xl proj1tt w-full justify-self-center">
                GPU-Comparison
              </section>

              <div className="flex justify-center">
                <a
                  className="w-full projectTwo"
                  href="https://gpu-comparison.netlify.app"
                >
                  <img
                    src="gpu-comparisonss.png"
                    className="rounded-t-lg h-60"
                    alt="room homepage screenshot"
                  />
                </a>
              </div>
              <div className={`aboutProj flex justify-center flex-col items-center ${lightMode ? 'lightModeAbout' : null}`}>
                <span className="tooltip rounded shadow-lg p-2 bg-gray-100 text-gray-700 -ml-30 text-sm w-full descriptionFive description">
                  A site built using Next.js using static data to display recent Nvidia/AMD graphics
                   cards via Recharts and MUI in a data grid and scatter plot chart.
                </span>
                About
                <FaChevronDown />
              </div>
            </div>
        </div>
        </div>
    </div>
  );
}
