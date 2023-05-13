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

export default function GameFeedback() {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="sm:text-6xl text-5xl mb-12 mt-4 px-4 font-semibold text-center">
        Game Feedback
      </h1>
      <Carousel
        responsive={responsive}
        itemClass={`image-item`}
        className="sm:w-5/6 w-full"
      >
        <img src="/game-feedback-SS.png" className=""></img>
        <img src="/game-feedback-SS2.png" className=""></img>
        <img src="/game-feedback-SS3.png" className=""></img>
        <img src="/game-feedback-SS4.png" className=""></img>
        
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
        For this project, I used Next.js as my React framework and SCSS for styling, as they offer rich features and streamline the
          development process. MongoDB was used as the backend, in conjunction with Next.js API routes.
        </li>
      </ul>

      <article className="flex flex-col items-center">
        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold text-center px-2">
          Description
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
          <li>
          This application allows users to view
            posts of game suggestions in sortable order. When signed in, users can upvote or
            downvote posts, create new posts, edit posts, comment on posts, and reply to comments. Posts can also be given
            a status to be viewed in a roadmap layout of suggestions.
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
            to create posts that are interactable by other users.
          </li>
          <li>
          I focused on improving responsive design by using fewer media
            queries and incorporating responsiveness with flexbox and percentage
            widths. 
          </li>
        </ul>

        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold text-center px-2">
          Potential Additions/Improvements
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
          <li>Revise the post user interface to be more visually appealing.</li>
          <li>
          Add more points of interaction on the interface/create animations
          </li>
          <li>Create more interactive messages on actions or errors taken by the user.</li>
        </ul>
      </article>
    </div>
  )
}
