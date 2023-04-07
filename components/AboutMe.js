import React, { useRef, useEffect } from 'react'

export default function AboutMe(props) {
  const aboutMeDiv = useRef()

  useEffect(() => {
    if (props.aboutMeScroll === true) {
      aboutMeDiv.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      })
      props.setAboutMeScroll(false)
    }
  }, [props.aboutMeScroll])
  return (
    <div
      ref={aboutMeDiv}
      className={`flex justify-center mt-40 flex-col text-center bg-gradient-to-t to-[#13385c]/50 from-[#13385c]/50  md:w-3/4 py-8 self-center rounded-lg drop-shadow-lg `}
    >
      <h1 className="font-bold text-5xl sm:tracking-wide underline underline-offset-[16px] pb-2">
        About Me
      </h1>
      <article className="flex justify-center mt-6">
        <p className="sm:w-1/2 w-3/4 tracking-wide">
          As a 29-year-old Frontend Developer based in Goose Creek, South
          Carolina, I bring a passion for technology and a commitment to
          lifelong learning to the table. My coding journey began in high school
          with Java and C++ and has since evolved into a focus on web
          development, specifically HTML, CSS, and JavaScript.
          <br />
          <br />
          Over the past two years, I have been diligently teaching myself these
          technologies and have developed a particular affinity for creating
          websites and web apps using JavaScript and React. My enthusiasm for
          problem-solving and continuous learning keeps me motivated as I
          navigate this ever-evolving field. Outside of my professional
          interests, I enjoy staying up-to-date with the latest tech trends,
          playing and listening to music, PC gaming, and watching anime.
          <br />
          <br />
          Currently, I am actively seeking opportunities as a Frontend Developer
          and would be thrilled to contribute my skills and enthusiasm to your
          team. If you're looking for a dedicated and ambitious developer,
          please don't hesitate to reach out!
        </p>
      </article>
    </div>
  )
}
