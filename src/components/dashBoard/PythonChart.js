import React, { Component } from 'react'
import axios from 'axios';
import { Line } from 'react-chartjs-2';

export class PythonChart extends Component {
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
        console.log(ipl)
        this.setState({
          Data: {
            labels: [year[86], year[276], year[550], year[918], year[1348], year[1743], year[2087], year[2407], year[2574]],
            datasets: [
              {
                label: name[1],
                data: [count[1], count[89], count[278], count[552], count[920], count[1350], count[1745], count[2089], count[2409]],
                backgroundColor: [

                  "#0000FF",
                  "#9966FF",
                  "#4C4CFF",
                  "#00FFFF",
                  "#f990a7",
                  "#aad2ed",
                  "#FF00FF",
                  "#3cb371",
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
          options={{ maintainAspectRatio: false }} />
      </div>
    )
  }

}

export default PythonChart
