import React from 'react';
import {connect} from 'react-redux'
import {Panel, Button, Row, Col} from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import Editor from './Editor';

//smart Component
class EditPanel extends React.Component {

  handleChange(event) {
    console.log("Editor");
    console.log(event.target.code);
  }

  render() {
    return (
      <Panel header="Voll viel Zeit" bsStyle="primary">
        <Row>
          <Col xs={6} md={8}>
            <Editor onChange={this.handleChange.bind(this)}/>
          </Col>
          <Col xs={6} md={4}>
            <ReactMarkdown source="fsdafdsfds" onChange={this.handleChange.bind(this)}/>
          </Col>
        </Row>
      </Panel>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {editor: state.editor.mockData};
// };
export default EditPanel;

// export default connect(mapStateToProps)(EditPanel);
