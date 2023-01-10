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
        Tile Memory Game
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
      <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
        <li>
          I used Next.js as my react framework as i do for most projects, as i
          find it the most feature rich and performant. Similarly i used
          Tailwind CSS to style this project as it helps streamline my building
          process.
        </li>
      </ul>

      <article className="flex flex-col items-center">
        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold text-center">
          Description
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
          <li>
            A tile memory game where the goal is to memorize a series of tiles
            in a certain amount of time. When the user clicks start, a timer
            countdown begins where a random array of tiles will highlight black
            and they must memorize their positions. After the countdown expires,
            another timer begins and all tiles are reverted back to their
            original color. The user must then attempt to click the same
            positions of the tiles that highlighted black in the beginning. When
            a correct tile is clicked it turns green, when incorrect it turns
            red. If the user correctly guesses all of the tiles, the game won
            message will appear, alternatively if the loss condition is met
            first the game over message appears.
          </li>
          <li>
            There are three levels for each mode, which increases the size of
            the grid. Hard mode changes the original game to where tiles now
            have a sequence of numbers and the user must click them in the
            correct order, such as 1..2..3..etc., and allows for no incorrect
            clicks.
          </li>
        </ul>

        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold">
          Challenges/What I Learned
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full text-lg">
          <li>
            Created a memory game based on minigames from other games, with
            different difficulty settings to challenge users. Was able to create
            the logic from scratch from observing how the game worked. Starts a
            countdown for the user to track which tiles are highlighted to
            memorize. When users click a tile, a check occurs to see if their
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

        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold text-center">
          Potential Additions/Improvements
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
          <li>
            Add more levels and more game modes that can utilize a grid of
            tiles.
          </li>
          <li>Add animations to make it more alive/game-like.</li>
        </ul>
      </article>
    </div>
  )
}
