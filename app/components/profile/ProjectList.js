import React from 'react';
import {connect} from 'react-redux'
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/content/add';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import {Button} from 'react-bootstrap';


class ProjectList extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick(item) {
    this.props.onClick(item);
  }

  render() {
    return (
      <div>
        <List>
          {this.props.list.map((item) => {
            return (
              <ListItem onClick={() =>{this.onClick(item)}}>
                <div className="projects-tab">
                  <h4>{item.name}</h4>
                  <Button>Github</Button>
                  <br/>
                  Commits: 230
                  <br/>
                </div>
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  }
}

export default ProjectList;
