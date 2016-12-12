import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {Grid, Row, Col, PageHeader} from "react-bootstrap";
import SearchFilter from "./views/SearchFilter.js";
import ProjectPreview from "./homepage/ProjectPreview";


class Contributor extends Component {
    buildPanels(projects) {
        let cols;

        if (projects && projects.length > 0)
            cols = projects.map((project, i) => {
                return (<ProjectPreview key={i} headerName={project.headerName} description={project.description} tasks={project.tasks} defaultExpanded={false}/>);
            });
        return cols;
    }
    render() {
        return (
            <div>
                <PageHeader style={{
                    textAlign: 'center'
                }}>
                    Select your Project
                </PageHeader>

                <Grid fluid={true}>
                    <Row>
                        <Col xs={3} md={2} sm={2} lg={2}>
                            <SearchFilter value='' filter={[
                                {
                                    title: 'Platform',
                                    options: [1]
                                }, {
                                    title: 'Language'
                                }, {
                                    title: 'Difficulty'
                                }
                            ]}/>
                        </Col>

                        <Col xs={6} md={10} sm={10} lg={10}>
                            {this.buildPanels(this.props.projects)}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("mentor map states to props");
    console.log(state);

    return {projects: state.projects.publicprojects};
};

export default connect(mapStateToProps)(Contributor);
