import React, {Component, PropTypes} from "react";
import {Grid, Row, Col} from "react-bootstrap";
import ProjectPreview from "./ProjectPreview";

const projects = [
    {
        headerName: "Code Connect",
        description: "The platform for coders to connect",
        tasks: [
            {
                name: "10: Search Functionality in Navigation Bar",
                link: "https://github.com/nithishr/codeConnect"
            }, {
                name: "12: Improve load times",
                link: "https://github.com/nithishr/codeConnect"
            }
        ]
    }, {
        headerName: "TowerDefense",
        description: "A mobile TD Game",
        tasks: [
            {
                name: "11: Add Advertising",
                link: "https://github.com/gapsong/TowerDefense"
            },
            {
                name: "13: Add MuteButton",
                link: "https://github.com/gapsong/TowerDefense"
            },
            {
                name: "14: Redesign MainMenu",
                link: "https://github.com/gapsong/TowerDefense"
            },
            {
                name: "16: Redesign Icon",
                link: "https://github.com/gapsong/TowerDefense"
            }
        ]
    },
];

class NewestProjects extends Component {

    render() {
        return (
            <div>
                <h3 style={ {padding: '1em', textAlign: 'center', paddingTop: '110px'} }>Newest Projects</h3>
                <Grid
                    fluid={ true }>
                    <Row>
                        {this.buildCols(projects)}
                    </Row>
                </Grid>
            </div>
        )


    }

    buildCols(projects) {
        let cols;
        let size = 12 / projects.length;

        if (projects && projects.length > 0)
            cols = projects.map((project) => {
                return (
                    <Col xs={ size }
                         md={ size }
                         sm={ size }
                         lg={ size }>
                        <ProjectPreview
                            headerName={project.headerName}
                            description={project.description}
                            tasks={project.tasks}
                        />
                    </Col>
                );
            });
        return cols;
    }
}
export default NewestProjects;