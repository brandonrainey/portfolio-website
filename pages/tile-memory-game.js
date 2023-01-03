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

export default function TileMemoryGame() {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="sm:text-6xl text-5xl mb-12 mt-4 px-4 font-semibold text-center">
        Anime Database
      </h1>
      <Carousel
        responsive={responsive}
        itemClass={`image-item`}
        className="sm:w-5/6 w-full"
      >
        <img src="/tilegamess.webp" className=""></img>
        <img src="/tilegamess2.webp" className=""></img>
        <img src="/tilegamess3.webp" className=" "></img>
        <img src="/tilegamess4.webp" className=" "></img>
      </Carousel>

      <div className="flex flex-col items-center">
        <h2 className="sm:text-3xl text-2xl mt-4 font-semibold">
          Technology Used
        </h2>
        <div className="flex items-center gap-2  flex-wrap md:w-full w-5/6 justify-center mb-2">
          <img src="/reactIcon.png" className="h-20 w-30 mt-4"></img>
          <img src={`/nextjsIconWhite.png`} className="h-20 w-30"></img>
          <img src="/tailwindIcon.png" className=" aspect-5/3 max-h-14"></img>
        </div>
      </div>

      <article className="flex flex-col items-center">
        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold">
          What I Learned
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full text-lg">
          <li>
            Created a memory game based on minigames from other games, with
            different difficulty settings to challenge users. Was able to create
            the logic from scratch from observing how the game worked. Starts a
            countdown for the user to track which tiles are highlighted to
            memorize. When users click a tile, a check occurs to see if thier
            selection is contained in the array of correct answers. During
            gameplay correct tiles are highlighted green and incorrect red, once
            the win or loss condition is met, the game ends and displays a game
            end message.
          </li>
          <li>
            Worked on creating a smooth moving progress bar with both javascript
            and css to create a dynamic width percentage that can move at
            different speeds depending on game state.
          </li>
          <li></li>
        </ul>
      </article>
    </div>
  )
}
