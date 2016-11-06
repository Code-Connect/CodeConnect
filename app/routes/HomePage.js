import React, {Component, PropTypes} from "react";
import {Grid, Row, Col, Button, Panel, Input, Image, ListGroup, ListGroupItem, PageHeader} from "react-bootstrap";


class HomePage extends Component {

    render() {
        return (
            <div>
                <Grid fluid={true}>
                    <Row>
                        <Col xs={ 0 }
                             md={ 4 }
                             sm={ 4 }
                             lg={ 5 }> </Col>
                        <Col xs={ 3 }
                             md={ 4 }
                             sm={ 4 }
                             lg={ 2 }
                             xsHidden={false}>
                            <Image
                                src="https://raw.githubusercontent.com/Gott50/Code-Connect/master/uibuilder/src/client/assets/CClogo.png"
                                responsive={true}
                            ></Image>
                        </Col>
                        <Col xs={ 9 }
                             md={ 12 }
                             sm={ 12 }
                             lg={ 12 }>
                            <PageHeader style={ {fontFamily: 'awesome', textAlign: 'center'} }>
                                <span style={ {fontSize: '150%'} }>
                                Code Connect
                                </span>
                            </PageHeader>
                        </Col>
                    </Row>
                </Grid>


                <Grid fluid={ true }>
                    <Row>
                        <Col xs={ 6 }
                             md={ 6 }
                             sm={ 6 }
                             lg={ 6 }
                             style={ {
                                 textAlign: 'right'
                             }}>
                            <Button href="/contributor"
                                    bsStyle="success"
                                    style={ {paddingLeft: '6%', paddingRight: '6%'} }
                                    bsSize="large">
                                Browse Projects
                                </Button>
                        </Col>
                        <Col xs={ 6 }
                             md={ 6 }
                             sm={ 6 }
                             lg={ 6 }>
                            <Button href="/mentor"
                                    bsStyle="warning"
                                    style={ {paddingRight: '10%', paddingLeft: '10%'} }
                                    bsSize="large">
                                Add Project
                                </Button>
                        </Col>
                    </Row>
                </Grid>

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

