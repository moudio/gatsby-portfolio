import React from "react"
import ProjectStyles from "./project.module.scss"
import { GrCode } from "react-icons/gr"
import { AiFillGithub } from "react-icons/ai"
import { FiExternalLink } from "react-icons/fi"
import { FaCode } from "react-icons/fa"
export default function Project({
  title,
  description,
  technologies,
  github,
  website,
}) {
  return (
    <div className={ProjectStyles.container}>
      <div className={ProjectStyles.iconContainer}>
        <FaCode className={ProjectStyles.icon} />
      </div>
      <div>
        <h3>{title}</h3>
        <div className={ProjectStyles.links}>
          <a href={github} target="_blank">
            <AiFillGithub />
          </a>
          <a href={website} target="_blank">
            <FiExternalLink />
          </a>
        </div>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  )
}
