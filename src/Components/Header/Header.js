import React from "react"
import HeaderStyles from "./Header.module.scss"
import { Link } from "gatsby"
function Header() {
  return (
    <nav className={HeaderStyles.nav}>
      <h1>
        <Link to="/">Mouha Diouf</Link>
      </h1>
      <ul className={HeaderStyles.leftNavigation}>
        <li>
          {" "}
          <Link to="/blog">Blog</Link>{" "}
        </li>
        <li>Work</li>
        <li>About</li>
        <li className={HeaderStyles.resumeLink}>Resume</li>
      </ul>
    </nav>
  )
}

export default Header
