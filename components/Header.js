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

      <nav className="ml-auto mt-auto headerNav md:bg-inherit bg-slate-800 py-2">
        <button
          onClick={() => props.setWorkScroll(true)}
          className="sm:mr-6 tracking-wide hover:text-teal-400"
        >
          Projects
        </button>
        <button
          onClick={() => props.setAboutMeScroll(true)}
          className="sm:mr-6 tracking-wide hover:text-teal-400"
        >
          About
        </button>
        <button
          onClick={() => props.setContactScroll(true)}
          className="sm:mr-6 tracking-wide hover:text-teal-400"
        >
          Contact
        </button>
      </nav>
    </div>
  )
}
