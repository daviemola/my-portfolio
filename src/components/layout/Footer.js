import React from "react"
import Sociallinks from "../constants/sociallinks"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <Sociallinks styleClass="footer-links" />
        <h4>
          Copyright &copy;{new Date().getFullYear()}
          <span> David Mola. </span> All rights reserved.
        </h4>
        <p>Built with Gatsby and Strapi. Deployed on Netlify</p>
      </div>
    </footer>
  )
}

export default Footer
