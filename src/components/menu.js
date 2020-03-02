import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// import Bars from '../images/menu.svg';

import Dropdown from "./dropdown"


const Menu = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const handleToggle = () => {
    setMenuExpanded(!menuExpanded);
  };
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      stills: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "\/still/"}}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
      moves: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "\/move/"}}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
    
  `)
  const stillDropdownItems = data.stills.edges.map((item) =>
      <div className="dropdown-menu-item">
        <Link to={`${item.node.fields.slug}`} activeClassName="link-active">
          {item.node.frontmatter.title}
        </Link>
      </div>
  );
  const moveDropdownItems = data.moves.edges.map((item) => 
    <div className="dropdown-menu-item">
      <Link to={`${item.node.fields.slug}`} activeClassName="link-active">
        {item.node.frontmatter.title}
      </Link>
    </div>
  );

  return (
    <header className="header">
      <div className="title">
        <h1><Link to="/">Xinyue Liu</Link></h1>
      </div>
      <FontAwesomeIcon icon= {faBars} onClick={handleToggle} className="bars"/>
      {/* <Bars onClick={handleToggle} className="bars"/> */}
      <div className={`menu-items ${menuExpanded ? "expanded": ""}`} >
        <hr size="1"/>
        <Dropdown buttonContent="Move">
          {moveDropdownItems}
        </Dropdown>
        <hr size="1"/>
        <Dropdown buttonContent="Still">
          {stillDropdownItems}
        </Dropdown>
        <hr size="1"/>
        <div className="menu-item"><Link to="/about" activeClassName="link-active">Look at me</Link></div>
        <hr size="1"/>
        <div className="menu-item"><Link to="/works" activeClassName="link-active">Works</Link></div>
      </div>
      
    </header>
  )
}



export default Menu
