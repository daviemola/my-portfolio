import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const Blog = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiBlogs: { nodes: blogs },
  } = data

  return (
    <>
      <h1 className="project-title">My Blog Posts</h1>
      <div className="underline"></div>
      {blogs.map(blog => (
        <Link to={`/blogs/${blog.slug}`} key={blog.id} className="blog-section">
          <div className="blog-section-content">
            <small>{blog.date}</small>
            <p className="project-item-title">{blog.title}</p>
            <p>{blog.description}</p>
            <div className="blog-categories">
              <div className="category">{blog.category}</div>
            </div>
          </div>
          <div className="blog-img">
            <Image fluid={blog.image.childImageSharp.fluid} />
          </div>
        </Link>
      ))}
      <div className="line"></div>
    </>
  )
}

const query = graphql`
  {
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        slug
        title
        date(formatString: "MMMM Do, YYYY")
        id
        description
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Blog