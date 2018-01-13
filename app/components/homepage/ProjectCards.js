import React from 'react';
import ReactMarkdown from 'react-markdown';

class ProjectCards extends React.Component {
  constructor(props) {
    super(props);
  }

  getToUserProfil(){
    //TODO hier muss man zu anderen Profilen kommen können
    // browserHistory.push('/project/' + project_id);
  }

  render() {
    const description = this.props.project.description
      ? this.props.project.description
      : "";
    return (
      <div className ="card" onClick={() => {this.props.onClick()}}>
              <div className="cardbody">
                  <div className="mentor_logo_holder">
                      <img className="mentorlogo" src={this.props.project.image}/>
                  </div>
                  <div className="card_body_bottom headerWrapper">
                      <h2 className="projecttitle" title={this.props.project.name} >{this.props.project.name}</h2>
                      <ReactMarkdown className="projectdescription textBox" source={this.props.project.description}/>
                  </div>
              </div>
              <div className="cardactivity">
                  <div className="activitymonitor"></div>
                  <div className="tasks">
                      <h2 className="open_task_title">27</h2>
                      <div className="task">Tasks</div>
                  </div>
              </div>
              <a href="#" className="cardbutton w-button">Contribute</a>

        <div className="footer-pCards">
          <p className ="footer-text-pCards" onClick={() => this.getToUserProfil(this.props.project.mentor_id)}>by {this.props.project.mentor_name}</p>
        </div>
      </div>
    );
  }
}

export default ProjectCards;
