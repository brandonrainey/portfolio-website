import React from "react";

export default function Skills() {
  return (
    <div className="flex justify-center mt-40 flex-col text-center">
      <h1 className="font-bold text-5xl">Technologies</h1>
      <div className="flex justify-center">
        <div className="flex justify-center mt-6 gap-x-10 gap-y-6 skills flex-wrap">
          <img src="/cssLogo.png" className="h-28 w-30" />
          <img src="/htmlLogo.png" className="h-24 w-30 mt-2" />
          <img src="/jsIcon.png" className="h-20 w-26 mt-6" />
          <img src="/reactIcon.png" className="h-24 w-30 mt-4" />
          <img src="/nextjsIcon.png" className="h-24 w-30" />
          <img src="/tailwindIcon.png" className="h-20 w-28" />
        </div>
      </div>
    </div>
  );
}
