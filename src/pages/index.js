import React from "react"
import { Helmet } from "react-helmet"
import About from "../Components/About/About"
import CTA from "../Components/CTA/CTA"
import Hero from "../Components/Hero/Hero"
import Layout from "../Components/Layout"
import MoreProjects from "../Components/MoreProjects/MoreProjects"
import Portfolio from "../Components/Portfolio/Portfolio"
import HomeStyles from "./index.module.scss"
import "./index.scss"

export default function Home() {
  return (
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
  )
}
