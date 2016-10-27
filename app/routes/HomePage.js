import React, {Component, PropTypes} from "react";
import {IndexLink} from "react-router";
import {Grid, Row, Col, Button, Panel, Input, Image, ListGroup, ListGroupItem, PageHeader} from "react-bootstrap";


class HomePage extends Component {

    render() {
        return (
            <div>
                <Grid fluid={ true }
                >
                    <Row style={ {paddingTop: '100px'} }
                    >
                        <Col xs={ 5 }
                             md={ 5 }
                             sm={ 5 }
                             lg={ 5 }
                        ></Col>
                        <Col xs={ 2 }
                             md={ 2 }
                             sm={ 2 }
                             lg={ 2 }
                             style={ {} }
                        >
                            <Image
                                src="https://raw.githubusercontent.com/Gott50/Code-Connect/master/uibuilder/src/client/assets/CClogo.png"
                                rounded={ false }
                                circle={ false }
                                thumbnail={ false }
                                style={ {maxHeight: '300px', cssFloat: 'center'} }
                            ></Image>
                        </Col>
                        <Col xs={ 5 }
                             md={ 5 }
                             sm={ 5 }
                             lg={ 5 }
                        ></Col>
                    </Row>
                </Grid>
                <PageHeader style={ {fontFamily: 'awesome', textAlign: 'center'} }
                >
                    <span style={ {fontSize: '90px'} }
                    >Code Connect</span>
                </PageHeader>
                <Grid fluid={ true }
                >
                    <Row>
                        <Col xs={ 12 }
                             md={ 6 }
                             sm={ 12 }
                             lg={ 6 }
                        >
                            <IndexLink to="/contributor"
                            >
                                <Button bsStyle="success"
                                        style={ {
                                            textAlign: 'center',
                                            cssFloat: 'right',
                                            paddingLeft: '6%',
                                            paddingRight: '6%',
                                            marginTop: '0px'
                                        } }
                                        bsSize="large"
                                >
                                    <span
                                    >Browse Projects</span>
                                </Button>
                            </IndexLink>
                        </Col>
                        <Col xs={ 12 }
                             md={ 6 }
                             sm={ 12 }
                             lg={ 6 }
                        >
                            <IndexLink to="/mentor"
                            >
                                <Button bsStyle="warning"
                                        style={ {textAlign: 'center', paddingRight: '10%', paddingLeft: '10%'} }
                                        block={ false }
                                        bsSize="large"
                                        disabled={ false }
                                >
                                    <span
                                    >Add Project</span>
                                </Button>
                            </IndexLink>
                        </Col>
                    </Row>
                </Grid>
                <h3 style={ {padding: '1em', textAlign: 'center', paddingTop: '110px'} }
                ><span
                >Newest Projects</span></h3>
                <Grid fluid={ true }
                >
                    <Row>
                        <Col xs={ 4 }
                             md={ 4 }
                             sm={ 4 }
                             lg={ 4 }
                        >
                            <Panel header={ <h3><span
                            >Code Connect</span></h3> }
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
                        ></Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default HomePage;

