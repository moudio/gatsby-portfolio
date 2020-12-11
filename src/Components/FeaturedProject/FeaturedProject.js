import React from "react"
import FeaturedProjectStyles from "./featuredproject.module.scss"
import AppointCar from "../../Images/appointment.jpg"
import { AiFillGithub } from "react-icons/ai"
import { FiExternalLink } from "react-icons/fi"
function Project() {
  return (
    <div className={`${FeaturedProjectStyles.projectContainer}`}>
      <div className={FeaturedProjectStyles.imageContainer}>
        <img src={AppointCar} alt="Appointcar" />
      </div>
      <div className={FeaturedProjectStyles.textContainer}>
        <span>Featured Project</span>
        <h3>AppointCar</h3>
        <p className={FeaturedProjectStyles.description}>
          A car appointment app. Create your profile and book for your next
          favorite car
        </p>
        <div className={FeaturedProjectStyles.technologies}>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>ReactJs</span>
        </div>
        <div className={FeaturedProjectStyles.links}>
          <AiFillGithub />
          <FiExternalLink />
        </div>
      </div>
    </div>
  )
}

export default Project
