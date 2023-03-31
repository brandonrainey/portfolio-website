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
          I used Next.js as my react framework as I do for most projects, as I
          find it the most feature rich and performant. For styling I used SCSS
          syntax.
        </li>
        <li>
          I also used TypeScript as default over JavaScript. Jest with React
          Testing Library is used for unit testing components.
        </li>
      </ul>

      <article className="flex flex-col items-center gap-6">
        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold">Description</h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
          <li>
            Four step application designed to be simplified to relevant
            information to a frontend developers.
          </li>
          <li>
            The first step has one form for name, one for email, and one for
            phone number. All three have placeholders and are outlined when
            focused.
          </li>
          <li>
            The second step is used to upload a resume. It uses the input file
            type to allow the user to upload thier resume from thier computer.
            The resume name is displayed after successfully uploading.
          </li>
          <li>
            The third step is a grid of checkboxes of frontend related
            technologies with an icon for each. The checkboxes are outlined when
            checked and persist through steps.
          </li>
          <li>
            The fourth step is a summary of all user entered information so far.
            With a section for personal info and with skills displayed in
            bubbles below. If each personal information is not entered, an error
            with display and the user cannot proceed to confirm for the final
            step.
          </li>
          <li>
            Once the user clicks confirm on the fourth step, a confirmation
            screen displays, showing a thank you message with some contact
            information.
          </li>
        </ul>

        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold">
          Challenges/What I Learned
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
          <li>
            First time using SCSS syntax in a project, so i was able to learn
            about the different additions it provides over vanilla CSS. For
            example i used a lot of the nesting structure, along with some
            mixins.
          </li>
          <li>
            The design for this website was taken from a FrontendMentor
            challenge, so I was able to practice taking the visual design given
            and construct it into an actual website. Since i altered the theme
            of the forms, I had to make my own pages for the resume upload and
            skill checkboxes.
          </li>
        </ul>

        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold text-center">
          Potential Additions/Improvements
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
          <li>
            Restrict the text users can enter into personal info fields and
            display an error
          </li>
          <li>Allow user to enter thier own skills in addition</li>
          <li>Allow user to edit thier info from the summary page</li>
        </ul>
      </article>
    </div>
  )
}
