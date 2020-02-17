import React from "react"
import styled from "styled-components"
import MenuItems from "./menuItems"

const MenuStyle = styled.div`
    grid-column: 6 / 7;
    grid-row: 2 / 3;
`


class Menu extends React.Component {
  render() {
    const { isMobile, menuExpanded } = this.props;
    if (isMobile) {
      return (
        <header>
          <MenuStyle>
            <MenuItems isExpanded={ menuExpanded }/>
          </MenuStyle>
        </header>
      )
    } else {
      return (
        <header>
          <MenuStyle>
            <MenuItems isExpanded={ true } />
          </MenuStyle>
        </header>
      )
    }
  }
}


export default Menu
