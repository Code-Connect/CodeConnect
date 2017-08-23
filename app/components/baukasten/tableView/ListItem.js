import React, {Component} from "react"
import {Popover, OverlayTrigger} from "react-bootstrap"
import {goToAnchor} from 'react-scrollable-anchor'

class ListItem extends Component {

    constructor(props) {
        super(props)
        //props: Info Object
    }

    activate() {
        this.props.activate(this.props.id)
    }

    redirect() {
        console.log("g2" + this.props.goTo)
        goToAnchor(this.props.goTo + "" + this.props.id)
    }

    render() {
        return (
            <tr style={{
                cursor: "pointer"
            }} onMouseEnter={this.activate.bind(this)} onClick={this.redirect.bind(this)}>
                {
                    this.props.info.map(
                        (attr, index) => {
                            return <td key={index}>{attr}</td>
                        }
                    )
                }
            </tr>
        )
    }
}

export default ListItem
