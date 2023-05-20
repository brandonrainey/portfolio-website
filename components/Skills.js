import React from 'react'

export default function Skills() {
  return (
    <div className="flex justify-center mt-40 flex-col text-center">
      <h1 className="font-bold text-5xl sm:tracking-wide underline underline-offset-[16px] pb-8">
        Skills
      </h1>
      <div className="flex justify-center">
        <div className="flex justify-center items-end mt-6 gap-x-10 gap-y-6 flex-wrap w-5/6 max-w-[800px]">
          <div className="flex flex-col items-center group ">
            <img
              src="/htmlLogo.png"
              className="h-24 w-30 mt-2 mb-2"
              alt="html logo"
            />
            <div className="w-[70px] px-2 h-7 bg-[#3a688e] rounded-lg font-semibold mt-auto">
              HTML
            </div>
          </div>

          <div className="flex flex-col items-center justify-center group ">
            <img
              src="/cssLogo.png"
              className="h-28 w-30 cssLogo"
              alt="css logo"
            />
            <div className="w-auto px-2 h-7 bg-[#3a688e] bottom-0 right-[34px] rounded-lg font-semibold mt-auto">
              CSS
            </div>
          </div>
          <div className="flex flex-col items-center group">
            <img
              src="/jsIcon.png"
              className="h-20 w-26 mt-6 mb-2"
              alt="javascript logo"
            />
            <div className="w-auto px-2 h-7 bg-[#3a688e] bottom-0 sm:right-[-7px] right-[-10px] rounded-lg  font-semibold ">
              Javascript
            </div>
          </div>
          <div className="flex flex-col items-center group">
            <img
              src="/reactIcon.png"
              className="h-24 w-30 mt-4"
              alt="react logo"
            />
            <div className="w-auto px-2 h-7 bg-[#3a688e] bottom-0 right-[39px] rounded-lg font-semibold ">
              React
            </div>
          </div>
          <div className="flex flex-col items-center group">
            <img
              src="/typescriptIcon.png"
              className="h-20 w-26 mt-4 mb-2"
              alt="typescript logo"
            />
            <div className="w-auto px-2 h-7 bg-[#3a688e] bottom-0 right-[-7px] rounded-lg font-semibold  text-center">
              Typescript
            </div>
          </div>
          <div className="flex flex-col items-center group">
            <img
              src="/reduxIcon.png"
              className="h-20 w-30 mt-4 mb-2"
              alt="redux logo"
            />
            <div className="w-auto px-2 h-7 bg-[#3a688e] bottom-0 right-[12px] rounded-lg font-semibold ">
              Redux
            </div>
          </div>
          <div className="flex flex-col items-center group">
            <img
              src="/gitIcon.png"
              className="h-24 w-30 mt-4 mb-2"
              alt="git logo"
            />
            <div className="w-auto px-2 h-7 bg-[#3a688e] bottom-0 right-[30px] rounded-lg font-semibold ">
              Git
            </div>
          </div>
          <div className="flex flex-col items-center group">
            <img
              src={`/nextjsIconWhite.png`}
              className="h-24 w-30 mb-2 mt-6"
              alt="next js logo"
            />
            <div className="w-auto px-2 h-7 bg-[#3a688e] bottom-0 right-[50px] rounded-lg font-semibold ">
              Next.js
            </div>
          </div>
          <div className="flex flex-col items-center group">
            <img
              src="/tailwindIcon.png"
              className=" aspect-5/3 max-h-16 mb-2 mt-14"
              alt="tailwind css logo"
            />
            <div className="w-[124px]  px-2 h-7 bg-[#3a688e] bottom-0 right-[-6px] rounded-lg font-semibold ">
              Tailwind CSS
            </div>
          </div>
          <div className="flex flex-col items-center group">
            <img
              src="/firebaseIcon.png"
              className="h-28 w-30 mt-4"
              alt="firebase logo"
            />
            <div className="w-auto px-2 h-7 bg-[#3a688e] bottom-0 right-[16px] rounded-lg font-semibold ">
              Firebase
            </div>
          </div>
          <div className="flex flex-col items-center group">
            <img
              src="/sassLogo.png"
              className="h-24 w-30 mt-4 mb-2"
              alt="sass logo"
            />
            <div className="w-auto px-2 h-7 bg-[#3a688e] bottom-0 right-[16px] rounded-lg font-semibold mt-1">
              Sass/Scss
            </div>
          </div>
          <div className="flex flex-col items-center group">
            <img
              src="/jest-icon.png"
              className="h-24 w-30 mt-4 mb-2"
              alt="jest logo"
            />
            <div className="w-auto px-2 h-7 bg-[#3a688e] bottom-0 right-[16px] rounded-lg font-semibold ">
              Jest
            </div>
          </div>
          <div className="flex flex-col items-center group">
            <img
              src="/mongodbIcon.webp"
              className="h-24 w-30 mt-4 mb-2"
              alt="mongo db logo"
            />
            <div className="w-auto px-2 h-7 bg-[#3a688e] bottom-0 right-[16px] rounded-lg font-semibold ">
              MongoDB
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
