import { Link } from "gatsby"
import React from "react"

const Header = () => {
  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 4,
      path: "/blog",
      text: "Blog",
    },
    {
      id: 2,
      path: "/projects",
      text: "Projects",
    },
    {
      id: 3,
      path: "/contacts",
      text: "Contacts",
    },
  ]

  return (
    <header>
      <Link to="/">
        <h1>David Mola</h1>
      </Link>
      <div className="underline-top"></div>
      <p>Web-Developer</p>
      <div className="header-links">
        {links.map(link => (
          <Link key={link.id} to={link.path} className="header-link">
            {link.text}
          </Link>
        ))}
      </div>
    </header>
  )
}

export default Header
