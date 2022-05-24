import React from 'react'
import Head from 'next/head'

export default function Header(props) {
  return (
    <div className="flex h-40">
      <Head>
        <meta
          name="description"
          content="Personal frontend developer profile site of Brandon Rainey."
        />
        <title>My Portfolio</title>
      </Head>
      <h1 className="mt-auto ml-8 font-bold tracking-wide">My Portfolio</h1>

      <nav className="ml-auto mt-auto">
        <button
          onClick={() => props.setWorkScroll(true)}
          className="mr-6 tracking-wide navButton"
        >
          Projects
        </button>
        <button
          onClick={() => props.setAboutMeScroll(true)}
          className="mr-6 tracking-wide navButton"
        >
          About
        </button>
        <button
          onClick={() => props.setContactScroll(true)}
          className="mr-6 tracking-wide navButton"
        >
          Contact
        </button>
      </nav>
    </div>
  )
}
