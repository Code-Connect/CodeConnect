import React from 'react';
import {connect} from 'react-redux'
import {Button, Table} from 'react-bootstrap';

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick(item) {
    this.props.onClick(item);
  }

  render() {
    return (
      <div>
        <Table striped condensed hover>
          <thead>
            <tr>
              <th className="table-header">Name</th>
              <th className="table-header">No. Commits</th>
              <th className="table-header">Last Update</th>
              <th className="table-header">Tags</th>
              <th className="table-header">Try it</th>
            </tr>
          </thead>
          <tbody>
            {this.props.list.map((item) => {
              return <ListItem item={item} description={this.props.description} onClick={() => this.onClick(item)}/>
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td className="table-cell">
          <a href={"https://github.com/"}>{this.props.item.name}</a>
        </td>
        <td className="table-cell">201</td>
        <td className="table-cell">06/16/18</td>
        <td className="table-cell">#javascript #react</td>
        <td className="table-cell">
          <Button className="demo-btn" onClick={this.props.onClick}>{this.props.description}</Button>
        </td>
      </tr>
    );
  }
}
export default(ProjectList);
