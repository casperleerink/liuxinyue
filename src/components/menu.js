import React from "react"
// import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Dropdown from "./dropdown"

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuExpanded: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({
        menuExpanded: !this.state.menuExpanded
    });
  }
  render() {
    const { menuExpanded } = this.state;

    return (
      <header className="header">
        <div className="title">
          <h1><Link to="/">Xinyue Liu</Link></h1>
        </div>
        <FontAwesomeIcon icon= {faBars} size= '2x' onClick= {this.handleToggle} className="bars"/>
        <div className={`menu-items ${menuExpanded ? "expanded": ""}`} >
          <div className="menu-item"><Link to="/about">About</Link></div>
          <Dropdown buttonContent="Move">
            <div className="dropdown-menu-item"><Link to="/ichf">I Came First</Link></div>
            <div className="dropdown-menu-item"><Link to="/ichf">I Came Second!</Link></div>
          </Dropdown>
          <Dropdown buttonContent="Still">
            <div className="dropdown-menu-item"><Link to="/ichf">I Came First</Link></div>
            <div className="dropdown-menu-item"><Link to="/ichf">I Came Second!</Link></div>
          </Dropdown>
          <Dropdown buttonContent="A Collection of Writings">
            <div className="dropdown-menu-item"><Link to="/ichf">I Came First</Link></div>
            <div className="dropdown-menu-item"><Link to="/ichf">I Came Second!</Link></div>
          </Dropdown>
          <div className="menu-item"><Link to="/about">Lookt at me</Link></div>
          <div className="menu-item"><Link to="/move">Contact</Link></div>
        </div>
        
      </header>
    )
  }
}


export default Menu
