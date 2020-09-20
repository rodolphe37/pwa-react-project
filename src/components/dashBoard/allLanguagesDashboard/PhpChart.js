import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';

const PhpChart = () => {
  const [state, setState] = useState({ Data: {} })
  const { t } = useTranslation();


  useEffect(() => {
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

        const [firstYear] = [parseInt(count[3]) + parseInt(count[31]) + parseInt(count[60])]
        const [secondYear] = [parseInt(count[90]) + parseInt(count[130]) + parseInt(count[172]) + parseInt(count[226])]
        const [thirdYear] = [parseInt(count[280]) + parseInt(count[341]) + parseInt(count[409]) + parseInt(count[480])]
        const [fourthYear] = [parseInt(count[555]) + parseInt(count[645]) + parseInt(count[730]) + parseInt(count[820])]
        const [fifthYear] = [parseInt(count[923]) + parseInt(count[1031]) + parseInt(count[1139]) + parseInt(count[1241])]
        const [sixthYear] = [parseInt(count[1352]) + parseInt(count[1457]) + parseInt(count[1562]) + parseInt(count[1656])]
        const [seventhYear] = [parseInt(count[1750]) + parseInt(count[1842]) + parseInt(count[1930]) + parseInt(count[2014])]
        const [eighthYear] = [parseInt(count[2094]) + parseInt(count[2174]) + parseInt(count[2251]) + parseInt(count[2336])]
        const [ninthYear] = [parseInt(count[2415]) + parseInt(count[2497])]

        const total = [firstYear + secondYear + thirdYear + fourthYear + fifthYear + sixthYear + seventhYear + eighthYear + ninthYear]
        result.push(total)
        localStorage.setItem('php', JSON.stringify(total))
        setState({
          Data: {
            labels: [year[86], year[276], year[550], year[918], year[1348], year[1743], year[2087], year[2407], year[2574]],
            datasets: [
              {
                label: `${t('count')} : ${result}, ${name[3]}`,
                data: [firstYear, secondYear, thirdYear, fourthYear, fifthYear, sixthYear, seventhYear, eighthYear, ninthYear],
                backgroundColor: [
                  'rgba(255, 148, 120, 0.6)',
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
  }, [t])
  return (
    <div>
      <Line
        data={state.Data}
        options={{ maintainAspectRatio: false }} />
      <div>
      </div>

    </div>
  )
}

export default PhpChart
