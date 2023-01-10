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
        <div className="flex items-center gap-2  flex-wrap md:w-full w-5/6 justify-center mb-2">
          <img src="/reactIcon.png" className="h-20 w-30 mt-4"></img>
          <img src={`/nextjsIconWhite.png`} className="h-20 w-30"></img>
          <img src="/tailwindIcon.png" className=" aspect-5/3 max-h-14"></img>
          <img src="/firebaseIcon.png" className="h-24 w-30 mt-4"></img>
        </div>
      </div>
      <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
        <li>
          I used Next.js as my react framework as i do for most projects, as i
          find it the most feature rich and performant. Similarly i used
          Tailwind CSS to style this project as it helps streamline my building
          process. Another frequently used service by me is Firebase as the
          backend, mostly as its what im most familiar with, which allows me to
          focus on the frontend more.
        </li>
      </ul>

      <article className="flex flex-col items-center">
        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold text-center px-2">
          Description
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
          <li>
            Similar to reddit, the users can view the posts of a subreddit in
            ascending order. When signed in, the user can upvote or downvote a
            post, as well as create a post. There is a navigation of subreddits
            in the header, as well as to the right of posts, with a button to
            create a new subreddit under the ladder. After clicking to view a
            post, users can view the comment thread below, as well as normal
            post actions when signed in.
          </li>
        </ul>

        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold text-center px-2">
          Challenges/What I Learned
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
          <li>
            Worked on simulating real world CRUD functionality where users sign
            in to an account with auth, then have the data sent to the database
            assigned to individual users. I also tried to have a slightly more
            complex database structure than a basic project. Where in addition
            to user posts that are data connected to the user, giving the
            ability to create a subreddit which has a wider scope thats
            interactable by other users.
          </li>

          <li>
            Worked on creating smoother responsive design from desktop down to
            mobile by using less media queries, and adding responsiveness with
            flexbox and percentage widths. Also practiced being able to create a
            similar design to a popular website but not making it a 1:1 clone.
          </li>
        </ul>

        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold text-center px-2">
          Potential Additions/Improvements
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
          <li>Improve post user interface to be more appealing.</li>
          <li>
            Refactor data structure of database to make more sense/easier to
            access.
          </li>
          <li>Allow searchbar to search through list of subreddits</li>
        </ul>
      </article>
    </div>
  )
}
