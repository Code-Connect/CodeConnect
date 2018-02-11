import React from 'react';
import {connect} from 'react-redux'
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/content/add';
import FontIcon from 'material-ui/FontIcon';


class ProjectList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <List>
          {this.props.list.map((item) => {
            return (
              <ListItem rightIcon={< ActionInfo />}>
                <div>
                  {item.name}
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
