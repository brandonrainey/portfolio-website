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

export default function RedditClone() {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="sm:text-6xl text-5xl mb-12 mt-4 px-4 font-semibold text-center">
        Reddit Clone
      </h1>
      <Carousel
        responsive={responsive}
        itemClass={`image-item`}
        className="sm:w-5/6 w-full"
      >
        <img src="/redditCloneSS.webp" className=""></img>
        <img src="/redditCloneSS2.webp" className=""></img>
        <img src="/redditCloneSS3.webp" className=""></img>
        <img src="/redditCloneSS4.webp" className=""></img>
        <img src="/redditCloneSS5.webp" className=""></img>
      </Carousel>

      <div className="flex flex-col items-center">
        <h2 className="sm:text-3xl text-2xl mt-4 font-semibold">
          Technology Used
        </h2>
        <div className="flex items-center gap-4  flex-wrap md:w-full w-5/6 justify-center mt-6">
          <img src="/reactIcon.png" className="h-20 w-30"></img>
          <img src={`/nextjsIconWhite.png`} className="h-20 w-30"></img>
          <img src="/tailwindIcon.png" className=" aspect-5/3 max-h-14"></img>
          <img src="/firebaseIcon.png" className="h-24 w-30"></img>
        </div>
      </div>
      <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
        <li>
        For this project, I used Next.js as my React framework and Tailwind
          CSS for styling, as they offer rich features and streamline the
          development process. Firebase was used as the backend, allowing me to
          focus more on the frontend.
        </li>
      </ul>

      <article className="flex flex-col items-center">
        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold text-center px-2">
          Description
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
          <li>
          This application, similar to Reddit, allows users to view subreddit
            posts in ascending order. When signed in, users can upvote or
            downvote posts, create new posts, and navigate through various
            subreddits. Users can also view comment threads and perform standard
            post actions when signed in.
          </li>
        </ul>

        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold text-center px-2">
          Challenges/What I Learned
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
          <li>
          I worked on simulating real-world CRUD functionality, where users
            sign in to an account with authentication and have their data sent
            to the database assigned to individual users.
          </li>

          <li>
          I created a slightly more complex database structure, allowing users
            to create subreddits that are interactable by other users.
          </li>
          <li>
          I focused on improving responsive design by using fewer media
            queries and incorporating responsiveness with flexbox and percentage
            widths. I also aimed to create a design similar to a popular website
            without making it a 1:1 clone.
          </li>
        </ul>

        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold text-center px-2">
          Potential Additions/Improvements
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
          <li>Enhance the post user interface to be more visually appealing.</li>
          <li>
          Refactor the data structure of the database for easier access and
            better organization.
          </li>
          <li>Implement a search bar to search through the list of subreddits.</li>
        </ul>
      </article>
    </div>
  )
}
