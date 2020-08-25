import React, { Component } from 'react'
import axios from 'axios';
import { Line } from 'react-chartjs-2';
// import Chart from './variables/charts'

export class Linecharts3 extends Component {
  constructor(props) {
    super(props);
    this.state = { Data: {}, color: 'red,green,blue,orange' };
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
                label: [name[3], `count for 2020 :  ${[count[2415]]}`],
                data: [count[3], count[90], count[280], count[555], count[923], count[1352], count[1750], count[2094], count[2415]],
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
    console.log('test console :', this.state.Data)
    return (
      <div>
        <Line
          data={this.state.Data}
          options={{ maintainAspectRatio: false }} />
        <div>
        </div>

      </div>
    )
  }

}

export default Linecharts3
