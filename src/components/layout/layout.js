import React from "react"
import "./layout.css"
import Header from "./Header"
import Footer from "./Footer"

const layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default layout
