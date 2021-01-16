import React from "react"
import { graphql, useStaticQuery } from "gatsby"
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
    <section>
      <div className="top-part">
        <div className="my-info ">
          <p className="subtitle">Hi, I'm Mola!</p>
          <p className="text">
            David Mola loves to create web applications with attractive user
            interfaces. Though he is an accountant graduate and currently doing
            his MBA, he has fallen in love with web and mobile application
            development. You can work with him to create something amazing...
          </p>
          <Sociallinks />
        </div>
        <div className="my-image">
          <Image fluid={fluid} />
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
