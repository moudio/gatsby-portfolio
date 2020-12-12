import React from "react"
import { useEffect } from "react"
import HeroStyles from "./Hero.module.scss"
import scrollTo from "gatsby-plugin-smoothscroll"
import HeroAnimation from "./HeroAnimation.module.scss"

function Hero() {
  useEffect(() => {
    // typeWriter()
  }, [])
  let i = 0
  const txt = "I build things for the web"
  const speed = 100
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("text").innerHTML += txt.charAt(i)
      i++
      setTimeout(typeWriter, speed)
    }
  }
  return (
    <div className={HeroStyles.appHero}>
      <h1>Hello, I am</h1>
      <h2>Mouhamadou Diouf</h2>
      <div className={HeroStyles.typewriter}>
        <h3 className={HeroAnimation.title}>I build things for the web</h3>
      </div>
      <p className={HeroStyles.description}>
        I'm a full-stack developer based in Dakar, Senegal. In specialize in
        building websites and web applications.
      </p>
      <button
        className={HeroStyles.ctaBtn}
        onClick={() => scrollTo(".contact")}
      >
        Get In Touch
      </button>
    </div>
  )
}

export default Hero
