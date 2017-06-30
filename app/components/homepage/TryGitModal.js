import React, {Component} from "react";
import {Button, ButtonToolbar, Modal} from "react-bootstrap";

class TryGitModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    render() {
        return (
            <ButtonToolbar>
                <Button bsStyle="primary" onClick={this.showModal.bind(this)}>
                    How to use GitHub
                </Button>

                <Modal
                    {...this.props}
                    show={this.state.show}
                    onHide={this.hideModal.bind(this)}
                    dialogClassName="custom-modal">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">How to use GitHub</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <iframe className="try-git" name="try-git" scrolling="no" src="https://try.github.io/"/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.hideModal.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </ButtonToolbar>
        );
    }

    showModal() {
        this.setState({show: true});
    }

    hideModal() {
        this.setState({show: false});
    }
}

export default TryGitModal;