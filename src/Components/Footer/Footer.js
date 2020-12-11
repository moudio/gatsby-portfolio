import React from "react"
import FooterStyles from "./footer.module.scss"
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa"
function Footer() {
  return (
    <footer className={FooterStyles.footer}>
      <div className={FooterStyles.linksContainer}>
        <div className={FooterStyles.links}>
          <a href="https://www.linkedin.com/in/mouha-diouf/" target="_blank">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/MouhaDiouf/" target="_blank">
            <FaGithub />
          </a>
          <a href="https://twitter.com/mouhamadiouf" target="_blank">
            <FaTwitter />
          </a>
        </div>
      </div>
      <p>&copy; 2020 Mouhamadou</p>
    </footer>
  )
}

export default Footer
