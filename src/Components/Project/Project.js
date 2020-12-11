import React from "react"
import ProjectStyles from "./project.module.scss"
import { GrCode } from "react-icons/gr"
import { AiFillGithub } from "react-icons/ai"
import { FiExternalLink } from "react-icons/fi"
export default function Project() {
  return (
    <div className={ProjectStyles.container}>
      <div>
        <GrCode />
      </div>
      <div>
        <h3>Project</h3>
        <div>
          <AiFillGithub />
          <FiExternalLink />
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, esse
          temporibus debitis iste eos harum mollitia cumque, sed, optio
          consectetur autem ipsum molestiae at doloremque dignissimos quia neque
          voluptas. Quo!
        </p>
      </div>
    </div>
  )
}
