import React from "react"
import PortfolioStyles from "./portfolio.module.scss"
import FeaturedProject from "../FeaturedProject/FeaturedProject"
function Portfolio() {
  return (
    <div className={PortfolioStyles.portfolio}>
      <div className={PortfolioStyles.title}>
        <h2>What I have built</h2>
        <span></span>
      </div>
      <div>
        <FeaturedProject />
        <FeaturedProject />
      </div>
    </div>
  )
}

export default Portfolio
