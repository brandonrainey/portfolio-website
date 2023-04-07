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

export default function DeveloperApplication() {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="sm:text-6xl text-5xl sm:mb-12 mt-4 px-4 font-semibold text-center">
        Developer Application
      </h1>
      <Carousel
        responsive={responsive}
        itemClass={`image-item`}
        className="sm:w-5/6 w-full"
      >
        <img src="/applicationSS.png" className=""></img>
        <img src="/developer-application-SS2.png" className=""></img>
        <img src="/developer-application-SS3.png" className=""></img>
        <img src="/developer-application-SS4.png" className=""></img>
        <img src="/developer-application-SS5.png" className=""></img>
      </Carousel>

      <div className="flex flex-col items-center">
        <h2 className="sm:text-3xl text-2xl mt-4 font-semibold">
          Technology Used
        </h2>
        <div className="flex items-center gap-4  flex-wrap md:w-full w-5/6 justify-center mb-2 mt-6">
          <img src="/reactIcon.png" className="h-20 w-30 "></img>
          <img src="/typescriptIcon.png" className="h-16 w-26 "></img>
          <img src={`/nextjsIconWhite.png`} className="h-20 w-30"></img>
          <img src="/sassLogo.png" className="h-16 w-30"></img>
        </div>
      </div>
      <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
        <li>
          For this project, I used Next.js as my React framework and SCSS syntax
          for styling, as they offer rich features and streamline the
          development process. I also used TypeScript as the default language
          and Jest with React Testing Library for unit testing components.
        </li>
      </ul>

      <article className="flex flex-col items-center gap-6">
        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold">Description</h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
          <li>
            This is a four-step application designed specifically for frontend
            developers. It includes forms for personal information, resume
            upload, selection of frontend-related technologies, and a summary of
            all entered information. The application features validation, error
            messages, and a final confirmation screen with contact information.
          </li>
        </ul>

        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold">
          Challenges/What I Learned
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
          <li>
            I used SCSS syntax for the first time, learning about its various
            features, such as nesting structures and mixins.
          </li>
          <li>
            I used SCSS syntax for the first time, learning about its various
            features, such as nesting structures and mixins.
          </li>
        </ul>

        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold text-center">
          Potential Additions/Improvements
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
          <li>
            Restrict the text users can enter into personal info fields and
            display error messages accordingly.
          </li>
          <li>
            Allow users to enter their own skills in addition to the provided
            options.
          </li>
          <li>
            Enable users to edit their information directly from the summary
            page.
          </li>
        </ul>
      </article>
    </div>
  )
}
