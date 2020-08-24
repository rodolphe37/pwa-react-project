import React, { useState, useEffect } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const Chart = () => {
  const [dataCharts, setDataCharts] = useState([])
  const [mode, setMode] = useState('online')
  useEffect(() => {
    const url = "https://raw.githubusercontent.com/madnight/githut/master/src/data/gh-pull-request.json"
    fetch(url).then((response) => {
      response.json().then((result) => {
        setDataCharts(result)
        localStorage.setItem('charts', JSON.stringify(result))
        const r = result
        let name = [];
        let year = [];
        let count = [];
        r.forEach(record => {
          year.push(record.year);
          count.push(record.count);
          name.push(record.name)
        });
        console.log('Count :', count, 'Name :', name, 'Years :', year)
      })
    }).catch(err => {
      setMode('offline')
      let collection4 = localStorage.getItem('charts');
      setDataCharts(JSON.parse(collection4))
    })
  }, [])

  console.log('dataCharts from charts page:', dataCharts)
  const [hoverData, setHoverData] = useState(null);
  const [chartOptions, setChartOptions] = useState({
    xAxis: {
      categories: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
    },
    series: [
      { data: [10, 9, 8, 6, 7, 11, 13, 8, 19] }
    ],
    plotOptions: {
      series: {
        point: {
          events: {
            mouseOver(e) {
              setHoverData(e.target.category)
            }
          }
        }
      }
    }
  });

  // const updateSeries = () => {
  //   setChartOptions({
  //     series: [
  //       { data: [Math.random() * 5, 2, 1, 9, 7, 3, 6, 4, 8] }
  //     ]
  //   });
  // }

  return (
    <div>
      {
        mode === 'offline' ? <div className=" alert alert-danger" role="alert">You are in Offline mode or some issue with connection</div> : null
      }
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
      />
      <h3>Hovering over {hoverData}</h3>
      {/*<button onClick={updateSeries}>Update Series</button>*/}
    </div>
  )
}

export default Chart
