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
              <th>{this.props.datatype}</th>
              {/* <th>Contributor</th> */}
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((item) => {
              return (
                <tr onClick={this.onClick.bind(this)}>
                  <td>
                    <a href={'#' + item[this.props.datatype + '_id']}>
                      {item.name}
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
