import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Skills({ lightMode }) {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const ref2 = useRef(null)
  const isInView2 = useInView(ref2)

  const ref3 = useRef(null)
  const isInView3 = useInView(ref3)

  const ref4 = useRef(null)
  const isInView4 = useInView(ref4)

  const ref5 = useRef(null)
  const isInView5 = useInView(ref5)

  const ref6 = useRef(null)
  const isInView6 = useInView(ref6)

  const ref7 = useRef(null)
  const isInView7 = useInView(ref7)

  const ref8 = useRef(null)
  const isInView8 = useInView(ref8)

  const ref9 = useRef(null)
  const isInView9 = useInView(ref9)

  const ref10 = useRef(null)
  const isInView10 = useInView(ref9)

  return (
    <div className="flex justify-center mt-40 flex-col text-center">
      <h1 className="font-bold text-5xl sm:tracking-wide underline underline-offset-[16px] pb-8">
        Skills
      </h1>
      <div className="flex justify-center">
        <div className="flex justify-center items-center mt-6 gap-x-10 gap-y-6 sm:basis-6/12 basis-11/12 flex-wrap ">
          <motion.div className="flex flex-col items-center group"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            delay: 0.2,
            x: { duration: 1 },
            default: { ease: 'linear' },
          }}
          ref={ref}
          >
            <img
              src="/htmlLogo.png"
              className="h-24 w-30 mt-2 mb-2"
              alt="html logo"
              
              
            />
            <div className="w-[70px] px-2 h-7 bg-[#3a688e] bottom-0 right-[18px] rounded-lg font-semibold ">
              HTML
            </div>
          </motion.div>

          <motion.div className="flex flex-col items-center group"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView2 ? { opacity: 1, scale: 1 } : {}}
          transition={{
            delay: 0.2,
            x: { duration: 1 },
            default: { ease: 'linear' },
          }}
          ref={ref2}
          >
            <img
              src="/cssLogo.png"
              className="h-28 w-30 cssLogo"
              alt="css logo"
              
            />
            <div className="w-auto px-2 h-7 bg-[#3a688e] bottom-0 right-[34px] rounded-lg font-semibold ">
              CSS
            </div>
          </motion.div>
          <motion.div className="flex flex-col items-center group"
          initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView3 ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: 0.2,
                x: { duration: 1 },
                default: { ease: 'linear' },
              }}
              ref={ref3}
          >
            <img
              src="/jsIcon.png"
              className="h-20 w-26 mt-6 mb-2"
              alt="javascript logo"
              
              
/>
            <div className="w-auto px-2 h-7 bg-[#3a688e] bottom-0 sm:right-[-7px] right-[-10px] rounded-lg  font-semibold ">
              Javascript
            </div>
          </motion.div>
          <motion.div className="flex flex-col items-center group"
          initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView4 ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: 0.2,
                x: { duration: 1 },
                default: { ease: 'linear' },
              }}
              ref={ref4}
          >
            <img
              src="/reactIcon.png"
              className="h-24 w-30 mt-4"
              alt="react logo"
              
              
/>
            <div className="w-auto px-2 h-7 bg-[#3a688e] bottom-0 right-[39px] rounded-lg font-semibold ">
              React
            </div>
          </motion.div>
          <motion.div className="flex flex-col items-center group"
          initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView5 ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: 0.2,
                x: { duration: 1 },
                default: { ease: 'linear' },
              }}
              ref={ref5}
          >
            <img
              src="/typescriptIcon.png"
              className="h-20 w-26 mt-4 mb-2"
              alt="typescript logo"
              

/>
            <div className="w-auto px-2 h-7 bg-[#3a688e] bottom-0 right-[-7px] rounded-lg font-semibold  text-center">
              Typescript
            </div>
          </motion.div>
          <motion.div className="flex flex-col items-center group"
          initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView6 ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: 0.2,
                x: { duration: 1 },
                default: { ease: 'linear' },
              }}
              ref={ref6}
          >
            <img
              src="/reduxIcon.png"
              className="h-20 w-30 mt-4 mb-2"
              alt="redux logo"
              

/>
            <div className="w-auto px-2 h-7 bg-[#3a688e] bottom-0 right-[12px] rounded-lg font-semibold ">
              Redux
            </div>
          </motion.div>
          <motion.div className="flex flex-col items-center group"
          initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView7 ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: 0.2,
                x: { duration: 1 },
                default: { ease: 'linear' },
              }}
              ref={ref7}
          >
            <img
              src="/gitIcon.png"
              className="h-24 w-30 mt-4 mb-2"
              alt="git logo"
              

/>
            <div className="w-auto px-2 h-7 bg-[#3a688e] bottom-0 right-[30px] rounded-lg font-semibold ">
              Git
            </div>
          </motion.div>
          <motion.div className="flex flex-col items-center group"
          initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView8 ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: 0.2,
                x: { duration: 1 },
                default: { ease: 'linear' },
              }}
              ref={ref8}
          >
            <img
              src={`${lightMode ? '/nextjsIcon.png' : '/nextjsIconWhite.png'}`}
              className="h-24 w-30 mb-2 mt-6"
              alt="next js logo"
              

/>
            <div className="w-auto px-2 h-7 bg-[#3a688e] bottom-0 right-[50px] rounded-lg font-semibold ">
              Next.js
            </div>
          </motion.div>
          <motion.div className="flex flex-col items-center group"
          initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView9 ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: 0.2,
                x: { duration: 1 },
                default: { ease: 'linear' },
              }}
              ref={ref9}
          >
            <img
              src="/tailwindIcon.png"
              className=" aspect-5/3 max-h-16 mb-2 mt-14"
              alt="tailwind css logo"
              

/>
            <div className="w-[124px]  px-2 h-7 bg-[#3a688e] bottom-0 right-[-6px] rounded-lg font-semibold ">
              Tailwind CSS
            </div>
          </motion.div>
          <motion.div className="flex flex-col items-center group"
          initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView10 ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: 0.2,
                x: { duration: 1 },
                default: { ease: 'linear' },
              }}
              ref={ref10}
          >
            <img
              src="/firebaseIcon.png"
              className="h-28 w-30 mt-4"
              alt="firebase logo"
              

            />
            <div className="w-auto px-2 h-7 bg-[#3a688e] bottom-0 right-[16px] rounded-lg font-semibold ">
              Firebase
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
