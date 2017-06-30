import React, {Component} from "react";
import {Col, Grid, Image, PageHeader, Row} from "react-bootstrap";

class Logo extends Component {
    render() {
        return (
            <Grid fluid={true}>
                <Row>
                    <Col xs={ 4 } xsOffset={1}
                         md={ 4 } mdOffset={4}
                         sm={ 4 } smOffset={4}
                         lg={ 2 } lgOffset={5}>
                        <Image
                            src="https://raw.githubusercontent.com/Gott50/Code-Connect/master/uibuilder/src/client/assets/CClogo.png"
                            responsive={true}
                        />
                    </Col>
                    <Col xs={ 6 }
                         md={ 12 }
                         sm={ 12 }
                         lg={ 12 }>
                        <PageHeader style={ {textAlign: 'center'} }>
                                <span style={ {fontSize: '150%'} }>
                                Code Connect
                                </span>
                        </PageHeader>
                    </Col>

                    <Col xs={ 1 }/>
                </Row>
            </Grid>
        )
    }

}
export default Logo;
