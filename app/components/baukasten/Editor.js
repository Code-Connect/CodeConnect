import React from 'react';
import CodeMirror from 'react-codemirror';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: props.text
    }
  }

  componentDidMount() {
    require('codemirror/mode/javascript/javascript');
    require('codemirror/mode/xml/xml');
    require('codemirror/mode/markdown/markdown');
  }

  render() {
    var options = {
      lineNumbers: true,
      mode: 'markdown'
    };
    return <CodeMirror value={this.state.code} onChange={this.updateCode.bind(this)} options={options}/>
  }

  updateCode(newCode) {
    this.props.onChange(newCode);    // calls the action methond from above
    this.setState({code: newCode});
  }
}

export default(Editor);
