import React, {Component, PropTypes} from "react";
import {Grid, Row, Col, Button, Panel, ListGroup, ListGroupItem, PageHeader} from "react-bootstrap";
import NavBar from "./views/NavBar.js";
import SearchFilter from "./views/SearchFilter.js";


class Contributor extends Component {

    render() {
        return (
            <div>
                <NavBar params={ this.props.params } location={ this.props.location }></NavBar>
                <PageHeader style={ {textAlign: 'center'} }
                            params={ this.props.params }
                            location={ this.props.location }>
                    <span style={ {} }
                          params={ this.props.params }
                          location={ this.props.location }>Select your Project</span>
                </PageHeader>
                <ListGroup params={ this.props.params } location={ this.props.location }>
                    <Grid fluid={ true }
                          params={ this.props.params }
                          location={ this.props.location }>
                        <Row params={ this.props.params } location={ this.props.location }>
                            <Col xs={ 3 }
                                 md={ 2 }
                                 sm={ 2 }
                                 lg={ 2 }
                                 params={ this.props.params }
                                 location={ this.props.location }>
                                <SearchFilter
                                    filter={ [{title: 'Platform'}, {title: 'Language'}, {title: 'Difficulty'}] }
                                    style={ {} }
                                    params={ this.props.params }
                                    location={ this.props.location }></SearchFilter>
                            </Col>
                            <Col xs={ 6 }
                                 md={ 10 }
                                 sm={ 10 }
                                 lg={ 10 }
                                 params={ this.props.params }
                                 location={ this.props.location }>
                                <Panel header={ <h3 params={ this.props.params } location={ this.props.location }><span
                                    params={ this.props.params } location={ this.props.location }>Code Connect</span>
                                </h3> }
                                       bsStyle="warning"
                                       params={ this.props.params }
                                       location={ this.props.location }>
                                    <span params={ this.props.params } location={ this.props.location }>The platform for coders to connect</span>
                                    <Panel
                                        header={ <h5 params={ this.props.params } location={ this.props.location }><span
                                            params={ this.props.params } location={ this.props.location }>Tasks</span>
                                        </h5> }
                                        style={ {overflow: 'auto'} }
                                        collapsible={ true }
                                        defaultExpanded={ false }
                                        bsStyle="success"
                                        params={ this.props.params }
                                        location={ this.props.location }>
                                        <ListGroup fill={ true }
                                                   params={ this.props.params }
                                                   location={ this.props.location }>
                                            <ListGroupItem href="#"
                                                           active={ false }
                                                           style={ {minHeight: '50px'} }
                                                           params={ this.props.params }
                                                           location={ this.props.location }>
                                                <Button bsStyle="success"
                                                        style={ {cssFloat: 'right'} }
                                                        href="https://github.com/nithishr/codeConnect"
                                                        params={ this.props.params }
                                                        location={ this.props.location }>
                                                    <span params={ this.props.params } location={ this.props.location }>Default</span>
                                                </Button><span params={ this.props.params }
                                                               location={ this.props.location }>10: Search Functionality in Navigation Bar</span>
                                            </ListGroupItem>
                                            <ListGroupItem href="#"
                                                           active={ false }
                                                           style={ {minHeight: '50px'} }
                                                           params={ this.props.params }
                                                           location={ this.props.location }>
                                                <Button bsStyle="success"
                                                        style={ {cssFloat: 'right'} }
                                                        href="https://github.com/nithishr/codeConnect"
                                                        params={ this.props.params }
                                                        location={ this.props.location }>
                                                    <span params={ this.props.params } location={ this.props.location }>Default</span>
                                                </Button><span params={ this.props.params }
                                                               location={ this.props.location }>12: Improve load times</span>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Panel>
                                </Panel>
                                <Panel header={ <h3 params={ this.props.params } location={ this.props.location }><span
                                    params={ this.props.params } location={ this.props.location }>IceSlider</span>
                                </h3> }
                                       bsStyle="warning"
                                       params={ this.props.params }
                                       location={ this.props.location }>
                                    <span params={ this.props.params } location={ this.props.location }>The platform for coders to connect</span>
                                    <Panel
                                        header={ <h5 params={ this.props.params } location={ this.props.location }><span
                                            params={ this.props.params } location={ this.props.location }>Tasks</span>
                                        </h5> }
                                        style={ {overflow: 'auto'} }
                                        collapsible={ true }
                                        defaultExpanded={ false }
                                        bsStyle="success"
                                        params={ this.props.params }
                                        location={ this.props.location }>
                                        <ListGroup fill={ true }
                                                   params={ this.props.params }
                                                   location={ this.props.location }>
                                            <ListGroupItem href="#"
                                                           active={ false }
                                                           style={ {minHeight: '50px'} }
                                                           params={ this.props.params }
                                                           location={ this.props.location }>
                                                <Button bsStyle="success"
                                                        style={ {cssFloat: 'right'} }
                                                        href="https://github.com/gapsong/TowerDefense"
                                                        params={ this.props.params }
                                                        location={ this.props.location }>
                                                    <span params={ this.props.params } location={ this.props.location }>Default</span>
                                                </Button><span params={ this.props.params }
                                                               location={ this.props.location }>11: Add Advertising</span>
                                            </ListGroupItem>
                                            <ListGroupItem href="#"
                                                           active={ false }
                                                           style={ {minHeight: '50px'} }
                                                           params={ this.props.params }
                                                           location={ this.props.location }>
                                                <Button bsStyle="success"
                                                        style={ {cssFloat: 'right'} }
                                                        href="https://github.com/gapsong/TowerDefense"
                                                        params={ this.props.params }
                                                        location={ this.props.location }>
                                                    <span params={ this.props.params } location={ this.props.location }>Default</span>
                                                </Button><span params={ this.props.params }
                                                               location={ this.props.location }>13: Add MuteButton</span>
                                            </ListGroupItem>
                                            <ListGroupItem href="#"
                                                           active={ false }
                                                           style={ {minHeight: '50px'} }
                                                           params={ this.props.params }
                                                           location={ this.props.location }>
                                                <Button bsStyle="success"
                                                        style={ {cssFloat: 'right'} }
                                                        href="https://github.com/gapsong/TowerDefense"
                                                        params={ this.props.params }
                                                        location={ this.props.location }>
                                                    <span params={ this.props.params } location={ this.props.location }>Default</span>
                                                </Button><span params={ this.props.params }
                                                               location={ this.props.location }>14: Redesign MainMenu</span>
                                            </ListGroupItem>
                                            <ListGroupItem href="#"
                                                           active={ false }
                                                           style={ {minHeight: '50px'} }
                                                           params={ this.props.params }
                                                           location={ this.props.location }>
                                                <Button bsStyle="success"
                                                        style={ {cssFloat: 'right'} }
                                                        href="https://github.com/gapsong/TowerDefense"
                                                        params={ this.props.params }
                                                        location={ this.props.location }>
                                                    <span params={ this.props.params } location={ this.props.location }>Default</span>
                                                </Button><span params={ this.props.params }
                                                               location={ this.props.location }>16: Redesign Icon</span>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Panel>
                                </Panel>
                                <Panel header={ <h3 params={ this.props.params } location={ this.props.location }><span
                                    params={ this.props.params } location={ this.props.location }>TowerDefense</span>
                                </h3> }
                                       bsStyle="warning"
                                       params={ this.props.params }
                                       location={ this.props.location }>
                                    <span params={ this.props.params } location={ this.props.location }>The platform for coders to connect</span>
                                    <Panel
                                        header={ <h5 params={ this.props.params } location={ this.props.location }><span
                                            params={ this.props.params } location={ this.props.location }>Tasks</span>
                                        </h5> }
                                        style={ {overflow: 'auto'} }
                                        collapsible={ true }
                                        defaultExpanded={ false }
                                        bsStyle="success"
                                        params={ this.props.params }
                                        location={ this.props.location }>
                                        <ListGroup fill={ true }
                                                   params={ this.props.params }
                                                   location={ this.props.location }>
                                            <ListGroupItem href="#"
                                                           active={ false }
                                                           style={ {minHeight: '50px'} }
                                                           params={ this.props.params }
                                                           location={ this.props.location }>
                                                <Button bsStyle="success"
                                                        style={ {cssFloat: 'right'} }
                                                        href="https://github.com/gapsong/TowerDefense"
                                                        params={ this.props.params }
                                                        location={ this.props.location }>
                                                    <span params={ this.props.params } location={ this.props.location }>Default</span>
                                                </Button><span params={ this.props.params }
                                                               location={ this.props.location }>11: Add Advertising</span>
                                            </ListGroupItem>
                                            <ListGroupItem href="#"
                                                           active={ false }
                                                           style={ {minHeight: '50px'} }
                                                           params={ this.props.params }
                                                           location={ this.props.location }>
                                                <Button bsStyle="success"
                                                        style={ {cssFloat: 'right'} }
                                                        href="https://github.com/gapsong/TowerDefense"
                                                        params={ this.props.params }
                                                        location={ this.props.location }>
                                                    <span params={ this.props.params } location={ this.props.location }>Default</span>
                                                </Button><span params={ this.props.params }
                                                               location={ this.props.location }>13: Add MuteButton</span>
                                            </ListGroupItem>
                                            <ListGroupItem href="#"
                                                           active={ false }
                                                           style={ {minHeight: '50px'} }
                                                           params={ this.props.params }
                                                           location={ this.props.location }>
                                                <Button bsStyle="success"
                                                        style={ {cssFloat: 'right'} }
                                                        href="https://github.com/gapsong/TowerDefense"
                                                        params={ this.props.params }
                                                        location={ this.props.location }>
                                                    <span params={ this.props.params } location={ this.props.location }>Default</span>
                                                </Button><span params={ this.props.params }
                                                               location={ this.props.location }>14: Redesign MainMenu</span>
                                            </ListGroupItem>
                                            <ListGroupItem href="#"
                                                           active={ false }
                                                           style={ {minHeight: '50px'} }
                                                           params={ this.props.params }
                                                           location={ this.props.location }>
                                                <Button bsStyle="success"
                                                        style={ {cssFloat: 'right'} }
                                                        href="https://github.com/gapsong/TowerDefense"
                                                        params={ this.props.params }
                                                        location={ this.props.location }>
                                                    <span params={ this.props.params } location={ this.props.location }>Default</span>
                                                </Button><span params={ this.props.params }
                                                               location={ this.props.location }>16: Redesign Icon</span>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Panel>
                                </Panel>
                            </Col>
                        </Row>
                    </Grid>
                </ListGroup>
            </div>
        );
    }
}

export default Contributor;

