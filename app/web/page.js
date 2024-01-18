import React from 'react'
import WebHero from '../components/web/WebHero'
import WebCarousel from '../components/web/WebCarousal'
import WebService from '../components/web/WebService'
import AboutMe from '../components/web/AboutMe'
import Projects from '../components/web/projects/Projects'
import Faq from '../components/uiux/Faq'
import Tools from '../components/web/Tools'

export default function page() {
  return (
    <main className="main-light dark:main-dark">
        <WebHero/>
        <WebCarousel/>
        <AboutMe/>
        <WebService/>
        <Projects/>
        <Tools/>
        <Faq/>
    </main>
  )
}
