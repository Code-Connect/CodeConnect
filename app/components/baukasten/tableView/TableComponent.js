import React, {Component} from "react"
import ListItem from "./ListItem.js"
import {Table} from "react-bootstrap"

/*
 *
 * This component is only responsible for displaying the Table itself
 *
 * Parameters: labelList 		= [ {labelName: "XX", labelSize: 1}, ... ]
 * 						 dataList	= [ {id: ..., data: ["attr1", "attr2", "at.."]}, ... ]
 * 						 route				= "task" will route to: [ "task/id1", "task/id2", ... ]			contains the redirecting routes after click on a list item
 **/

class TableComponent extends Component {
    constructor(props) {

        //props: labelList = [{labelName: "XX", labelSize: 2},..] , dataObjList (Obj must have id), routeList
        super(props);
        this.state = {}
    }

    render() {

        return (
            <Table style={{
                marginTop: "20px"
            }} striped bordered condensed hover>
                <thead>
                <tr>
                    {this.props.labelList.map((label, index) => {
                        let cName = "col-md-" + label.labelSize;
                        return <th key={index} className={cName}>{label.labelName}</th>
                    })}
                </tr>
                </thead>
                <tbody>
                {this.props.dataList.map((object, index) => {
                    return <ListItem goTo={this.props.goTo} onTableItemClicked={this.props.onTableItemClicked}
                                     activate={this.props.setActiveElement.bind(this)} id={object.id} key={index}
                                     info={object.data}/>
                })
                }
                </tbody>
            </Table>
        )
    }
}

export default TableComponent
