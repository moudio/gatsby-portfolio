import React from "react"
import FeaturedProjectStyles from "./featuredproject.module.scss"
import AppointCar from "../../Images/appointment.jpg"
import { AiFillGithub } from "react-icons/ai"
import { FiExternalLink } from "react-icons/fi"
function Project({
  title,
  description,
  technologies,
  github,
  website,
  image,
  slug,
}) {
  return (
    <div className={`${FeaturedProjectStyles.projectContainer}`}>
      <div className={FeaturedProjectStyles.imageContainer}>
        <img src={image} alt={slug} />
      </div>
      <div className={FeaturedProjectStyles.textContainer}>
        <span>Featured Project</span>
        <h3>{title}</h3>
        <p className={FeaturedProjectStyles.description}>{description}</p>
        <div className={FeaturedProjectStyles.technologies}>
          {technologies.map((technology, idx) => (
            <span key={idx}>{technology}</span>
          ))}
        </div>
        <div className={FeaturedProjectStyles.links}>
          <a href={github} target="_blank">
            {" "}
            <AiFillGithub />
          </a>
          <a href={website} target="_blank">
            {" "}
            <FiExternalLink />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
