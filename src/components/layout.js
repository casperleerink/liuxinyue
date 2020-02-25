//See: https://www.gatsbyjs.org/docs/use-static-query/
import React from "react"
import PropTypes from "prop-types"

import Menu from "./menu"
import "../layout.scss";



class Layout extends React.Component {
  render() {
    return (
        <div className="layout-container" >
          <Menu/>
          <main className="main-content">{this.props.children}</main>
        </div>
    )
        
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
