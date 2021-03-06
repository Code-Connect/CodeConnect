import React from "react";
import {connect} from "react-redux";
import {IndexLink, Link} from "react-router";
import {Navbar, LinkContainer} from "react-bootstrap";



class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const active = {
            borderBottomColor: '#3f51b5'
        };
        const rightNav = this.props.user
            ? (
                <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                        <a href="#" data-toggle="dropdown" className="navbar-avatar dropdown-toggle">
                            <img className = "avatar-border" src={'https://avatars.githubusercontent.com/u/' + this.props.user.id}/> {' '}{this.props.user.name || this.props.user.email || this.props.user.id}{' '}
                            <i className="caret"></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="/logout">Log out</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            )
            : (
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link href="/auth/github" activeStyle={active}>Log in</Link>
                    </li>
                </ul>
            );
        const mentorNav = this.props.user
            ? (
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link to="/profile" activeStyle={active}>Profile</Link>
                    </li>
                    <li>
                        <Link to="/about" activeStyle={active}>About</Link>
                    </li>
                </ul>

            )
            : (
                <div></div>
            );

        return (
            <nav className="header navbar navbar-default navbar-static-top navFont">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" data-toggle="collapse" data-target="#navbar" className="navbar-toggle collapsed">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <IndexLink to="/" className="navbar-brand"><b>Code Connect</b></IndexLink>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            {mentorNav}
                        </ul>
                        {rightNav}
                    </div>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return {user: state.user.github};
};

export default connect(mapStateToProps)(Header);
