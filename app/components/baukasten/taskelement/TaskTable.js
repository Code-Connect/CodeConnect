import React, {Component} from "react"
import ListItem from "./ListItem.js"
import {Table} from "react-bootstrap"

class TaskTable extends Component {


    render () {return (
        
        <div style={{ background: 'white'}}>
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                <th>#</th>
                <th>Title</th>
                <th>Difficulty</th>
                <th>#Solutions</th>
                <th>Status</th>
                </tr>
                </thead>
                <tbody>
                    <ListItem id="1" title="Sing a song" difficulty="****" solutions="100" status="solved"/>
                </tbody>
            </Table>
        </div>
    )
    }
}

export default TaskTable
