import React, { Component } from 'react'
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { withTranslation } from 'react-i18next';

export class CplusPlusChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: {},
      DashBoard: []
    };
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
          localStorage.setItem('DashBoard', JSON.stringify(record))
        });

        const [firstYear] = [parseInt(count[5]) + parseInt(count[33]) + parseInt(count[63])]
        const [secondYear] = [parseInt(count[93]) + parseInt(count[132]) + parseInt(count[174]) + parseInt(count[228])]
        const [thirdYear] = [parseInt(count[282]) + parseInt(count[343]) + parseInt(count[411]) + parseInt(count[481])]
        const [fourthYear] = [parseInt(count[556]) + parseInt(count[646]) + parseInt(count[731]) + parseInt(count[821])]
        const [fifthYear] = [parseInt(count[925]) + parseInt(count[1033]) + parseInt(count[1141]) + parseInt(count[1243])]
        const [sixthYear] = [parseInt(count[1355]) + parseInt(count[1460]) + parseInt(count[1563]) + parseInt(count[1658])]
        const [seventhYear] = [parseInt(count[1749]) + parseInt(count[1840]) + parseInt(count[1928]) + parseInt(count[2012])]
        const [eighthYear] = [parseInt(count[2092]) + parseInt(count[2172]) + parseInt(count[2248]) + parseInt(count[2333])]
        const [ninthYear] = [parseInt(count[2412]) + parseInt(count[2494])]

        const total = [firstYear + secondYear + thirdYear + fourthYear + fifthYear + sixthYear + seventhYear + eighthYear + ninthYear]
        result.push(total)
        localStorage.setItem('C++', JSON.stringify(total))
        this.setState({
          Data: {
            labels: [year[86], year[276], year[550], year[918], year[1348], year[1743], year[2087], year[2407], year[2574]],
            datasets: [
              {
                label: `${t('count')} : ${result}, ${name[5]}`,
                data: [firstYear, secondYear, thirdYear, fourthYear, fifthYear, sixthYear, seventhYear, eighthYear, ninthYear],
                backgroundColor: [
                  'rgba(78, 205, 196, 0.6)',
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

export default withTranslation()(CplusPlusChart)
