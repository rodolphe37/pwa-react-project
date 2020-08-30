import React, { Component } from 'react'
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { withTranslation } from 'react-i18next';

export class CssChart extends Component {
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

        const [firstYear] = [parseInt(count[16]) + parseInt(count[43]) + parseInt(count[72])]
        const [secondYear] = [parseInt(count[100]) + parseInt(count[139]) + parseInt(count[179]) + parseInt(count[232])]
        const [thirdYear] = [parseInt(count[285]) + parseInt(count[346]) + parseInt(count[415]) + parseInt(count[485])]
        const [fourthYear] = [parseInt(count[561]) + parseInt(count[651]) + parseInt(count[736]) + parseInt(count[826])]
        const [fifthYear] = [parseInt(count[929]) + parseInt(count[1038]) + parseInt(count[1146]) + parseInt(count[1249])]
        const [sixthYear] = [parseInt(count[1360]) + parseInt(count[1465]) + parseInt(count[1569]) + parseInt(count[1664])]
        const [seventhYear] = [parseInt(count[1756]) + parseInt(count[1848]) + parseInt(count[1936]) + parseInt(count[2020])]
        const [eighthYear] = [parseInt(count[2100]) + parseInt(count[2180]) + parseInt(count[2257]) + parseInt(count[2342])]
        const [ninthYear] = [parseInt(count[2421]) + parseInt(count[2503])]

        const total = [firstYear + secondYear + thirdYear + fourthYear + fifthYear + sixthYear + seventhYear + eighthYear + ninthYear]
        result.push(total)
        localStorage.setItem('CSS', JSON.stringify(this.state.Data))
        this.setState({
          Data: {
            labels: [year[86], year[276], year[550], year[918], year[1348], year[1743], year[2087], year[2407], year[2574]],
            datasets: [
              {
                label: `${t('count')} : ${result}, ${name[16]}`,
                data: [firstYear, secondYear, thirdYear, fourthYear, fifthYear, sixthYear, seventhYear, eighthYear, ninthYear],
                backgroundColor: [
                  'rgba(63, 195, 128, 0.6)',
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

export default withTranslation()(CssChart)
