//See: https://www.gatsbyjs.org/docs/use-static-query/

import React from "react"
import PropTypes from "prop-types"
// import styled from "styled-components"
import { Link } from "gatsby"
import { useMediaQuery } from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Menu from "./menu"
import "../layout.scss";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 651 })
  return isDesktop ? children : null
}

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 650 })
  return isMobile ? children : null
}





class Layout extends React.Component {
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
    let menu;
    if (menuExpanded) {
      //render the menu only if user clicks on bar icon
      menu = <Menu style={{
        display: "block",
        width: "100%",
        float: "left",
      }}/>
    } else {
      menu = null;
    }
    return (
    <div>
      <Mobile>
        <div className="mobile-container" >
          <h1 style={{
            display: "block",
            width: "90%",
            float: "left"
          }}>
            <Link to="/">Xinyue Liu</Link>
          </h1>
          <FontAwesomeIcon icon= {faBars} size= '2x' onClick= {this.handleToggle} className="bars"/>
          {menu}
          <main style= {{
            display:"block",
            width: "100%",
            float: "left",
          }}>{this.props.children}</main>
        </div>
      </Mobile>
      <Desktop>
        <div className="desktop-container">
          <h1 style={{
            display: "block",
            width: "100%",
            float: "left"
          }}>
            <Link to="/">Xinyue Liu</Link>
          </h1>
          <main style={{
            display: "block",
            width: "90%",
            float: "left",
          }} >{this.props.children}</main>
          <Menu style={{
            display: "block",
            width: "10%",
            float: "left",
          }} />
        </div>
      </Desktop>
    </div>
    )
        
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
