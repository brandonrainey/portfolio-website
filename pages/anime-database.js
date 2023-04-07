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
      <h1 className="sm:text-6xl text-5xl sm:mb-12 mt-4 px-4 font-semibold text-center">
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
        <div className="flex items-center gap-4  flex-wrap md:w-full w-5/6 justify-center mb-2 mt-6">
          <img src="/reactIcon.png" className="h-20 w-30 "></img>
          <img src="/typescriptIcon.png" className="h-16 w-26 "></img>
          <img src="/reduxIcon.png" className="h-20 w-30 "></img>
          <img src={`/nextjsIconWhite.png`} className="h-20 w-30"></img>
          <img src="/tailwindIcon.png" className=" aspect-5/3 max-h-14"></img>
        </div>
      </div>
      <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
        <li>
          For this project, I utilized Next.js as my React framework and
          Tailwind CSS for styling, as they offer rich features and streamline
          the development process. This was my first project using TypeScript,
          so I focused on simple and inferred types.
        </li>
      </ul>

      <article className="flex flex-col items-center gap-6">
        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold">Description</h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
          <li>
            This application fetches data on anime from the MyAnimeList API,
            displaying a grid of cards that link to their corresponding
            MyAnimeList pages. Users can sort the results by various categories
            and values, and search through all anime with pagination for all
            results and categories. A calendar feature allows users to add
            currently airing anime to their watchlist, tracking the airing
            schedule using local storage.
          </li>
        </ul>

        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold">
          Challenges/What I Learned
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
          <li>
            This project marked my first experience using TypeScript. I learned
            how to type props sent to each component and arguments passed into
            functions.
          </li>
          <li>
            I utilized browser local storage to store non-sensitive user data
            and created a calendar using the Date API to highlight the current
            day of the week. Users can add airing anime to their watchlist,
            which gets stored in local storage.
          </li>
          <li>
            I developed sorting functions such as ascending, date, and score for
            the array of data returned from the API. I also created a search bar
            that fetches new data instead of filtering a current array.
          </li>
        </ul>

        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold text-center">
          Potential Additions/Improvements
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
          <li>Implement a more permanent storage solution for user-tracked anime.</li>
          <li>Update the UI to provide a better user experience.</li>
          <li>Add more data from the API to display on the anime cards.</li>
        </ul>
      </article>
    </div>
  )
}
