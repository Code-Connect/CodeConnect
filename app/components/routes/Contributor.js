import React, {Component, PropTypes} from "react";
import {Grid, Row, Col, PageHeader} from "react-bootstrap";
import SearchFilter from "./views/SearchFilter.js";
import ProjectPreview from "./homepage/ProjectPreview";

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
            }, {
                name: "13: Add MuteButton",
                link: "https://github.com/gapsong/TowerDefense"
            }, {
                name: "14: Redesign MainMenu",
                link: "https://github.com/gapsong/TowerDefense"
            }, {
                name: "16: Redesign Icon",
                link: "https://github.com/gapsong/TowerDefense"
            }
        ]
    }
];

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
                            {this.buildPanels(projects)}

                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Contributor;
