import React, { Component } from 'react'
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { withTranslation } from 'react-i18next';

export class JavaChart extends Component {
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

        const [firstYear] = [parseInt(count[4]) + parseInt(count[32]) + parseInt(count[61])]
        const [secondYear] = [parseInt(count[91]) + parseInt(count[131]) + parseInt(count[173]) + parseInt(count[227])]
        const [thirdYear] = [parseInt(count[281]) + parseInt(count[342]) + parseInt(count[410]) + parseInt(count[479])]
        const [fourthYear] = [parseInt(count[554]) + parseInt(count[643]) + parseInt(count[728]) + parseInt(count[818])]
        const [fifthYear] = [parseInt(count[921]) + parseInt(count[1030]) + parseInt(count[1138]) + parseInt(count[1240])]
        const [sixthYear] = [parseInt(count[1351]) + parseInt(count[1456]) + parseInt(count[1559]) + parseInt(count[1654])]
        const [seventhYear] = [parseInt(count[1746]) + parseInt(count[1838]) + parseInt(count[1926]) + parseInt(count[2010])]
        const [eighthYear] = [parseInt(count[2090]) + parseInt(count[2170]) + parseInt(count[2246]) + parseInt(count[2331])]
        const [ninthYear] = [parseInt(count[2410]) + parseInt(count[2492])]

        const total = [firstYear + secondYear + thirdYear + fourthYear + fifthYear + sixthYear + seventhYear + eighthYear + ninthYear]
        result.push(total)
        localStorage.setItem('java', JSON.stringify(this.state.Data))
        this.setState({
          Data: {
            labels: [year[86], year[276], year[550], year[918], year[1348], year[1743], year[2087], year[2407], year[2574]],
            datasets: [
              {
                label: `${t('count')} : ${result}, ${name[4]}`,
                data: [firstYear, secondYear, thirdYear, fourthYear, fifthYear, sixthYear, seventhYear, eighthYear, ninthYear],
                backgroundColor: [

                  'rgba(153, 102, 255, 0.6)',
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

export default withTranslation()(JavaChart)
