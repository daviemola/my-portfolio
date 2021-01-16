import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { FaGithubSquare, FaLink } from "react-icons/fa"

const Projects = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <>
      <h1 className="project-title">Best Projects</h1>
      <div className="underline"></div>
      {projects.map((project, index) => (
        <div className="projects-section" key={index}>
          <div className="projects-img">
            <Image fluid={project.image.childImageSharp.fluid} />
          </div>
          <div className="project-content">
            <span>0{index + 1}</span>
            <p className="project-item-title">{project.title}</p>
            <p>{project.description}</p>
            <div className="project-stacks">
              {project.stack.map((item, index) => (
                <div key={index} className="stack">
                  {item.stack}
                </div>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} className="project-link">
                <FaGithubSquare className="projects-icon" />
              </a>
              <a href={project.url} className="project-link">
                <FaLink className="projects-icon" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        id
        title
        description
        featured
        github
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          stack
        }
      }
    }
  }
`

export default Projects
