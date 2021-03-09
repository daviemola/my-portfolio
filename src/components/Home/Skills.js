import React from "react"
import { FaCode, FaSketch } from "react-icons/fa"

const Skills = () => {
  return (
    <div className="skill-section">
      <h1 className="project-title">What I do?</h1>
      <div className="underline"></div>
      <div className="skills-grid">
        <div className="first-skill">
          <h3>Front-End Developer</h3>
          <FaCode className="skills-icon" />
          <p>
            I build the visual components of a website using HTML, CSS and
            JavaScript, make them interactive, responsive and beautiful. I have
            some experience React js and its frameworks such as Gatsby and
            NextJs.
          </p>
        </div>
        <div className="second-skill">
          <h3>Back-End Developer</h3>
          <FaSketch className="skills-icon" />
          <p>
            I work with Databases, and ensuring access information from
            front-end to the backend. As well as collecting information from the
            front-end and storing in the database. I work with Nodejs, Mongodb,
            Express Js, mongoose and so on.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills
