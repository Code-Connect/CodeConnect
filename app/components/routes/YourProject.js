import React, {Component, PropTypes} from "react";
import {Button, ListGroup, ListGroupItem, PageHeader} from "react-bootstrap";


class YourProject extends Component {

    render() {
        return (
            <div>
                <PageHeader style={ {textAlign: 'center'} }>
                    <span style={ {} }>Koddmm mal auf dein life klar</span>
                </PageHeader>
                <ListGroup>
                    <ListGroupItem href="#">
                        <table>
                            <thead>
                            <tr>
                                <th>
                                    <h3><span>add a Search Bar</span></h3>
                                </th>
                                <th>
                                    <Button bsStyle="info">
                                        <span>select</span>
                                    </Button>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <span>Search for files on The Website</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </ListGroupItem>
                    <ListGroupItem href="#">
                        <table>
                            <thead>
                            <tr>
                                <th>
                                    <h3><span>add contact Form</span></h3>
                                </th>
                                <th>
                                    <Button bsStyle="info">
                                        <span>select</span>
                                    </Button>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <span>Contact Form to get in touch with the owner of the Website</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}

export default YourProject;
