import React from "react";
import {connect} from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

class ProfileView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4 col-md-4 contentbox"><img className="avatar-border" src={"https://avatars.githubusercontent.com/" + this.props.name} style={{
        width: '100px',
        height: 'auto'
      }}/>
            <h1 className="name-box">
              <a href={"https://github.com/" + this.props.name}>{this.props.name}</a>
            </h1>
          </div>
          <div className="col-12 col-md-4">
            <LineChart width={600} height={200} data={[
              {
                month: 'January',
                uv: 4000,
                pv: 2400,
                amt: 2400
              }, {
                month: 'February',
                uv: 3000,
                pv: 1398,
                amt: 2210
              }, {
                month: 'March',
                uv: 5000,
                pv: 9800,
                amt: 2290
              }, {
                month: 'April',
                uv: 5000,
                pv: 9800,
                amt: 2290
              }
            ]} margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}>
              <XAxis dataKey="month"/>
              <YAxis/>
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip/> {/* <Legend/> */}
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{
                r: 8
              }}/>
              <Line type="monotone" dataKey="uv" stroke="#82ca9d"/>
            </LineChart>
          </div>
        </div>
      </div>

    );
  }
}

export default ProfileView;
