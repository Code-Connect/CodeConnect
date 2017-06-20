import React from 'react';
import CodeMirror from 'react-codemirror';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      task_id: props.task_id,
      fieldtype: props.fieldtype
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
    return <CodeMirror value={this.state.value} onChange={this.updateCode.bind(this)} options={options}/>
  }

  updateCode(newCode) {
    this.props.onChange(this.state.fieldtype, newCode); // calls the action methond from above
    this.setState({value: newCode});
  }
}

export default(Editor);
