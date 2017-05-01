import React, {Component, PropTypes} from "react";
import {Panel, ListGroup, FieldGroup} from "react-bootstrap";

class SearchFilter extends Component {
    handleChange(e) { //TODO fix is only called at setup
        console.log(e);
    }

    makeListGroupItems(filter) {
        let listGroupItems;
        if (filter.options && filter.options.length > 0)
            listGroupItems = filter.options.map((option, i) => {
                return (
                    <div key={i}
                         onChange={this.handleChange({option})}
                    >
                        <input type="checkbox"/> {option}
                    </div>
                );
            });
        return (
            <form>
                {listGroupItems}
            </form>
        );
    }

    render() {
        let panels;
        if (this.props.filter && this.props.filter.length > 0) {
            panels = this.props.filter.map((filter, i) => {
                return (
                    <Panel key={i} collapsible defaultExpanded bsStyle="success" header={filter.title}>
                        <ListGroup fill>
                            {this.makeListGroupItems(filter)}
                        </ListGroup>
                    </Panel>
                );
            })
        }

        return (
            <div>
                {panels}
            </div>
        );
    }
}

export default SearchFilter;
