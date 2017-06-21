import React from 'react';
import {connect} from 'react-redux'
import {Button, Panel, Table} from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import EditPanel from '../baukasten/EditPanel.js';
import Editor from '../baukasten/Editor.js';
import {updateTask, addTask, deleteTask} from '../../actions/taskActions';

class MentorTable extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick(element) {
    //TODO
    //man kommt zum aktuellem Projekt
    console.log(element.target);
  }

  render() {
    return (
      <div>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Project</th>
              <th>Contributor</th>
            </tr>
          </thead>
          <tbody>
            {this.props.tasks.map((task) => {
              return (
                <tr onClick={this.onClick.bind(this)}>
                  <td>
                    <a href={'#' + task.task_id}>
                      {task.name}
                    </a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default MentorTable;
