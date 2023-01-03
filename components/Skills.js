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
      <h1 className="font-bold text-5xl sm:tracking-wide underline underline-offset-[16px] pb-2">
        Skills
      </h1>
      <div className="flex justify-center">
        <motion.div className="flex justify-center items-center mt-6 gap-x-10 gap-y-6 sm:basis-5/12 basis-9/12 flex-wrap">
          <motion.img
            src="/htmlLogo.png"
            className="h-24 w-30 mt-2"
            alt="html logo"
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              delay: 0.2,
              x: { duration: 1 },
              default: { ease: 'linear' },
            }}
            
          />
          <motion.img
            src="/cssLogo.png"
            className="h-28 w-30 cssLogo"
            alt="css logo"
            ref={ref2}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView2 ? { opacity: 1, scale: 1 } : {}}
            transition={{
              delay: 0.2,
              x: { duration: 1 },
              default: { ease: 'linear' },
            }}
          />
          <motion.img
            src="/jsIcon.png"
            className="h-20 w-26 mt-6"
            alt="javascript logo"
            ref={ref3}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView3 ? { opacity: 1, scale: 1 } : {}}
            transition={{
              delay: 0.2,
              x: { duration: 1 },
              default: { ease: 'linear' },
            }}
          />
          <motion.img
            src="/reactIcon.png"
            className="h-24 w-30 mt-4"
            alt="react logo"
            ref={ref4}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView4 ? { opacity: 1, scale: 1 } : {}}
            transition={{
              delay: 0.2,
              x: { duration: 1 },
              default: { ease: 'linear' },
            }}
          />
          <motion.img
            src="/typescriptIcon.png"
            className="h-20 w-26 mt-4"
            alt="typescript logo"
            ref={ref5}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView4 ? { opacity: 1, scale: 1 } : {}}
            transition={{
              delay: 0.2,
              x: { duration: 1 },
              default: { ease: 'linear' },
            }}
          />
          <motion.img
            src="/reduxIcon.png"
            className="h-24 w-30 mt-4"
            alt="redux logo"
            ref={ref6}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView5 ? { opacity: 1, scale: 1 } : {}}
            transition={{
              delay: 0.2,
              x: { duration: 1 },
              default: { ease: 'linear' },
            }}
          />
          <motion.img
            src="/gitIcon.png"
            className="h-24 w-30 mt-4"
            alt="git logo"
            ref={ref7}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView6 ? { opacity: 1, scale: 1 } : {}}
            transition={{
              delay: 0.2,
              x: { duration: 1 },
              default: { ease: 'linear' },
            }}
          />
          <motion.img
            src={`${lightMode ? '/nextjsIcon.png' : '/nextjsIconWhite.png'}`}
            className="h-24 w-30"
            alt="next js logo"
            ref={ref8}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView7 ? { opacity: 1, scale: 1 } : {}}
            transition={{
              delay: 0.2,
              x: { duration: 1 },
              default: { ease: 'linear' },
            }}
          />
          <motion.img
            src="/tailwindIcon.png"
            className=" aspect-5/3 max-h-16"
            alt="tailwind css logo"
            ref={ref9}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView8 ? { opacity: 1, scale: 1 } : {}}
            transition={{
              delay: 0.2,
              x: { duration: 1 },
              default: { ease: 'linear' },
            }}
          />
          <motion.img
            src="/firebaseIcon.png"
            className="h-28 w-30 mt-4"
            alt="firebase logo"
            ref={ref10}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView9 ? { opacity: 1, scale: 1 } : {}}
            transition={{
              delay: 0.2,
              x: { duration: 1 },
              default: { ease: 'linear' },
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}
