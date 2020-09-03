import React, { Component } from 'react'
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { withTranslation } from 'react-i18next';

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
        let result = [];
        const { t } = this.props;
        ipl.forEach(record => {
          year.push(record.year);
          count.push(record.count);
          name.push(record.name)
        });

        const [firstYear] = [parseInt(count[1]) + parseInt(count[29]) + parseInt(count[58])]
        const [secondYear] = [parseInt(count[89]) + parseInt(count[127]) + parseInt(count[170]) + parseInt(count[224])]
        const [thirdYear] = [parseInt(count[278]) + parseInt(count[339]) + parseInt(count[407]) + parseInt(count[477])]
        const [fourthYear] = [parseInt(count[552]) + parseInt(count[642]) + parseInt(count[727]) + parseInt(count[817])]
        const [fifthYear] = [parseInt(count[920]) + parseInt(count[1029]) + parseInt(count[1137]) + parseInt(count[1239])]
        const [sixthYear] = [parseInt(count[1350]) + parseInt(count[1455]) + parseInt(count[1558]) + parseInt(count[1653])]
        const [seventhYear] = [parseInt(count[1745]) + parseInt(count[1837]) + parseInt(count[1925]) + parseInt(count[2009])]
        const [eighthYear] = [parseInt(count[2089]) + parseInt(count[2169]) + parseInt(count[2245]) + parseInt(count[2330])]
        const [ninthYear] = [parseInt(count[2409]) + parseInt(count[2491])]

        const total = [firstYear + secondYear + thirdYear + fourthYear + fifthYear + sixthYear + seventhYear + eighthYear + ninthYear]
        result.push(total)
        localStorage.setItem('python', JSON.stringify(total))
        this.setState({
          Data: {
            labels: [year[86], year[276], year[550], year[918], year[1348], year[1743], year[2087], year[2407], year[2574]],
            datasets: [
              {
                label: `${t('count')} : ${result}, ${name[1]}`,
                data: [firstYear, secondYear, thirdYear, fourthYear, fifthYear, sixthYear, seventhYear, eighthYear, ninthYear],
                backgroundColor: [

                  'rgba(54, 162, 235, 0.6)',
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

export default withTranslation()(PythonChart)
