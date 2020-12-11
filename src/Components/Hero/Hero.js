import React from "react"
import HeroStyles from "./Hero.module.scss"
function Hero() {
  return (
    <div className={HeroStyles.appHero}>
      <h1>Hello, I am</h1>
      <h2>Mouhamadou Diouf</h2>
      <h3>I build things for the web.</h3>
      <p className={HeroStyles.description}>
        I'm a full-stack developer based in Dakar, Senegal. In specialize in
        building websites and web applications.
      </p>
      <button className={HeroStyles.ctaBtn}>Get In Touch</button>
    </div>
  )
}

export default Hero
