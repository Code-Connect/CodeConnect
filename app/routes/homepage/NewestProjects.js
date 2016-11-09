import React, {Component, PropTypes} from "react";
import {Grid, Row, Col} from "react-bootstrap";
import ProjectPreview from "./ProjectPreview";

const tasks = [
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
        description: "The platform for coders to connect",
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
                <Grid fluid={ true }>
                    <Row>
                        {this.buildCols(tasks)}
                    </Row>
                </Grid>
            </div>
        )


    }

    buildCols(tasks) {
        let cols;
        if (tasks && tasks.length > 0)
            cols = tasks.map((task) => {
                return (
                    <Col xs={ 4 }
                         md={ 4 }
                         sm={ 4 }
                         lg={ 4 }>
                        <ProjectPreview
                            headerName={task.headerName}
                            description={task.description}
                            tasks={task.tasks}
                        />
                    </Col>
                );
            });
        return cols;

    }
}
export default NewestProjects;