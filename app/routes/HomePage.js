import React, {Component, PropTypes} from "react";
import {IndexLink} from "react-router";
import {Grid, Row, Col, Button, Panel, Input, Image, ListGroup, ListGroupItem, PageHeader} from "react-bootstrap";
import NavBar from "./views/NavBar.js";


class HomePage extends Component {

    render() {
        return (
            <div>
                <NavBar params={ this.props.params } location={ this.props.location }></NavBar>
                <Grid fluid={ true }
                      params={ this.props.params }
                      location={ this.props.location }>
                    <Row style={ {paddingTop: '100px'} }
                         params={ this.props.params }
                         location={ this.props.location }>
                        <Col xs={ 5 }
                             md={ 5 }
                             sm={ 5 }
                             lg={ 5 }
                             params={ this.props.params }
                             location={ this.props.location }></Col>
                        <Col xs={ 2 }
                             md={ 2 }
                             sm={ 2 }
                             lg={ 2 }
                             style={ {} }
                             params={ this.props.params }
                             location={ this.props.location }>
                            <Image
                                src="https://raw.githubusercontent.com/Gott50/Code-Connect/master/uibuilder/src/client/assets/CClogo.png"
                                rounded={ false }
                                circle={ false }
                                thumbnail={ false }
                                style={ {maxHeight: '300px', cssFloat: 'center'} }
                                params={ this.props.params }
                                location={ this.props.location }></Image>
                        </Col>
                        <Col xs={ 5 }
                             md={ 5 }
                             sm={ 5 }
                             lg={ 5 }
                             params={ this.props.params }
                             location={ this.props.location }></Col>
                    </Row>
                </Grid>
                <PageHeader style={ {fontFamily: 'awesome', textAlign: 'center'} }
                            params={ this.props.params }
                            location={ this.props.location }>
                    <span style={ {fontSize: '90px'} }
                          params={ this.props.params }
                          location={ this.props.location }>Code Connect</span>
                </PageHeader>
                <Grid fluid={ true }
                      params={ this.props.params }
                      location={ this.props.location }>
                    <Row params={ this.props.params } location={ this.props.location }>
                        <Col xs={ 12 }
                             md={ 6 }
                             sm={ 12 }
                             lg={ 6 }
                             params={ this.props.params }
                             location={ this.props.location }>
                            <IndexLink to="/contributor"
                                       params={ this.props.params }
                                       location={ this.props.location }>
                                <Button bsStyle="success"
                                        style={ {
                                            textAlign: 'center',
                                            cssFloat: 'right',
                                            paddingLeft: '6%',
                                            paddingRight: '6%',
                                            marginTop: '0px'
                                        } }
                                        bsSize="large"
                                        params={ this.props.params }
                                        location={ this.props.location }>
                                    <span params={ this.props.params }
                                          location={ this.props.location }>Browse Projects</span>
                                </Button>
                            </IndexLink>
                        </Col>
                        <Col xs={ 12 }
                             md={ 6 }
                             sm={ 12 }
                             lg={ 6 }
                             params={ this.props.params }
                             location={ this.props.location }>
                            <IndexLink to="/mentor"
                                       params={ this.props.params }
                                       location={ this.props.location }>
                                <Button bsStyle="warning"
                                        style={ {textAlign: 'center', paddingRight: '10%', paddingLeft: '10%'} }
                                        block={ false }
                                        bsSize="large"
                                        disabled={ false }
                                        params={ this.props.params }
                                        location={ this.props.location }>
                                    <span params={ this.props.params }
                                          location={ this.props.location }>Add Project</span>
                                </Button>
                            </IndexLink>
                        </Col>
                    </Row>
                </Grid>
                <h3 style={ {padding: '1em', textAlign: 'center', paddingTop: '110px'} }
                    params={ this.props.params }
                    location={ this.props.location }><span params={ this.props.params }
                                                           location={ this.props.location }>Newest Projects</span></h3>
                <Grid fluid={ true }
                      params={ this.props.params }
                      location={ this.props.location }>
                    <Row params={ this.props.params } location={ this.props.location }>
                        <Col xs={ 4 }
                             md={ 4 }
                             sm={ 4 }
                             lg={ 4 }
                             params={ this.props.params }
                             location={ this.props.location }>
                            <Panel header={ <h3 params={ this.props.params } location={ this.props.location }><span
                                params={ this.props.params } location={ this.props.location }>Code Connect</span></h3> }
                                   bsStyle="warning"
                                   params={ this.props.params }
                                   location={ this.props.location }>
                                <span params={ this.props.params } location={ this.props.location }>The platform for coders to connect</span>
                                <Panel header={ <h5 params={ this.props.params } location={ this.props.location }><span
                                    params={ this.props.params } location={ this.props.location }>Tasks</span></h5> }
                                       style={ {overflow: 'auto'} }
                                       collapsible={ true }
                                       defaultExpanded={ true }
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
                        </Col>
                        <Col xs={ 4 }
                             md={ 4 }
                             sm={ 4 }
                             lg={ 4 }
                             params={ this.props.params }
                             location={ this.props.location }>
                            <Panel header={ <h3 params={ this.props.params } location={ this.props.location }><span
                                params={ this.props.params } location={ this.props.location }>TowerDefense</span></h3> }
                                   bsStyle="warning"
                                   params={ this.props.params }
                                   location={ this.props.location }>
                                <span params={ this.props.params } location={ this.props.location }>The platform for coders to connect</span>
                                <Panel header={ <h5 params={ this.props.params } location={ this.props.location }><span
                                    params={ this.props.params } location={ this.props.location }>Tasks</span></h5> }
                                       style={ {overflow: 'auto'} }
                                       collapsible={ true }
                                       defaultExpanded={ true }
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
                        <Col xs={ 4 }
                             md={ 4 }
                             sm={ 4 }
                             lg={ 4 }
                             params={ this.props.params }
                             location={ this.props.location }>
                            <Panel header={ <h3 params={ this.props.params } location={ this.props.location }><span
                                params={ this.props.params } location={ this.props.location }>IceSlider</span></h3> }
                                   bsStyle="warning"
                                   params={ this.props.params }
                                   location={ this.props.location }>
                                <span params={ this.props.params } location={ this.props.location }>The platform for coders to connect</span>
                                <Panel header={ <h5 params={ this.props.params } location={ this.props.location }><span
                                    params={ this.props.params } location={ this.props.location }>Tasks</span></h5> }
                                       style={ {overflow: 'auto'} }
                                       collapsible={ true }
                                       defaultExpanded={ true }
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
                                                           location={ this.props.location }>5: Redesign MainMenu</span>
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
                                                           location={ this.props.location }>9: Redesign Icon</span>
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
                                                           location={ this.props.location }>15: Add MuteButton</span>
                                        </ListGroupItem>
                                    </ListGroup>
                                </Panel>
                            </Panel>
                        </Col>
                        <Col xs={ 3 }
                             md={ 3 }
                             sm={ 3 }
                             lg={ 3 }
                             params={ this.props.params }
                             location={ this.props.location }></Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default HomePage;

