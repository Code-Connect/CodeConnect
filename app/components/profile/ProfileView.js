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
                    <img src={"https://avatars.githubusercontent.com/"+this.props.name} style={{maxWidth: '100%'}} alt=""/>
                    <h3>{this.props.name}</h3>
                    <h4><small>{this.props.email}</small></h4>
                </div>
            </div>
        );
    }
}


export default ProfileView;

