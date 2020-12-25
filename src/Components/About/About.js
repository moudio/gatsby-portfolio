import React from "react"
import AboutStyles from "./about.module.scss"
import Profile from "../../Images/mouha.jpg"
function About() {
  return (
    <div className={AboutStyles.about}>
      <div className={AboutStyles.title}>
        <h3>About Me</h3>
        <span></span>
      </div>
      <div className={AboutStyles.contentImage}>
        <div className={AboutStyles.content}>
          <p>
            Hello, I am Mouhamadou, and I am a full-stack web developer based in
            Dakar Senegal.
            <p>
              Technology has always been an interest for me. And I discovered
              that passion while working as a food engineer.
            </p>
          </p>
          <p>
            So I decided to follow my passion and apply at Microverse to become
            a developer.{" "}
          </p>

          <p>
            {" "}
            Now I am in the top 3% web developers among 38K developers around
            the world (according to{" "}
            <a href="https://codersrank.io/" target="_blank">
              Codersrank
            </a>{" "}
            ).
          </p>
          <p>
            I am now ready to offer my skills to the marketplace and am looking
            for opportunities.
          </p>
          <p> Here are the technologies I work with:</p>
          <div className={AboutStyles.technologiesContainer}>
            <ul>
              <li>HTML & CSS</li>
              <li>JavaScript (ES6+)</li>
            </ul>
            <ul>
              <li>Ruby On Rails</li>
              <li>React</li>
              <li>Gatsby</li>
            </ul>
          </div>
        </div>
        <div className={AboutStyles.pictureContainer}>
          <img src={Profile} alt="Profile Picture" />
        </div>
      </div>
    </div>
  )
}

export default About
