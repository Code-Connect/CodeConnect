import React from "react";
import {connect} from "react-redux";

class ProfileView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{paddingTop:'20px', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '20px', background: "white", borderRadius: '10px'}}>
                <div className="col">
                    <img src="https://avatars0.githubusercontent.com/u/16148925?v=4&s=460" style={{maxWidth: '100%'}} alt=""/>
                    <h1>Frank Lu</h1>
                </div>
            </div>
        );
    }
}


export default ProfileView;

