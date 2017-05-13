import React from 'react';
import {connect} from 'react-redux'
import {Panel, Button, Row, Col} from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import Editor from './Editor';
import {updateText} from './../../actions/editor';

//smart Component
class EditPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleChange(code) {
    this.props.dispatch(updateText(code));
    console.log(this.props.text);
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={6} md={8}>
            <Editor onClickFunction= {() => this.handleChange(item)} onChange={this.handleChange.bind(this)}/>
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

const mapStateToProps = (state) => {
  console.log(state.editor.text);
  return {text: state.editor.text};
};

export default connect(mapStateToProps)(EditPanel);
