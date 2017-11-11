import React from 'react';
import {connect} from 'react-redux'
import {Button, Panel, Table, Col, Row} from "react-bootstrap";
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
        {/* TODO change the design of the project cards */}
        <Row className="show-grid">
          {this.props.data.map((item) => {
            return (
              <Col md={4} onClick={() =>{this.onClick(item)}}>
                  <Panel href={'#' + item[this.props.datatype + '_id']}>
                    {item.name}
                  </Panel>
              </Col>
            )
          })}
        </Row>
      </div>
    );
  }
}

export default MentorTable;
