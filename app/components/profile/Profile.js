import React from "react";
import {connect} from "react-redux";
import ProfileView from "./ProfileView";
import {Tab, Tabs} from 'react-bootstrap';
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
                        <ProfileView name={this.props.user.name} email={this.props.user.email}/>
                    </div>
                    <div className="col-sm-8" style={{paddingTop:'20px', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '20px', background: "white", borderRadius: '10px'}}>
                        <Tabs id="tabs" defaultActiveKey={1}>
                            <Tab eventKey={1} title="Your Projects">
                              <Mentor/>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {projects: state.projects.addedProjects, user: state.user.github};
};

export default connect(mapStateToProps)(Profile);
