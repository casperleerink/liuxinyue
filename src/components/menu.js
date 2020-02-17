import React from "react"
// import styled from "styled-components"
import { Link } from "gatsby"
import Dropdown from "./dropdown"



class Menu extends React.Component {
  render() {
    return (
      <header>
        <div className="menu-item"><Link to="/about">About</Link></div>
        <Dropdown buttonContent="Still">
          <div className="dropdown-menu-item"><Link to="/ichf">I Came First</Link></div>
          <div className="dropdown-menu-item"><Link to="/ichf">I Came Second!</Link></div>
        </Dropdown>
        <div className="menu-item"><Link to="/move">Contact</Link></div>
      </header>
    )
  }
}


export default Menu
