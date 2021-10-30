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

          <div className='flex flex-row justify-around justify-center'>
            {/*anime db overlay */}
          <div className="w-96 absolute h-60  overlayOne flex justify-center gap-x-10 animeDB align-center">
            <div className="mt-32 opacity-100">
              <a href="https://mal-anime-db.netlify.app" className="font-bold text-2xl">
                Live
              </a>
            </div>
            <div className="mt-32">
              <a
                href="https://github.com/Genlord/anime-app"
                className="font-bold text-2xl"
              >
                Github
              </a>
            </div>
          </div>

          {/*e-commerce overlay */}
          <div className="w-96 absolute h-60  overlayOne flex justify-center gap-x-10 eCommerce">
            <div className="mt-32 opacity-100">
              <a href="https://compparts.netlify.app" className="font-bold text-2xl">
                Live
              </a>
            </div>
            <div className="mt-32">
              <a
                href="https://github.com/Genlord/e-commerce"
                className="font-bold text-2xl"
              >
                Github
              </a>
            </div>
          </div>


          {/*nft tracker overlay */}
          <div className="w-96 absolute h-60  overlayOne flex justify-center gap-x-10 nftTracker">
            <div className="mt-32 opacity-100">
              <a href="https://my-nft-tracker.netlify.app" className="font-bold text-2xl">
                Live
              </a>
            </div>
            <div className="mt-32">
              <a
                href="https://github.com/Genlord/NFT-Tracker"
                className="font-bold text-2xl"
              >
                Github
              </a>
            </div>
          </div>
          </div>
          

          
          
          

          <div className='flex flex-row justify-center w-full justify-around projWrapper'>

            <div className='flex w-96 flex-col'>
                    <section className="font-bold projectTitle text-xl proj1tt w-32 ml-32">
                  <span className='tooltip rounded shadow-lg p-2 bg-gray-100 text-gray-500 -mt-14 -ml-44 text-sm max-w-md descriptionOne'>
                    Anime database built with next.js and tailwind css. Takes  data from MAL API and displays it.
                    </span>
                  Anime DB
                </section>

                  <div className='flex justify-center'>
                     <a
                      className="w-full relative projectOne"
                      href="https://mal-anime-db.netlify.app"
                    >
                      <img src="/animedbss.png" className="rounded h-60 w-full" />
                    </a>
                  </div>
                   
              </div>
            
              <div className='flex flex-col w-96'>
                
                  <section className="font-bold projectTitle2 text-xl proj1tt w-36 ml-32">
                  <span className='tooltip rounded shadow-lg p-2 bg-gray-100 text-gray-500 -mt-20 -ml-40 text-sm max-w-md descriptionTwo'>
                    Basic e-commerce template site built with Create-React-App and Material UI. 
                    Uses Firebase Authentication and Firestore Database to also implement simple CRUD functions.
                    </span>
                  E-Commerce
                </section>
                
                    
                <div className='flex justify-center'>
                  <a
                      className="w-full projectTwo"
                      href="https://compparts.netlify.app"
                    >
                      <img src="/e-commercess.png" className="rounded h-60" />
                    </a>
                </div>
                    
              </div>
            
              <div className='flex w-24 flex-col w-96'>
                    <section className="font-bold projectTitle3 text-xl proj1tt w-32 ml-32">
                <span className='tooltip rounded shadow-lg p-2 bg-gray-100 text-gray-500 -mt-20 -ml-40 text-sm max-w-md descriptionThree'>
                  A NFT tracker website built with next.js and tailwind css. 
                  Users can enter thier ETH wallet address and displays cards with their NFTs.
                  </span>
                  NFT-Tracker
                </section>

                  <div className='flex justify-center'>
                    <a
                      className="w-full projectTwo"
                      href="https://my-nft-tracker.netlify.app"
                    >
                      <img src="/nfttrackerss.png" className="rounded h-60" />
                    </a>
                  </div>
                    
              </div>
          </div>
              
          
        </div>
    </div>
  );
}
