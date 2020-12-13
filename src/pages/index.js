import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { Helmet } from "react-helmet"
import About from "../Components/About/About"

import CTA from "../Components/CTA/CTA"
import Hero from "../Components/Hero/Hero"
import Layout from "../Components/Layout"
import MoreProjects from "../Components/MoreProjects/MoreProjects"
import Portfolio from "../Components/Portfolio/Portfolio"
import HomeStyles from "./index.module.scss"
import balls from "../Images/balls.gif"
import "./index.scss"
import FadeIn from "../Components/FadeIn"

export default function Home() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  if (loading) {
    return (
      <div className={HomeStyles.ballsContainer}>
        <img src={balls} alt="balls" className={HomeStyles.balls} />
      </div>
    )
  }

  return (
    <>
      <FadeIn>
        <Layout>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Mouhamadou | Full-Stack Developer</title>
          </Helmet>
          <div className={HomeStyles.app}>
            <div className={HomeStyles.appContainer}>
              <Hero />
              <About />
              <Portfolio />
              <MoreProjects />
              <CTA />
            </div>
          </div>
        </Layout>
      </FadeIn>
    </>
  )
}
