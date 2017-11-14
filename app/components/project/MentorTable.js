import React from 'react';
import {connect} from 'react-redux'
import {Button, Panel, Table} from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import EditPanel from '../baukasten/EditPanel.js';
import Editor from '../baukasten/Editor.js';

class MentorTable extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick(item) {
    this.props.onClick(item);
  }

  render() {
    return (
      <div>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>{this.props.datatype}</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((item) => {
              return (
                <tr onClick={() =>{this.onClick(item)}}>
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
