import React from "react"
import Layout from "../Components/Layout"
import HomeStyles from "./index.module.scss"
import "./index.scss"

export default function Home() {
  return (
    <Layout>
      <div className={HomeStyles.app}>
        <div className={HomeStyles.appHero}>
          <h1>Hello, I am</h1>
          <h2>Mouhamadou Diouf</h2>
          <h3>I build things for the web.</h3>
          <p className={HomeStyles.description}>
            I'm a full-stack developer based in Dakar, Senegal. In specialize in
            building websites and web applications.
          </p>
          <button className={HomeStyles.ctaBtn}>Get In Touch</button>
        </div>
      </div>
    </Layout>
  )
}
