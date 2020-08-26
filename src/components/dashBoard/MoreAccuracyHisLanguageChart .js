// import React, { Component } from 'react'
// import axios from 'axios';
// import { Bar } from 'react-chartjs-2';

// export class MoreAccuracyHisLanguageChart extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { Data: {} };
//   }
//   componentDidMount() {
//     const url = `https://api.github.com/users/rodolphe37/repos?per_page=100`
//     axios.get(url)
//       .then(res => {
//         const languageUrl = res.data;

//         console.log('données brutes:', languageUrl)

//         let languages_url = [];

//         languageUrl.forEach(record => {
//           languages_url.push(record.languages_url)
//         });

//         console.log('filtered result:', languages_url)

//         let resStringify = JSON.stringify(languages_url)

//         console.log('Stringify result:', resStringify)

//         this.setState({
//           Data: {
//             labels: [languageUrl],
//             datasets: [
//               {
//                 label: "languages used on my repository",
//                 data: [languageUrl],
//                 backgroundColor: [
//                   'rgba(255, 206, 86, 0.6)',
//                   'rgba(54, 162, 235, 0.6)',
//                   'rgba(107, 185, 240, 0.6)',
//                   'rgba(75, 192, 192, 0.6)',
//                   'rgba(153, 102, 255, 0.6)',
//                   'rgba(255, 159, 64, 0.6)',
//                   'rgba(255, 99, 132, 0.6)'
//                 ]
//               }
//             ]
//           }
//         });
//       })

//   }
//   render() {
//     return (
//       <div>
//         {/*<Bar
//           data={this.state.Data}
//         options={{ maintainAspectRatio: false }} />*/}
//         <div>
//         </div>

//       </div>
//     )
//   }

// }

// export default MoreAccuracyHisLanguageChart
