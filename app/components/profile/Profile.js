import React from "react";
import {connect} from "react-redux";
import ProfileView from "./ProfileView";
import {Tabs, Tab} from 'react-bootstrap';
import Mentor from "../mentor/Mentor";

class Profile extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <ProfileView/>
                    </div>
                    <div className="col-sm-8" style={{paddingTop:'20px', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '20px', background: "white", borderRadius: '10px'}}>
                        <Tabs defaultActiveKey={2}>
                            <Tab eventKey={1} title="Overview">Overview</Tab>
                            <Tab eventKey={2} title="Mentor Projects"><Mentor/></Tab>
                            <Tab eventKey={3} title="Contributor Projects">Contributor Projects</Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {projects: state.projects.addedProjects, tasks: state.projects.tasks};
};

export default connect(mapStateToProps)(Profile);

