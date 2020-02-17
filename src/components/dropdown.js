import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons'

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        };
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(e) {
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded
        });
    }

    render() {
        const { isExpanded } = this.state;
        let content;
        if (isExpanded) {
            content = this.props.children;
        } else {
            content = false;
        }
        return (
            <div>
                <div className="menu-item">
                    <p onClick={this.handleToggle} style={{cursor: "pointer", display: "inline"}} >
                        <FontAwesomeIcon icon= { isExpanded ? faCaretDown : faCaretRight } size="xs"/>
                        {` `}
                        {this.props.buttonContent}
                    </p>
                </div>
                <div>
                    { content }
                </div>
            </div>
        )
    }
}

export default Dropdown;