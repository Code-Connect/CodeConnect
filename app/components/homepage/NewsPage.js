import React, {Component} from "react";
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import ProjectCards from "./ProjectCards";
import {getPublicProjects} from '../../actions/projectActions';

class NewsPage extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getPublicProjects());
  }

  onClick(project_id) {
    browserHistory.push('/project/' + project_id);
  }

  render() {
    return (
        <div className="news-page">
            <div className="header">
                <h1 className="titlepage container">Dashboard</h1>
            </div>
            <div className="body">
                <div className="cardheader">
                    <div className="third leftthird">
                        <h3 className="cardtitle clicked">Projects</h3>
                        <h2 className="cardtitle">Contributors</h2></div>
                    <div className="third middlethird">
                        <a href="#" className="cardtitle button left newest_hottest_clicked w-button">Newest</a>
                        <a href="#" className="cardtitle button right w-button">Hottest</a>
                    </div>
                    <div className="third rightthird">
                        <div className="searchicon"></div>
                        <h2 className="cardtitle search">Search...</h2></div>
                </div>
                <div className="show-grid container">
                    {this.props.projects.projectList.map((project) => {
                        return (
                            <ProjectCards project={project} onClick={() => this.onClick(project.project_id)}/>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {projects: state.currentProjectList};
};

export default connect(mapStateToProps)(NewsPage);
