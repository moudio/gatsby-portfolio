import React from "react"
import Project from "../Project/Project"
import MoreProjectsStyle from "./moreProjects.module.scss"
import data from "../../data"
function MoreProjects() {
  const { otherProjects } = data
  return (
    <div className={MoreProjectsStyle.container}>
      <div className={MoreProjectsStyle.title}>
        <h2>Other Projects</h2>
        <span></span>
      </div>
      <div className={MoreProjectsStyle.projectsContainer}>
        {otherProjects.map((project, idx) => (
          <Project key={idx} {...project} />
        ))}
      </div>
    </div>
  )
}

export default MoreProjects
