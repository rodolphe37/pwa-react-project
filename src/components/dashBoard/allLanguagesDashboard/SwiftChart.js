import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import { useStateValue } from '../../../StateProvider';

const SwiftChart = () => {
  const [state, setState] = useState({ Data: {} })
  const { t } = useTranslation();
  // eslint-disable-next-line
  const [{ Data }, dispatch] = useStateValue();

  useEffect(() => {
    const ipl = Data;
    let name = [];
    let year = [];
    let count = [];
    let result = [];
    ipl.forEach(record => {
      year.push(record.year);
      count.push(record.count);
      name.push(record.name)
    });

    const [firstYear] = [parseInt("0")]
    const [secondYear] = [parseInt("0") + parseInt("0") + parseInt("0") + parseInt(count[276])]
    const [thirdYear] = [parseInt(count[333]) + parseInt(count[377]) + parseInt(count[428]) + parseInt(count[496])]
    const [fourthYear] = [parseInt(count[571]) + parseInt(count[658]) + parseInt(count[742]) + parseInt(count[831])]
    const [fifthYear] = [parseInt(count[933]) + parseInt(count[1041]) + parseInt(count[1149]) + parseInt(count[1252])]
    const [sixthYear] = [parseInt(count[1363]) + parseInt(count[1468]) + parseInt(count[1571]) + parseInt(count[1666])]
    const [seventhYear] = [parseInt(count[1758]) + parseInt(count[1850]) + parseInt(count[1938]) + parseInt(count[2022])]
    const [eighthYear] = [parseInt(count[2102]) + parseInt(count[2182]) + parseInt(count[2259]) + parseInt(count[2344])]
    const [ninthYear] = [parseInt(count[2423]) + parseInt(count[2506])]

    const total = [firstYear + secondYear + thirdYear + fourthYear + fifthYear + sixthYear + seventhYear + eighthYear + ninthYear]
    result.push(total)
    localStorage.setItem('swift', JSON.stringify(total))
    setState({
      Data: {
        labels: [year[86], year[276], year[550], year[918], year[1348], year[1743], year[2087], year[2407], year[2574]],
        datasets: [
          {
            label: `${t('count')} : ${result}, ${name[276]}`,
            data: [firstYear, secondYear, thirdYear, fourthYear, fifthYear, sixthYear, seventhYear, eighthYear, ninthYear],
            backgroundColor: [

              'rgba(217, 30, 24, 0.6)',
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
  }, [t, Data])

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

export default SwiftChart
