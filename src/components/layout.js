//See: https://www.gatsbyjs.org/docs/use-static-query/

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Menu from "./menu"
import "./layout.css"

const widthBreakPoint = 768

const LayoutDesktop = styled.div`
  display: grid;
  grid-gap: 0;
  grid-template-areas:
    'title title title title title menu'
    'main main main main main menu';
`
const LayoutMobile = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto auto auto auto auto;
  grid-template-rows: 100px auto;
  // grid-template-areas:
  //   'title title title title title bars'
  //   'menu menu menu menu menu menu'
  //   'main main main main main main';
`


const Title = styled.div`
  grid-column: 1 / 6;
  grid-row: 1 / 2;
  color: black;
`
const Bars = styled.div`
  grid-column: 6 / 7;
  grid-row: 1 / 2;
  cursor: pointer;
`

const Main = styled.div`
  grid-column: 1 / 6;
  grid-row: 2 / 3;
`

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuExpanded: false,
    };
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({
        menuExpanded: !this.state.menuExpanded
    });
  }

  render() {
    const data = useStaticQuery(graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)

    let width = window.innerWidth;
    if (width < widthBreakPoint) {
      //mobile view
      return (
        <LayoutMobile>
          <Title>
            <h1>
              <Link to="/">{data.site.siteMetadata.title}</Link>
            </h1>
          </Title>
          <Bars><FontAwesomeIcon icon={faBars} size='2x' onClick={e => this.handleToggle(e)}/></Bars>
          <Menu isMobile={true} menuExpanded={this.state.menuExpanded}/>
          <Main>{children}</Main>
        </LayoutMobile>
      )
    } else {
      //desktop view
      return (
        <LayoutDesktop>
          <Title>
            <h1><Link to="/">{data.site.siteMetadata.title}</Link></h1>
          </Title>
          <Main>{children}</Main>
          <Menu isMobile={false} /> 
        </LayoutDesktop>
      )
    }
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
