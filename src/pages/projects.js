import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { FaGithubSquare, FaLink } from "react-icons/fa"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const Projects = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <Layout>
      <SEO title={`Projects`} description={`David Mola's Projects`} />
      <h1 className="project-title page-header">My Projects</h1>
      <div className="underline"></div>
      {projects.map((project, index) => (
        <div className="projects-section" key={index}>
          <div className="projects-img">
            <Image fluid={project.image.childImageSharp.fluid} />
          </div>
          <div className="project-content">
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
    </Layout>
  )
}

const query = graphql`
  {
    allStrapiProjects {
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
