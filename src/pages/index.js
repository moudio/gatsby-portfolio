import React from "react"
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
