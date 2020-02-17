//See: https://www.gatsbyjs.org/docs/use-static-query/

import React from "react"
import PropTypes from "prop-types"
// import styled from "styled-components"
import { Link } from "gatsby"
import Media from "react-media"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Menu from "./menu"
import "../layout.scss";

const widthBreakPoint = 768


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
  // this.data = useStaticQuery(graphql`
  //     query SiteTitleQuery {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `)

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
      <Media queries={{ small: { maxWidth: 599 } }}>
          {matches =>
            matches.small ? (
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
            ) : (
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
            )
          }
        </Media>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
