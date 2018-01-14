import React from "react";
import {connect} from "react-redux";
import {IndexLink, Link} from "react-router";
import {LinkContainer} from "react-bootstrap";


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
                <div className="menubarright">
                <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                        <a href="#" data-toggle="dropdown" className="dropdown-toggle">
                            <i className="caret"></i>
                            <h2 className="title_menu_element right">
                                {' '}{this.props.user.name || this.props.user.email || this.props.user.id}{' '}
                            </h2>
                            <img className="div-block" src={'https://avatars.githubusercontent.com/u/' + this.props.user.id}/>
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

                    {/*<h2 className="title_menu_element right">Tash Sultana</h2>*/}
                    {/*<div className="div-block"></div>*/}
                </div>
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
                        <Link to="/profile" activeStyle={active}><h2 className="title_menu_element">Profile</h2></Link>
                    </li>
                    <li>
                        <Link to="/about" activeStyle={active}><h2 className="title_menu_element">About</h2></Link>
                    </li>
                </ul>

            )
            : (
                <div></div>
            );
        const navbarStyle = {backgroundColor: "#115180"};

        return (
            <nav className="menubar navbar navbar-default navbar-static-top navFont">
                <div className="menubarleft">
                    <div className="navbar-header">
                        <button type="button" data-toggle="collapse" data-target="#navbar" className="navbar-toggle collapsed">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <IndexLink to="/" className="navbar-brand">
                            <h4 className="titlelogo">Code Connect</h4>
                        </IndexLink>
                    </div>
                    {mentorNav}
                </div>


                {rightNav}
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return {user: state.user.github};
};

export default connect(mapStateToProps)(Header);
