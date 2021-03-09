import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const contacts = () => {
  return (
    <Layout>
      <SEO title="Contacts" />
      <h1 className="project-title">Contacts</h1>
      <div className="underline"></div>
      <p>
        Do you have a project, you think I might play a role in bringing to
        life? Or maybe a suggestion, or any comment that might be useful. Do not
        hesitate. Get in touch below. I will try to get back to you as soon as
        possible.
      </p>
      <section className="contact-page">
        <article className="contact-form">
          <h3>Get in Touch</h3>
          <form action="https://formspree.io/f/xgepdoqo" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contacts
