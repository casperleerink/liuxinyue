import { Link } from "gatsby"
import React from "react"

class MenuItems extends React.Component {
    render() {
        const isExpanded = this.props.isExpanded;
        if (isExpanded) {
            return (
                <Link to="/about">About</Link>
                <Link to="/still">still</Link>
                <Link to="/move">Move</Link>
            )
        } else {
            return (
                <></>
            )
        }
    }
}

export default MenuItems