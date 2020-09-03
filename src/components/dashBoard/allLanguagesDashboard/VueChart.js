import React, { Component } from 'react'
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { withTranslation } from 'react-i18next';

export class VueChart extends Component {
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
        const { t } = this.props;
        ipl.forEach(record => {
          year.push(record.year);
          count.push(record.count);
          name.push(record.name)
        });

        const [firstYear] = [parseInt("0")]
        const [secondYear] = [parseInt("0")]
        const [thirdYear] = [parseInt("0")]
        const [fourthYear] = [parseInt("0")]
        const [fifthYear] = [parseInt(count[1016]) + parseInt(count[1098]) + parseInt(count[1184]) + parseInt(count[1270])]
        const [sixthYear] = [parseInt(count[1382]) + parseInt(count[1486]) + parseInt(count[1593]) + parseInt(count[1683])]
        const [seventhYear] = [parseInt(count[1766]) + parseInt(count[1862]) + parseInt(count[1950]) + parseInt(count[2036])]
        const [eighthYear] = [parseInt(count[2113]) + parseInt(count[2192]) + parseInt(count[2268]) + parseInt(count[2353])]
        const [ninthYear] = [parseInt(count[2435]) + parseInt(count[2515])]

        const total = [firstYear + secondYear + thirdYear + fourthYear + fifthYear + sixthYear + seventhYear + eighthYear + ninthYear]
        result.push(total)
        localStorage.setItem('vue', JSON.stringify(total))
        this.setState({
          Data: {
            labels: [year[86], year[276], year[550], year[918], year[1348], year[1743], year[2087], year[2407], year[2574]],
            datasets: [
              {
                label: `${t('count')} : ${result}, ${name[1016]} `,
                data: [firstYear, secondYear, thirdYear, fourthYear, fifthYear, sixthYear, seventhYear, eighthYear, ninthYear],
                backgroundColor: [

                  'rgba(34, 49, 63, 0.6)',
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
        <div>
        </div>

      </div>
    )
  }

}

export default withTranslation()(VueChart)
