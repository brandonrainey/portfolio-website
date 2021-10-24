import React, { useRef, useEffect } from "react";

export default function AboutMe(props) {
  const aboutMeDiv = useRef();

  useEffect(() => {
    if (props.aboutMeScroll === true) {
      aboutMeDiv.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      props.setAboutMeScroll(false);
    }
  }, [props.aboutMeScroll]);
  return (
    <div
      ref={aboutMeDiv}
      className="flex justify-center mt-40 flex-col text-center"
    >
      <h1 className="font-bold text-5xl">About Me</h1>
      <div className="flex justify-center mt-6">
        <p className="w-1/2 aboutMeText">
          I am a 27 year old aspiring developer based out of Ladson, South Carolina. I attended college for 2 years studying Engineering, but I started my self taught developer journey
          about 6 months ago, focusing on the frontend. My intrests include Tech, Music, Video Games, and Anime, and I try 
          to reflect them in my projects. I am also interested in learning web3 to start dealing with cryptocurrency and NFTs.
          I enjoy creating websites and apps with javascript, but am also open to expanding my programming knowledge into other
          software engineering areas.
        </p>
      </div>
    </div>
  );
}
