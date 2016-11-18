import React, {Component, PropTypes} from "react";
import {Panel, ListGroup, Checkbox, FieldGroup} from "react-bootstrap";

//import SelectButton from  "./SelectButton";

class SearchFilter extends Component {
    handleClick(option) {
        console.log(option);

    }

    handleChange(option) {
        console.log(option);
//<Button block onClick={this.handleClick(option)}>{option} </Button>
    }

    makeListGroupItems(filter) {
        let listGroupItems;
        if (filter.options && filter.options.length > 0)
            listGroupItems = filter.options.map((option, i) => {
                return (
                    <Checkbox key={i}>{option}</Checkbox>
                );
            });
        return listGroupItems;
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
