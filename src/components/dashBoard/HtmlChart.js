import React, { Component } from 'react'
import axios from 'axios';
import { Line } from 'react-chartjs-2';

export class HtmlChart extends Component {
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

        const [firstYear] = [parseInt(count[11]) + parseInt(count[39]) + parseInt(count[67])]
        const [secondYear] = [parseInt(count[96]) + parseInt(count[136]) + parseInt(count[176]) + parseInt(count[230])]
        const [thirdYear] = [parseInt(count[284]) + parseInt(count[345]) + parseInt(count[413]) + parseInt(count[483])]
        const [fourthYear] = [parseInt(count[557]) + parseInt(count[647]) + parseInt(count[732]) + parseInt(count[822])]
        const [fifthYear] = [parseInt(count[924]) + parseInt(count[1034]) + parseInt(count[1143]) + parseInt(count[1245])]
        const [sixthYear] = [parseInt(count[1356]) + parseInt(count[1461]) + parseInt(count[1564]) + parseInt(count[1660])]
        const [seventhYear] = [parseInt(count[1752]) + parseInt(count[1845]) + parseInt(count[1934]) + parseInt(count[2018])]
        const [eighthYear] = [parseInt(count[2098]) + parseInt(count[2178]) + parseInt(count[2254]) + parseInt(count[2339])]
        const [ninthYear] = [parseInt(count[2418]) + parseInt(count[2500])]

        const total = [firstYear + secondYear + thirdYear + fourthYear + fifthYear + sixthYear + seventhYear + eighthYear + ninthYear]
        result.push(total)

        this.setState({
          Data: {
            labels: [year[86], year[276], year[550], year[918], year[1348], year[1743], year[2087], year[2407], year[2574]],
            datasets: [
              {
                label: `Total count : ${result}, ${name[11]}`,
                data: [firstYear, secondYear, thirdYear, fourthYear, fifthYear, sixthYear, seventhYear, eighthYear, ninthYear],
                backgroundColor: [

                  'rgba(107, 185, 240, 0.6)',
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
    localStorage.setItem('html', JSON.stringify(this.state.Data))
    return (
      <div>
        <Line
          data={this.state.Data}
          options={{ maintainAspectRatio: false }} />
      </div>
    )
  }

}

export default HtmlChart
