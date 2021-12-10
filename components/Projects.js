import React, { useEffect, useRef } from "react";

export default function Work(props) {
  const workDiv = useRef();

  useEffect(() => {
    if (props.workScroll === true) {
      workDiv.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      props.setWorkScroll(false);
    }
  }, [props.workScroll]);

  return (
    <div
      ref={workDiv}
      className="flex justify-center mt-40 flex-col text-center"
    >
      <header className="font-bold text-5xl mb-10">Projects</header>

      <div className="flex justify-center mt-6 projectContainer relative">
        <div className="flex flex-row justify-around justify-center">
          {/*anime db overlay */}
          <div className=" absolute h-60  overlayOne flex justify-center gap-x-10 animeDB align-center">
            <div className="mt-28 opacity-100">
              <a
                href="https://mal-anime-db.netlify.app"
                className="font-bold text-2xl underline hover:text-blue-400"
              >
                Live
              </a>
            </div>
            <div className="mt-28">
              <a
                href="https://github.com/Genlord/anime-app"
                className="font-bold text-2xl underline hover:text-blue-400"
              >
                Github
              </a>
            </div>
          </div>

          {/*e-commerce overlay */}
          <div className="w-96 absolute h-60  overlayOne flex justify-center gap-x-10 eCommerce">
            <div className="mt-28 opacity-100">
              <a
                href="https://compparts.netlify.app"
                className="font-bold text-2xl underline hover:text-blue-400"
              >
                Live
              </a>
            </div>
            <div className="mt-28">
              <a
                href="https://github.com/Genlord/e-commerce"
                className="font-bold text-2xl underline hover:text-blue-400"
              >
                Github
              </a>
            </div>
          </div>
          
          {/*nft tracker overlay */}
          <div className="w-96 absolute h-60  overlayOne flex justify-center gap-x-10 nftTracker">
            <div className="mt-28 opacity-100 ">
              <a
                href="https://my-nft-tracker.netlify.app"
                className="font-bold text-2xl underline hover:text-blue-400"
              >
                Live
              </a>
            </div>
            <div className="mt-28">
              <a
                href="https://github.com/Genlord/NFT-Tracker"
                className="font-bold text-2xl underline hover:text-blue-400"
              >
                Github
              </a>
            </div>
          </div>

          {/*room-homepage overlay */}
          <div className="w-96 absolute h-60  overlayOne flex justify-center gap-x-10 roomHomepage">
            <div className="mt-28 opacity-100">
              <a
                href="https://the-room-homepage.netlify.app"
                className="font-bold text-2xl underline hover:text-blue-400"
              >
                Live
              </a>
            </div>
            <div className="mt-28">
              <a
                href="https://github.com/Genlord/room-homepage"
                className="font-bold text-2xl underline hover:text-blue-400"
              >
                Github
              </a>
            </div>
          </div>
        </div>
        {/* projects */}
        <div className="flex flex-row justify-center w-full justify-around projWrapper">
          <div className="flex w-96 flex-col projectOneWrapper">
            <section className="font-bold projectTitle text-xl proj1tt w-full justify-self-center">
              
              Anime DB
            </section>

            <div className="flex justify-center">
              <a
                className="w-full relative projectOne"
                href="https://mal-anime-db.netlify.app"
              >
                <img src="/animedbss.png" className="rounded h-60 w-full" alt='anime db screenshot'/>
              </a>
            </div>
            <div className='aboutProj flex justify-center'>
              <span className="tooltip rounded shadow-lg p-2 bg-gray-100 text-gray-700 mt-10 -ml-30 text-sm w-96 descriptionOne">
                Anime database built with next.js and tailwind css. Takes data
                from MAL API and displays it.
              </span>
              About
            </div>
          </div>

          <div className="flex flex-col w-96 projectTwoWrapper">
            <section className="font-bold projectTitle2 text-xl proj1tt w-full justify-self-center">
              
              E-Commerce
            </section>

            <div className="flex justify-center">
              <a
                className="w-full projectTwo"
                href="https://compparts.netlify.app"
              >
                <img src="/e-commercess.png" className="rounded h-60" alt='e-commerse screenshot'/>
              </a>
            </div>
            <div className='aboutProj flex justify-center'>
              <span className="tooltip rounded shadow-lg p-2 bg-gray-100 text-gray-700 mt-10 -ml-30 text-sm w-96 descriptionTwo">
                Basic e-commerce template site built with Create-React-App and
                Material UI. Uses Firebase Authentication and Firestore Database
                to also implement simple CRUD functions.
              </span>
              About
            </div>
          </div>

          <div className="flex w-24 flex-col w-96 projectTwoWrapper">
            <section className="font-bold projectTitle3 text-xl proj1tt w-full justify-self-center">
              
              NFT-Tracker
            </section>

            <div className="flex justify-center">
              <a
                className="w-full projectTwo"
                href="https://my-nft-tracker.netlify.app"
              >
                <img src="/nfttrackerss.png" className="rounded h-60" alt='nft tracker screenshot'/>
              </a>
            </div>
            <div className='aboutProj flex justify-center'>
              <span className="tooltip rounded shadow-lg p-2 bg-gray-100 text-gray-700 mt-10 -ml-30 text-sm w-96 descriptionThree">
                A NFT tracker website built with next.js and tailwind css. Users
                can enter thier ETH wallet address and displays cards with their
                NFTs.
              </span>
              About
            </div>
          </div>

          <div className="flex flex-col w-96 projectFourWrapper">
            <section className="font-bold projectTitle4 text-xl proj1tt w-full justify-self-center">
              
              Room-Homepage
            </section>

            <div className="flex justify-center">
              <a
                className="w-full projectTwo"
                href="https://the-room-homepage.netlify.app"
              >
                <img src="/roomHomepageSS.png" className="rounded h-60" alt='room homepage screenshot'/>
              </a>
            </div>
            <div className='aboutProj flex justify-center'>
              <span className="tooltip rounded shadow-lg p-2 bg-gray-100 text-gray-700 mt-10 -ml-30 text-sm w-96 descriptionTwo">
                Static homepage made from a FrontendMentor challenge. Active states on the nav and buttons, and cycles through three hero images.
                Created with nextjs 
                and basic css grid and flexbox layout.
              </span>
              About
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
