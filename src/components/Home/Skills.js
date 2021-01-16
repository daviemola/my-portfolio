import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const Skills = () => {
  const {
    img: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <>
      <h1 className="project-title">Web Dev Skills</h1>
      <div className="underline"></div>
      <div className="skills-section">
        <div className="skills-image">
          <Image fluid={fluid} />
        </div>
        <div className="skills-content">
          <p className="skills-intro">
            He loves <span>Javascript</span> as well as...
          </p>
          <ol>
            <li>HTML & CSS</li>
            <li>Node Js</li>
            <li>React Js</li>
            <li>Mongo DB</li>
            <li>Gatsby Js & more</li>
          </ol>
          <p className="text">
            <strong>MOTTO:</strong> Keep learning.
          </p>
        </div>
      </div>
    </>
  )
}

const query = graphql`
  {
    img: file(relativePath: { eq: "skills-img.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
          src
        }
      }
    }
  }
`

export default Skills
