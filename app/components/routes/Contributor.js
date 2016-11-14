import React, {Component, PropTypes} from "react";
import {Grid, Row, Col, Button, Panel, ListGroup, ListGroupItem, PageHeader} from "react-bootstrap";
import SearchFilter from "./views/SearchFilter.js";


class Contributor extends Component {

    render() {
        return (
            <div>
                <PageHeader style={ {textAlign: 'center'} }
                >
                    <span style={ {} }
                    >Select your Project</span>
                </PageHeader>
                <ListGroup>
                    <Grid fluid={ true }
                    >
                        <Row>
                            <Col xs={ 3 }
                                 md={ 2 }
                                 sm={ 2 }
                                 lg={ 2 }
                            >
                                <SearchFilter
                                    filter={ [{title: 'Platform'}, {title: 'Language'}, {title: 'Difficulty'}] }
                                    style={ {} }
                                ></SearchFilter>
                            </Col>
                            <Col xs={ 6 }
                                 md={ 10 }
                                 sm={ 10 }
                                 lg={ 10 }
                            >
                                <Panel header={ <h3><span
                                >Code Connect</span>
                                </h3> }
                                       bsStyle="warning"
                                >
                                    <span>The platform for coders to connect</span>
                                    <Panel
                                        header={ <h5><span
                                        >Tasks</span>
                                        </h5> }
                                        style={ {overflow: 'auto'} }
                                        collapsible={ true }
                                        defaultExpanded={ false }
                                        bsStyle="success"
                                    >
                                        <ListGroup fill={ true }
                                        >
                                            <ListGroupItem href="#"
                                                           active={ false }
                                                           style={ {minHeight: '50px'} }
                                            >
                                                <Button bsStyle="success"
                                                        style={ {cssFloat: 'right'} }
                                                        href="https://github.com/nithishr/codeConnect"
                                                >
                                                    <span>Default</span>
                                                </Button><span
                                            >10: Search Functionality in Navigation Bar</span>
                                            </ListGroupItem>
                                            <ListGroupItem href="#"
                                                           active={ false }
                                                           style={ {minHeight: '50px'} }
                                            >
                                                <Button bsStyle="success"
                                                        style={ {cssFloat: 'right'} }
                                                        href="https://github.com/nithishr/codeConnect"
                                                >
                                                    <span>Default</span>
                                                </Button><span
                                            >12: Improve load times</span>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Panel>
                                </Panel>
                                <Panel header={ <h3><span
                                >IceSlider</span>
                                </h3> }
                                       bsStyle="warning"
                                >
                                    <span>The platform for coders to connect</span>
                                    <Panel
                                        header={ <h5><span
                                        >Tasks</span>
                                        </h5> }
                                        style={ {overflow: 'auto'} }
                                        collapsible={ true }
                                        defaultExpanded={ false }
                                        bsStyle="success"
                                    >
                                        <ListGroup fill={ true }
                                        >
                                            <ListGroupItem href="#"
                                                           active={ false }
                                                           style={ {minHeight: '50px'} }
                                            >
                                                <Button bsStyle="success"
                                                        style={ {cssFloat: 'right'} }
                                                        href="https://github.com/gapsong/TowerDefense"
                                                >
                                                    <span>Default</span>
                                                </Button><span
                                            >11: Add Advertising</span>
                                            </ListGroupItem>
                                            <ListGroupItem href="#"
                                                           active={ false }
                                                           style={ {minHeight: '50px'} }
                                            >
                                                <Button bsStyle="success"
                                                        style={ {cssFloat: 'right'} }
                                                        href="https://github.com/gapsong/TowerDefense"
                                                >
                                                    <span>Default</span>
                                                </Button><span
                                            >13: Add MuteButton</span>
                                            </ListGroupItem>
                                            <ListGroupItem href="#"
                                                           active={ false }
                                                           style={ {minHeight: '50px'} }
                                            >
                                                <Button bsStyle="success"
                                                        style={ {cssFloat: 'right'} }
                                                        href="https://github.com/gapsong/TowerDefense"
                                                >
                                                    <span>Default</span>
                                                </Button><span
                                            >14: Redesign MainMenu</span>
                                            </ListGroupItem>
                                            <ListGroupItem href="#"
                                                           active={ false }
                                                           style={ {minHeight: '50px'} }
                                            >
                                                <Button bsStyle="success"
                                                        style={ {cssFloat: 'right'} }
                                                        href="https://github.com/gapsong/TowerDefense"
                                                >
                                                    <span>Default</span>
                                                </Button><span
                                            >16: Redesign Icon</span>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Panel>
                                </Panel>
                                <Panel header={ <h3><span
                                >TowerDefense</span>
                                </h3> }
                                       bsStyle="warning"
                                >
                                    <span>The platform for coders to connect</span>
                                    <Panel
                                        header={ <h5><span
                                        >Tasks</span>
                                        </h5> }
                                        style={ {overflow: 'auto'} }
                                        collapsible={ true }
                                        defaultExpanded={ false }
                                        bsStyle="success"
                                    >
                                        <ListGroup fill={ true }
                                        >
                                            <ListGroupItem href="#"
                                                           active={ false }
                                                           style={ {minHeight: '50px'} }
                                            >
                                                <Button bsStyle="success"
                                                        style={ {cssFloat: 'right'} }
                                                        href="https://github.com/gapsong/TowerDefense"
                                                >
                                                    <span>Default</span>
                                                </Button><span
                                            >11: Add Advertising</span>
                                            </ListGroupItem>
                                            <ListGroupItem href="#"
                                                           active={ false }
                                                           style={ {minHeight: '50px'} }
                                            >
                                                <Button bsStyle="success"
                                                        style={ {cssFloat: 'right'} }
                                                        href="https://github.com/gapsong/TowerDefense"
                                                >
                                                    <span>Default</span>
                                                </Button><span
                                            >13: Add MuteButton</span>
                                            </ListGroupItem>
                                            <ListGroupItem href="#"
                                                           active={ false }
                                                           style={ {minHeight: '50px'} }
                                            >
                                                <Button bsStyle="success"
                                                        style={ {cssFloat: 'right'} }
                                                        href="https://github.com/gapsong/TowerDefense"
                                                >
                                                    <span>Default</span>
                                                </Button><span
                                            >14: Redesign MainMenu</span>
                                            </ListGroupItem>
                                            <ListGroupItem href="#"
                                                           active={ false }
                                                           style={ {minHeight: '50px'} }
                                            >
                                                <Button bsStyle="success"
                                                        style={ {cssFloat: 'right'} }
                                                        href="https://github.com/gapsong/TowerDefense"
                                                >
                                                    <span>Default</span>
                                                </Button><span
                                            >16: Redesign Icon</span>
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

