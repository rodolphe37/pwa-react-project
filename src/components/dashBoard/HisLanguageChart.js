import React, { Component } from 'react'
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

export class HisLanguageChart extends Component {
  constructor(props) {
    super(props);
    this.state = { Data: {} };
  }
  componentDidMount() {
    axios.get(`https://api.github.com/users/rodolphe37/repos?per_page=100`)
      .then(res => {
        const ipl = res.data;
        let language = [];

        ipl.forEach(record => {
          language.push(record.language);
        });
        let langResult = language

        langResult.forEach(function (x) { langResult[x] = (langResult[x] || 0) + 1 })

        let CSSToString = langResult.CSS.toString()
        let JavaScriptToString = langResult.JavaScript.toString()
        let TypeScriptToString = langResult.TypeScript.toString()
        let HTMLToString = langResult.HTML.toString()
        let VueToString = langResult.Vue.toString()
        let PHPToString = langResult.PHP.toString()
        langResult.push(CSSToString, JavaScriptToString, TypeScriptToString, HTMLToString, VueToString, PHPToString)

        this.setState({
          Data: {
            labels: [langResult[1], langResult[19], langResult[18], langResult[0], langResult[88], langResult[98]],
            datasets: [
              {
                label: "languages used on my repository",
                data: [langResult[101], langResult[102], langResult[103], langResult[100], langResult[104], langResult[105]],
                backgroundColor: [
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(107, 185, 240, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
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
        <Bar
          data={this.state.Data}
          options={{ maintainAspectRatio: false }} />
        <div>
        </div>

      </div>
    )
  }

}

export default HisLanguageChart
