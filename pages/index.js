import React, { useState } from "react";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Work from "../components/Projects";

export default function Home() {
  const [workScroll, setWorkScroll] = useState(false);
  const [aboutMeScroll, setAboutMeScroll] = useState(false);
  const [contactScroll, setContactScroll] = useState(false);

  return (
    <div className="font-custom">
      <Header
        workScroll={workScroll}
        setWorkScroll={setWorkScroll}
        aboutMeScroll={aboutMeScroll}
        setAboutMeScroll={setAboutMeScroll}
        contactScroll={contactScroll}
        setContactScroll={setContactScroll}
      />
      <Intro />
      <Work workScroll={workScroll} setWorkScroll={setWorkScroll} />
      <AboutMe
        aboutMeScroll={aboutMeScroll}
        setAboutMeScroll={setAboutMeScroll}
      />
      <Skills />
      <Contact
        contactScroll={contactScroll}
        setContactScroll={setContactScroll}
      />
    </div>
  );
}
