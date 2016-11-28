import React from 'react';
import {connect} from 'react-redux'
import {IndexLink, Link} from 'react-router';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const active = {
            borderBottomColor: '#3f51b5'
        };
        var rightNav = this.props.user
            ? (
                <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                        <a href="#" data-toggle="dropdown" className="navbar-avatar dropdown-toggle">
                            <img src={'https://avatars.githubusercontent.com/u/' + this.props.user.github_id}/> {' '}{this.props.user.name || this.props.user.email || this.props.user.id}{' '}
                            <i className="caret"></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/account">My Account</Link>
                            </li>
                            <li className="divider"></li>
                        </ul>
                    </li>
                </ul>
            )
            : (
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link href="/auth/github" activeStyle={active}>Log in</Link>
                    </li>
                    <li>
                        <Link to="/signup" activeStyle={active}>Sign up</Link>
                    </li>
                </ul>
            );
        return (
            <nav className="navbar navbar-default navbar-static-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" data-toggle="collapse" data-target="#navbar" className="navbar-toggle collapsed">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <IndexLink to="/" className="navbar-brand">Project name</IndexLink>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li>
                                <IndexLink to="/" activeStyle={active}>Home</IndexLink>
                            </li>
                            <li>
                                <Link to="/mentor" activeStyle={active}>Mentor1</Link>
                            </li>
                            <li>
                                <Link to="/mentor" activeStyle={active}>Mentor</Link>
                            </li>
                        </ul>
                        {rightNav}
                    </div>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps");
    console.log(state.user.github);
    return {user: state.user.github};
};

export default connect(mapStateToProps)(Header);
