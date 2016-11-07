import React, {Component, PropTypes} from "react";
import {Grid, Row, Col, Button, Panel, Input, ListGroup, ListGroupItem} from "react-bootstrap";
import UserButtons from "./homepage/UserButtons";
import Logo from "./homepage/Logo";

class HomePage extends Component {

    render() {
        return (
            <div>

                <Logo/>
                <UserButtons/>

                <h3 style={ {padding: '1em', textAlign: 'center', paddingTop: '110px'} }
                ><span
                >Newest Projects</span></h3>
                <Grid fluid={ true }>
                    <Row>
                        <Col xs={ 4 }
                             md={ 4 }
                             sm={ 4 }
                             lg={ 4 }>
                            <Panel header={ <h3><span>
                                Code Connect</span></h3> }
                                   bsStyle="warning">
                                <span>The platform for coders to connect</span>
                                <Panel header={ <h5><span
                                >Tasks</span></h5> }
                                       style={ {overflow: 'auto'} }
                                       collapsible={ true }
                                       defaultExpanded={ true }
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
                        </Col>
                        <Col xs={ 4 }
                             md={ 4 }
                             sm={ 4 }
                             lg={ 4 }
                        >
                            <Panel header={ <h3><span
                            >TowerDefense</span></h3> }
                                   bsStyle="warning"
                            >
                                <span>The platform for coders to connect</span>
                                <Panel header={ <h5><span
                                >Tasks</span></h5> }
                                       style={ {overflow: 'auto'} }
                                       collapsible={ true }
                                       defaultExpanded={ true }
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
                        <Col xs={ 4 }
                             md={ 4 }
                             sm={ 4 }
                             lg={ 4 }
                        >
                            <Panel header={ <h3><span
                            >IceSlider</span></h3> }
                                   bsStyle="warning"
                            >
                                <span>The platform for coders to connect</span>
                                <Panel header={ <h5><span
                                >Tasks</span></h5> }
                                       style={ {overflow: 'auto'} }
                                       collapsible={ true }
                                       defaultExpanded={ true }
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
                                        >5: Redesign MainMenu</span>
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
                                        >9: Redesign Icon</span>
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
                                        >15: Add MuteButton</span>
                                        </ListGroupItem>
                                    </ListGroup>
                                </Panel>
                            </Panel>
                        </Col>
                        <Col xs={ 3 }
                             md={ 3 }
                             sm={ 3 }
                             lg={ 3 }
                        > </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default HomePage;

