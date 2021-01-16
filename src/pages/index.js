import React from "react"
import Blog from "../components/Home/Blog"
import Projects from "../components/Home/Projects"
import Skills from "../components/Home/Skills"
import Top from "../components/Home/Top"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Top />
    <Skills />
    <Projects />
    <Blog />
  </Layout>
)

export default IndexPage
