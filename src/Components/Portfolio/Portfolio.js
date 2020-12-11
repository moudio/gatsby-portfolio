import React from "react"
import PortfolioStyles from "./portfolio.module.scss"
import FeaturedProject from "../FeaturedProject/FeaturedProject"
import data from "../../data"

function Portfolio() {
  const { featuredProjects } = data
  return (
    <div className={PortfolioStyles.portfolio}>
      <div className={PortfolioStyles.title}>
        <h2>What I have built</h2>
        <span></span>
      </div>
      <div>
        {featuredProjects.map(project => {
          return <FeaturedProject {...project} />
        })}
      </div>
    </div>
  )
}

export default Portfolio
