import React, {Component, PropTypes} from "react";
import {Panel, ListGroup, FieldGroup, FormControl, FormGroup, ControlLabel, HelpBlock} from "react-bootstrap";

//import SelectButton from  "./SelectButton";

class SearchFilter extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        };
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    makeListGroupItems(filter) {
        let listGroupItems;
        if (filter.options && filter.options.length > 0)
            listGroupItems = filter.options.map((option, i) => {
                return (
                    <div>empty Inside</div>
                );
            });
        return listGroupItems;
    }

    buildForm() {
        return (
            <form>
                <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationState()}
                >
                    <ControlLabel>Working example with validation</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>Validation is based on string length.</HelpBlock>
                </FormGroup>
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
                {this.buildForm}

                {panels}
            </div>
        );
    }
}

export default SearchFilter;
