import React, { Component } from 'react'
import axios from 'axios';
import { Line } from 'react-chartjs-2';

export class JavascriptChart extends Component {
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
        let result = [];
        ipl.forEach(record => {
          year.push(record.year);
          count.push(record.count);
          name.push(record.name)
        });

        const [firstYear] = [parseInt(count[2]) + parseInt(count[28]) + parseInt(count[59])]
        const [secondYear] = [parseInt(count[88]) + parseInt(count[128]) + parseInt(count[169]) + parseInt(count[223])]
        const [thirdYear] = [parseInt(count[277]) + parseInt(count[338]) + parseInt(count[406]) + parseInt(count[476])]
        const [fourthYear] = [parseInt(count[551]) + parseInt(count[641]) + parseInt(count[726]) + parseInt(count[816])]
        const [fifthYear] = [parseInt(count[919]) + parseInt(count[1028]) + parseInt(count[1136]) + parseInt(count[1238])]
        const [sixthYear] = [parseInt(count[1349]) + parseInt(count[1454]) + parseInt(count[1557]) + parseInt(count[1652])]
        const [seventhYear] = [parseInt(count[1744]) + parseInt(count[1836]) + parseInt(count[1924]) + parseInt(count[2008])]
        const [eighthYear] = [parseInt(count[2088]) + parseInt(count[2168]) + parseInt(count[2244]) + parseInt(count[2329])]
        const [ninthYear] = [parseInt(count[2408]) + parseInt(count[2490])]

        const total = [firstYear + secondYear + thirdYear + fourthYear + fifthYear + sixthYear + seventhYear + eighthYear + ninthYear]
        result.push(total)

        this.setState({
          Data: {
            labels: [year[86], year[276], year[550], year[918], year[1348], year[1743], year[2087], year[2407], year[2574]],
            datasets: [
              {
                label: `Total count : ${result}, ${name[2]}`,
                data: [firstYear, secondYear, thirdYear, fourthYear, fifthYear, sixthYear, seventhYear, eighthYear, ninthYear],
                backgroundColor: [

                  'rgba(255, 206, 86, 0.6)',
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
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

export default JavascriptChart
