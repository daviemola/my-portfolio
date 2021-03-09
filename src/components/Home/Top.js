import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Sociallinks from "../constants/sociallinks"

const Top = () => {
  const {
    img: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  // const file = useStaticQuery(query)
  // console.log(file)

  return (
    <section className="top-section">
      <h1 className="project-title">About Me</h1>
      <div className="underline"></div>
      {/* <p className="subtitle">Hi, I'm Mola!</p> */}
      <div className="top-part">
        <div className="my-image">
          <Image fluid={fluid} />
        </div>
        <div className="my-info ">
          <p className="text">
            Hey David Mola here, I live by the motto{" "}
            <strong>"Learn, Build and Love."</strong> Meaning, I learn first and
            build projects with an aim of helping others. Its not how much you
            know but how what you know helps others. Let's work together and
            make the world a better place for others.
          </p>
          <Link to="/contacts" className="center-btn btn my-info-link">
            Work with me
          </Link>
          <Sociallinks styleClass="top-links" />
        </div>
      </div>
    </section>
  )
}

const query = graphql`
  {
    img: file(relativePath: { eq: "main.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Top
