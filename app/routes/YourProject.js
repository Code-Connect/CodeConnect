import React, {Component, PropTypes} from "react";
import {Button, ListGroup, ListGroupItem, PageHeader} from "react-bootstrap";
import NavBar from "./views/NavBar.js";


class YourProject extends Component {

    render() {
        return (
            <div>
                <NavBar params={ this.props.params } location={ this.props.location }></NavBar>
                <PageHeader style={ {textAlign: 'center'} }
                            params={ this.props.params }
                            location={ this.props.location }>
                    <span style={ {} }
                          params={ this.props.params }
                          location={ this.props.location }>Open Tasks</span>
                </PageHeader>
                <ListGroup params={ this.props.params } location={ this.props.location }>
                    <ListGroupItem href="#"
                                   params={ this.props.params }
                                   location={ this.props.location }>
                        <table params={ this.props.params } location={ this.props.location }>
                            <thead params={ this.props.params } location={ this.props.location }>
                            <tr params={ this.props.params } location={ this.props.location }>
                                <th params={ this.props.params } location={ this.props.location }>
                                    <h3 params={ this.props.params } location={ this.props.location }><span
                                        params={ this.props.params }
                                        location={ this.props.location }>add a Search Bar</span></h3>
                                </th>
                                <th params={ this.props.params } location={ this.props.location }>
                                    <span params={ this.props.params } location={ this.props.location }></span>
                                </th>
                                <th params={ this.props.params } location={ this.props.location }>
                                    <span params={ this.props.params } location={ this.props.location }></span>
                                </th>
                                <th params={ this.props.params } location={ this.props.location }>
                                    <Button bsStyle="info"
                                            params={ this.props.params }
                                            location={ this.props.location }>
                                        <span params={ this.props.params }
                                              location={ this.props.location }>select</span>
                                    </Button>
                                </th>
                            </tr>
                            </thead>
                            <tbody params={ this.props.params } location={ this.props.location }>
                            <tr params={ this.props.params } location={ this.props.location }>
                                <td params={ this.props.params } location={ this.props.location }>
                                    <span params={ this.props.params } location={ this.props.location }>Search for files on The Website</span>
                                </td>
                                <td params={ this.props.params } location={ this.props.location }>
                                    <span params={ this.props.params } location={ this.props.location }></span>
                                </td>
                                <td params={ this.props.params } location={ this.props.location }>
                                    <span params={ this.props.params } location={ this.props.location }></span>
                                </td>
                                <td params={ this.props.params } location={ this.props.location }>
                                    <span params={ this.props.params } location={ this.props.location }></span>
                                </td>
                                <td params={ this.props.params } location={ this.props.location }>
                                    <span params={ this.props.params } location={ this.props.location }></span>
                                </td>
                            </tr>
                            <tr params={ this.props.params } location={ this.props.location }>
                                <td params={ this.props.params } location={ this.props.location }>
                                    <span params={ this.props.params } location={ this.props.location }></span>
                                </td>
                                <td params={ this.props.params } location={ this.props.location }>
                                    <span params={ this.props.params } location={ this.props.location }></span>
                                </td>
                                <td params={ this.props.params } location={ this.props.location }>
                                    <span params={ this.props.params } location={ this.props.location }></span>
                                </td>
                                <td params={ this.props.params } location={ this.props.location }>
                                    <span params={ this.props.params } location={ this.props.location }></span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </ListGroupItem>
                    <ListGroupItem href="#"
                                   params={ this.props.params }
                                   location={ this.props.location }>
                        <table params={ this.props.params } location={ this.props.location }>
                            <thead params={ this.props.params } location={ this.props.location }>
                            <tr params={ this.props.params } location={ this.props.location }>
                                <th params={ this.props.params } location={ this.props.location }>
                                    <h3 params={ this.props.params } location={ this.props.location }><span
                                        params={ this.props.params }
                                        location={ this.props.location }>add contact Form</span></h3>
                                </th>
                                <th params={ this.props.params } location={ this.props.location }>
                                    <span params={ this.props.params } location={ this.props.location }></span>
                                </th>
                                <th params={ this.props.params } location={ this.props.location }>
                                    <span params={ this.props.params } location={ this.props.location }></span>
                                </th>
                                <th params={ this.props.params } location={ this.props.location }>
                                    <Button bsStyle="info"
                                            params={ this.props.params }
                                            location={ this.props.location }>
                                        <span params={ this.props.params }
                                              location={ this.props.location }>select</span>
                                    </Button>
                                </th>
                            </tr>
                            </thead>
                            <tbody params={ this.props.params } location={ this.props.location }>
                            <tr params={ this.props.params } location={ this.props.location }>
                                <td params={ this.props.params } location={ this.props.location }>
                                    <span params={ this.props.params } location={ this.props.location }>Contact Form to get in touch with the owner of the Website</span>
                                </td>
                                <td params={ this.props.params } location={ this.props.location }>
                                    <span params={ this.props.params } location={ this.props.location }></span>
                                </td>
                                <td params={ this.props.params } location={ this.props.location }>
                                    <span params={ this.props.params } location={ this.props.location }></span>
                                </td>
                                <td params={ this.props.params } location={ this.props.location }>
                                    <span params={ this.props.params } location={ this.props.location }></span>
                                </td>
                                <td params={ this.props.params } location={ this.props.location }>
                                    <span params={ this.props.params } location={ this.props.location }></span>
                                </td>
                            </tr>
                            <tr params={ this.props.params } location={ this.props.location }>
                                <td params={ this.props.params } location={ this.props.location }>
                                    <span params={ this.props.params } location={ this.props.location }></span>
                                </td>
                                <td params={ this.props.params } location={ this.props.location }>
                                    <span params={ this.props.params } location={ this.props.location }></span>
                                </td>
                                <td params={ this.props.params } location={ this.props.location }>
                                    <span params={ this.props.params } location={ this.props.location }></span>
                                </td>
                                <td params={ this.props.params } location={ this.props.location }>
                                    <span params={ this.props.params } location={ this.props.location }></span>
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

