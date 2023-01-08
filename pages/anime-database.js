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

export default function AnimeDatabase() {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="sm:text-6xl text-5xl mb-12 mt-4 px-4 font-semibold text-center">
        Anime Database
      </h1>
      <Carousel
        responsive={responsive}
        itemClass={`image-item`}
        className="sm:w-5/6 w-full"
      >
        <img src="/animedbss.webp" className=""></img>
        <img src="/anime-db-SS2.webp" className=""></img>
        <img src="/anime-db-SS3.webp" className=" "></img>
      </Carousel>

      <div className="flex flex-col items-center">
        <h2 className="sm:text-3xl text-2xl mt-4 font-semibold">
          Technology Used
        </h2>
        <div className="flex items-center gap-2  flex-wrap md:w-full w-5/6 justify-center mb-2">
          <img src="/reactIcon.png" className="h-20 w-30 mt-4"></img>
          <img src="/typescriptIcon.png" className="h-16 w-26 mt-4"></img>
          <img src="/reduxIcon.png" className="h-20 w-30 mt-4"></img>
          <img src={`/nextjsIconWhite.png`} className="h-20 w-30"></img>
          <img src="/tailwindIcon.png" className=" aspect-5/3 max-h-14"></img>
        </div>
      </div>
      <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full text-lg">
        <li>
          I used Next.js as my react framework as i do for most projects, as i
          find it the most feature rich and performant. Similarly i used
          Tailwind CSS to style this project as it helps streamline my building
          process. Another frequently used service by me is Firebase as the
          backend, mostly as its what im most familiar with, which allows me to
          focus on the frontend more.
        </li>
      </ul>

      <article className="flex flex-col items-center gap-6">
        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold">Description</h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full text-lg">
          <li>
            Fetches data on anime from a MyAnimeList api to display a grid of
            cards that link to thier corresponding MyAnimeList page. The user
            can sort the results by different categories and sort by serveral
            values as well. Users can also user the search box to search through
            all anime, with pagination for all results and categories.
          </li>
          <li>
            There is a calendar that users can add currently air animes to to
            track what day of the week they air, using local storage.
          </li>
        </ul>

        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold">
          Challenges/What I Learned
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full text-lg">
          <li>
            First time using typescript in a project. Learned about how to to
            type the props sent to each component, along with arguements sent
            into functions.
          </li>
          <li>
            Utilized the browser&apos;s local storage to store non-sensitive
            user data. I created a calendar using the Date API to determine and
            highlight the current day of the week to the user. The user can add
            currently airing anime to thier watchlist, which gets stored in the
            browser&apos;s localstorage.
          </li>
          <li>
            Created typically found sorting functions, such as acending, date,
            and score for the array of data returned from the api. Also created
            a search bar which fetches new data rather than filter a current
            array.
          </li>
        </ul>

        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold">
          Potential Additions/Improvements
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full text-lg">
          <li>Create a more permanent storage of user&apos;s tracked anime.</li>
          <li>Update UI to create a better user experience</li>
          <li>Add more data from the api to display on the anime cards.</li>
        </ul>
      </article>
    </div>
  )
}
