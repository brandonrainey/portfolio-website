import React from "react";

export default function Intro() {
  return (
    <div className="flex flex-col justify-center text-center mt-52 intro">
      <h1 className="font-bold text-2xl">Hi, im Brandon</h1>
      <div className="flex justify-center mt-4 introContainer">
        <p className="text-6xl w-1/3 text-center font-bold introText">
          I am an aspiring self-taught frontend developer seeking my first Junior Developer role.
        </p>
      </div>
      <p className="mt-4 introSubText">
        Focusing on the frontend using React, but open to learning new things.
      </p>
    </div>
  );
}
