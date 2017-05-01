var React = require('react');
var CodeMirror = require('react-codemirror');


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
            mode: 'markdown',
        };
        return <CodeMirror value={this.state.code} onChange={this.updateCode.bind(this)} options={options}/>
    }

    updateCode(newCode) {
      console.log(newCode);
        this.setState({
            code: newCode,
        });
    }

    componentDidMount() {
        require('codemirror/mode/javascript/javascript');
        require('codemirror/mode/xml/xml');
        require('codemirror/mode/markdown/markdown');
    }
}

Editor.defaultProps = {
    code: "code",
};

export default(Editor);
