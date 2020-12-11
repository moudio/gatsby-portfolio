import React from "react"
import Project from "../Project/Project"
import MoreProjectsStyle from "./moreProjects.module.scss"
function MoreProjects() {
  return (
    <div className={MoreProjectsStyle.container}>
      <div className={MoreProjectsStyle.title}>
        <h2>Other Projects</h2>
        <span></span>
      </div>
      <div className={MoreProjectsStyle.projectsContainer}>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  )
}

export default MoreProjects
