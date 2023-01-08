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
        <div className="flex items-center gap-2  flex-wrap md:w-full w-5/6 justify-center mb-2">
          <img src="/reactIcon.png" className="h-20 w-30 mt-4"></img>
          <img src="/reduxIcon.png" className="h-20 w-30 mt-4"></img>
          <img src={`/nextjsIconWhite.png`} className="h-20 w-30"></img>
          <img src="/tailwindIcon.png" className=" aspect-5/3 max-h-14"></img>
        </div>
      </div>

      <article className="flex flex-col items-center">
        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold">
          What I Learned
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full">
          <li>
            First project using i made using reduxtoolkit as the global state
            manager. Including basic redux state management storing
            strings/booleans etc., i had to implement data fetching in my redux
            slice. To accomplish fetching data in the redux slice,
            createAsyncThunk is required to properly handle the request. This
            required moving away from the standard reducer logic to the
            extraReducers method to add the reducers.
          </li>
          <li>
            Used the twitch api to fetch data which required the use of headers
            in the request to authorize the user. This required creation of a
            Developer account with twitch then installing the CLI to create your
            client-id. For the second part of the header, once the user
            connected thier twitch account i took the bearer token from the
            updated url to allow the fetching of that user&apos;s data.
          </li>
        </ul>
      </article>
    </div>
  )
}