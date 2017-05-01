var React = require('react');
var CodeMirror = require('react-codemirror');
// require('codemirror/mode/javascript/javascript');
// require('codemirror/mode/xml/xml');
// require('codemirror/mode/markdown/markdown');


class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: props.code,
        }
    }

    render() {
        var options = {
            lineNumbers: true,
            mode: 'javascript',
        };
        return <CodeMirror value={this.state.code} onChange={this.updateCode.bind(this)} options={options}/>
    }

    updateCode(newCode) {
        this.setState({
            code: newCode,
        });
    }
}

Editor.defaultProps = {
    code: "code",
};

export default(Editor);
