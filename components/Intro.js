import React from "react";

export default function Intro() {
  return (
    <div className="flex flex-col justify-center text-center mt-52 intro">
      <h1 className="font-bold text-2xl tracking-wide">Hi, Im Brandon</h1>
      <div className="flex justify-center mt-4 introContainer">
        <p className="text-6xl w-1/3 text-center font-bold introText tracking-wide">
          I am a self-taught Frontend Developer who enjoys solving problems and creating websites people love to use.
        </p>
      </div>
      <p className="mt-4 introSubText tracking-wide">
        I am currently focusing on the Frontend using primarily React, <br/>
         but I am always open to learning new frameworks and languages.
      </p>
    </div>
  );
}
