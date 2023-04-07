import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

export default function TwitchFollowTracker() {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="sm:text-6xl text-5xl mb-12 mt-4 px-4 font-semibold text-center">
        Twitch Follow Tracker
      </h1>
      <Carousel
        responsive={responsive}
        itemClass={`image-item`}
        className="sm:w-5/6 w-full"
      >
        <img src="/twitchfollowsSS.webp" className=""></img>
        <img src="/twitchfollowsSS2.webp" className=""></img>
        <img src="/twitchfollowsSS3.webp" className=" "></img>
      </Carousel>

      <div className="flex flex-col items-center">
        <h2 className="sm:text-3xl text-2xl mt-4 font-semibold">
          Technology Used
        </h2>
        <div className="flex items-center gap-4  flex-wrap md:w-full w-5/6 justify-center mt-6">
          <img src="/reactIcon.png" className="h-20 w-30 "></img>
          <img src="/reduxIcon.png" className="h-16 w-30 "></img>
          <img src={`/nextjsIconWhite.png`} className="h-20 w-30"></img>
          <img src="/tailwindIcon.png" className=" aspect-5/3 max-h-14"></img>
        </div>
      </div>
      <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
        <li>
          For this project, I chose Next.js as my React framework and Tailwind
          CSS for styling due to their feature-rich capabilities and streamlined
          development process. Redux was used for state management.
        </li>
      </ul>

      <article className="flex flex-col items-center">
        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold text-center">
          Description
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
          <li>
            Users can connect their Twitch account to view their followers. Once
            connected, up to 100 of the user's followed streams are displayed in
            a grid of cards. Clicking on a card opens a popup that shows the
            streamer's three most recent VODs, with thumbnails linking to the
            corresponding videos. An active search bar filters the grid of
            followers, and a "load more" button allows users to paginate and
            fetch more of their followed streams if they have over 100.
          </li>
        </ul>

        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold">
          Challenges/What I Learned
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full">
          <li>
            This was my first project using Redux Toolkit as the global state
            manager. I implemented data fetching in my Redux slice using
            createAsyncThunk to handle the request properly, which required a
            shift from standard reducer logic to the extraReducers method.
          </li>
          <li>
            I used the Twitch API for data fetching, which required headers in
            the request for user authorization. This involved creating a
            developer account with Twitch, installing the CLI to generate a
            client ID, and using the bearer token from the updated URL to fetch
            user data.
          </li>
        </ul>

        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold text-center">
          Potential Additions/Improvements
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
          <li>
            Access more endpoints from the Twitch API to display additional
            information on each card.
          </li>
          <li>Persist the user's authentication beyond the browser session.</li>
        </ul>
      </article>
    </div>
  )
}
