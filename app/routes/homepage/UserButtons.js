import React, {Component, PropTypes} from "react";
import {Grid, Row, Col, Button} from "react-bootstrap";

class UserButtons extends Component {
    render() {
        return (<Grid fluid={ true }>
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
        )
    }

}
export default UserButtons;