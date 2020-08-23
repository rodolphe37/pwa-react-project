import React, { Component } from 'react'
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import Chart from './variables/charts'
export class Linecharts extends Component {
  constructor(props) {
    super(props);
    this.state = { Data: {} };
  }
  componentDidMount() {
    axios.get(`https://raw.githubusercontent.com/madnight/githut/master/src/data/gh-pull-request.json`)
      .then(res => {
        const ipl = res.data;
        let name = [];
        let year = [];
        let count = [];
        ipl.forEach(record => {
          year.push(record.year);
          count.push(record.count);
          name.push(record.name)
        });
        // console.log(count, name, year)
        this.setState({
          Data: {
            labels: name,
            datasets: [
              {
                label: 'Global languages popularity on Github',
                data: count, name, year,
                backgroundColor: [
                  "#3cb371",
                  "#0000FF",
                  "#9966FF",
                  "#4C4CFF",
                  "#00FFFF",
                  "#f990a7",
                  "#aad2ed",
                  "#FF00FF",
                  "Blue",
                  "Red"
                ]
              }
            ]
          }
        });
      })
  }
  render() {
    return (
      <div>
        <Line
          data={this.state.Data}
          options={{ maintainAspectRatio: true }} />
        <Chart />
      </div>
    )
  }

}

export default Linecharts
