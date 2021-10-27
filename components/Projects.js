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
      <section className="font-bold projectTitle text-xl proj1tt w-32">
        <span className='tooltip rounded shadow-lg p-2 bg-gray-100 text-gray-500 -mt-14 -ml-44 text-sm max-w-md'>
          Anime database built with next.js and tailwind css. Takes  data from MAL API and displays it.
          </span>
        Anime DB
      </section>
        
      <section className="font-bold projectTitle2 text-xl proj1tt w-32">
        <span className='tooltip rounded shadow-lg p-2 bg-gray-100 text-gray-500 -mt-20 -ml-40 text-sm max-w-md'>
          Basic e-commerce template site built with Create-React-App and Material UI. 
          Uses Firebase Authentication and Firestore Database to also implement simple CRUD functions.
          </span>
        E-Commerce
      </section>

      <section className="font-bold projectTitle3 text-xl proj1tt w-32">
      <span className='tooltip rounded shadow-lg p-2 bg-gray-100 text-gray-500 -mt-20 -ml-40 text-sm max-w-md'>
        A NFT tracker website built with next.js and tailwind css. 
        Users can enter thier ETH wallet address and displays cards with their NFTs.
        </span>
        NFT-Tracker
      </section>

      <div className="flex justify-center mt-6 gap-x-12 projectContainer relative">
        <div className="w-1/4 absolute h-full left-one overlayOne flex justify-center gap-x-10">
          <div className="mt-32 opacity-100">
            <a href="https://mal-anime-db.netlify.app" className="font-bold">
              Live
            </a>
          </div>
          <div className="mt-32">
            <a
              href="https://github.com/Genlord/anime-app"
              className="font-bold"
            >
              Github
            </a>
          </div>
        </div>

        <div className="w-1/4 absolute h-full right-two overlayOne flex justify-center gap-x-10">
          <div className="mt-32 opacity-100">
            <a href="https://compparts.netlify.app" className="font-bold">
              Live
            </a>
          </div>
          <div className="mt-32">
            <a
              href="https://github.com/Genlord/e-commerce"
              className="font-bold"
            >
              Github
            </a>
          </div>
        </div>

        <div className="w-1/4 absolute h-full right-one overlayOne flex justify-center gap-x-10">
          <div className="mt-32 opacity-100">
            <a href="https://my-nft-tracker.netlify.app" className="font-bold">
              Live
            </a>
          </div>
          <div className="mt-32">
            <a
              href="https://github.com/Genlord/NFT-Tracker"
              className="font-bold"
            >
              Github
            </a>
          </div>
        </div>

        <header className="font-bold mobileTitle1 text-xl">Anime DB</header>

        <a
          className="w-1/4 relative transform duration-150 ease-in-out hover:scale-105 projectOne"
          href="https://mal-anime-db.netlify.app"
        >
          <img src="/animedbss.png" className="rounded" />
        </a>

        <header className="font-bold mobileTitle2 text-xl">E-Commerce</header>

        <a
          className="w-1/4 transform duration-150 ease-in-out hover:scale-105 projectTwo"
          href="https://compparts.netlify.app"
        >
          <img src="/e-commercess.png" className="rounded" />
        </a>

        <header className="font-bold mobileTitle3 text-xl">NFT-Tracker</header>

        <a
          className="w-1/4 transform duration-150 ease-in-out hover:scale-105 projectTwo"
          href="https://my-nft-tracker.netlify.app"
        >
          <img src="/nfttrackerss.png" className="rounded" />
        </a>
      </div>
    </div>
  );
}
