import React from "react"
import FooterStyles from "./footer.module.scss"
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa"
function Footer() {
  return (
    <footer className={FooterStyles.footer}>
      <div className={FooterStyles.linksContainer}>
        <div className={FooterStyles.links}>
          <FaLinkedinIn></FaLinkedinIn>
          <FaGithub></FaGithub>
          <FaTwitter></FaTwitter>
        </div>
      </div>
      <p>&copy; 2020 Mouhamadou</p>
    </footer>
  )
}

export default Footer
