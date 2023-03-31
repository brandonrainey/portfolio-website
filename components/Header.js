import React from 'react'
import Head from 'next/head'

export default function Header(props) {
  return (
    <div className="flex h-40 headerContainer">
      <Head>
        <meta
          name="description"
          content="Personal frontend developer profile site of Brandon Rainey."
        />
        <title>My Portfolio</title>
      </Head>
      <h1 className="mt-auto ml-8 font-bold tracking-wide headerTitle">
        Frontend Developer Portfolio
      </h1>

      <nav className={`ml-auto mt-auto headerNav md:bg-inherit py-2 `}>
        <button
          onClick={() => props.setWorkScroll(true)}
          className={`sm:mr-6 tracking-wide hover:bg-[#626794] border-[#626794] border-2 px-2 py-[1px] rounded-2xl font-semibold `}
        >
          Projects
        </button>
        <button
          onClick={() => props.setAboutMeScroll(true)}
          className={`sm:mr-6 tracking-wide hover:bg-[#626794] border-[#626794] border-2 px-2 py-[1px] rounded-2xl font-semibold `}
        >
          About
        </button>
        <button
          onClick={() => props.setContactScroll(true)}
          className={`sm:mr-6 tracking-wide hover:bg-[#626794] border-[#626794] border-2 px-2 py-[1px] rounded-2xl font-semibold `}
        >
          Contact
        </button>
      </nav>
    </div>
  )
}
