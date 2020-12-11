import React from "react"
import CTAStyles from "./cta.module.scss"
function CTA() {
  return (
    <div className={CTAStyles.container}>
      <h2>Want To Work With Me?</h2>
      <p>
        I am looking for opportunities.{" "}
        <a href="mailto:mouhamadoudioufsn@gmail.com">Let's work together</a>
      </p>
    </div>
  )
}

export default CTA
