import React from 'react';
import {Panel, Button, Row, Col} from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import Editor from './Editor';

//smart Component
class EditPanel extends React.Component {

  render() {
    return (
      <div>
        <Row>
          <Col xs={6} md={8}>
            <Editor text = {this.props.text} onChange = {this.props.onChange}/>
          </Col>
          <Col xs={6} md={4}>
            <ReactMarkdown source={this.props.text}/>
          </Col>
        </Row>
        <Button bsSize="large" bsStyle="success">Submit</Button>
      </div>
    )
  }
}

export default EditPanel;
