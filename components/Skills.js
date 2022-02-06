import React from "react";

export default function Skills() {
  return (
    <div className="flex justify-center mt-40 flex-col text-center">
      <h1 className="font-bold text-5xl">Technologies</h1>
      <div className="flex justify-center">
        <div className="flex justify-center mt-6 gap-x-10 gap-y-6 skills flex-wrap">
          <img src="/htmlLogo.png" className="h-24 w-30 mt-2" alt='html logo'/>
          <img src="/cssLogo.png" className="h-28 w-30 cssLogo" alt='css logo'/>
          <img src="/jsIcon.png" className="h-20 w-26 mt-6" alt='javascript logo'/>
          <img src="/reactIcon.png" className="h-24 w-30 mt-4" alt='react logo'/>
          <img src="/nextjsIcon.png" className="h-24 w-30" alt='next js logo'/>
          <img src="/tailwindIcon.png" className="h-20 w-28" alt='tailwind css logo'/>
        </div>
      </div>
    </div>
  );
}
