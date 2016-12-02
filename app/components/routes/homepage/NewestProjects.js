import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {Grid, Row, Col} from "react-bootstrap";
import ProjectPreview from "./ProjectPreview";


class NewestProjects extends Component {

    render() {
        return (
            <div>
                <h3 style={ {padding: '1em', textAlign: 'center', paddingTop: '110px'} }>Newest Projects</h3>
                <Grid
                    fluid={ true }>
                    <Row>
                        {this.buildCols(this.props.projects)}
                    </Row>
                </Grid>
            </div>
        )


    }

    buildCols(projects) {
        let cols;
        if (projects && projects.length > 0)
            cols = projects.map((project, i) => {
                return (
                    <Col xs={ this.calculateSize(projects, 7) }
                         md={ this.calculateSize(projects, 5) }
                         sm={ this.calculateSize(projects, 4) }
                         lg={ this.calculateSize(projects, 3) }
                         key={i}>
                        <ProjectPreview
                            headerName={project.headerName}
                            description={project.description}
                            tasks={project.tasks}
                            defaultExpanded={true}
                        />
                    </Col>
                );
            });
        return cols;
    }

    calculateSize(projects, min) {
        min = min || 4;
        let size = Math.floor(12 / projects.length);
        while (size < min || 12 % size != 0)
            size++;
        return size;
    }
}

const mapStateToProps = (state) => {
    console.log("mentor map states to props");
    console.log(state);

    return {projects: state.projects.publicprojects};
};

export default connect(mapStateToProps)(NewestProjects);