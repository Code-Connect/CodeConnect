import React, {Component, PropTypes} from "react";
import {Panel, ListGroup, ListGroupItem, Input, Button, FieldGroup} from "react-bootstrap";

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
                    <dev key={i}>
                        <Input onChange={this.handleChange(option) } type="checkbox" label={option}></Input>
                    </dev>
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
                        <ListGroup fill style={{
                            "fontSize": "15px"
                        }}>
                            {this.makeListGroupItems(filter)}
                        </ListGroup>
                    </Panel>

                );
            })
        } else {
            panels = (
                <Panel header="No listData!" eventKey={1}>
                    <p>
                        <span>Neat, but
                            <i>this.props.listData</i>
                            is empty.</span>
                    </p>
                </Panel>
            );
        }

        return (
            <div>
                {panels}
            </div>
        );
    }
}

export default SearchFilter;
