import React, { useState } from "react";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Work from "../components/Projects";
import ToggleSwitch from "../components/ToggleSwitch";

export default function Home() {
  const [workScroll, setWorkScroll] = useState(false);
  const [aboutMeScroll, setAboutMeScroll] = useState(false);
  const [contactScroll, setContactScroll] = useState(false);

  const [lightMode, setLightMode] = useState(false);

  return (
    <div className={` ${lightMode ? 'lightModeBackground lightModeText' : null}`}>
      <ToggleSwitch 
        lightMode={lightMode}
        setLightMode={setLightMode}
      />
      <Header
        workScroll={workScroll}
        setWorkScroll={setWorkScroll}
        aboutMeScroll={aboutMeScroll}
        setAboutMeScroll={setAboutMeScroll}
        contactScroll={contactScroll}
        setContactScroll={setContactScroll}
        lightMode={lightMode}
        setLightMode={setLightMode}
      />
      <Intro />
      <Work 
        workScroll={workScroll} 
        setWorkScroll={setWorkScroll} 
        lightMode={lightMode}
        setLightMode={setLightMode}
        />
      <AboutMe
        aboutMeScroll={aboutMeScroll}
        setAboutMeScroll={setAboutMeScroll}
        lightMode={lightMode}
        setLightMode={setLightMode}
      />
      <Skills 
        lightMode={lightMode}
        setLightMode={setLightMode}
      />
      <Contact
        contactScroll={contactScroll}
        setContactScroll={setContactScroll}
        lightMode={lightMode}
        setLightMode={setLightMode}
      />
    </div>
  );
}
