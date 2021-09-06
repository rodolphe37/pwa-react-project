import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useTranslation } from "react-i18next";
import { useStateValue } from "../../../StateProvider";

const VueChart = () => {
  const [state, setState] = useState({ Data: {} });
  const { t } = useTranslation();
  // eslint-disable-next-line
  const [{ Data }, dispatch] = useStateValue();

  useEffect(() => {
    const ipl = Data;
    let name = [];
    let year = [];
    let count = [];
    let result = [];
    ipl.forEach((record) => {
      year.push(record.year);
      count.push(record.count);
      name.push(record.name);
    });

    const [firstYear] = [parseInt("0")];
    const [secondYear] = [parseInt("0")];
    const [thirdYear] = [parseInt("0")];
    const [fourthYear] = [parseInt("0")];
    const [fifthYear] = [
      parseInt(count[1016]) +
        parseInt(count[1098]) +
        parseInt(count[1184]) +
        parseInt(count[1270]),
    ];
    const [sixthYear] = [
      parseInt(count[1382]) +
        parseInt(count[1486]) +
        parseInt(count[1593]) +
        parseInt(count[1683]),
    ];
    const [seventhYear] = [
      parseInt(count[1766]) +
        parseInt(count[1862]) +
        parseInt(count[1950]) +
        parseInt(count[2036]),
    ];
    const [eighthYear] = [
      parseInt(count[2113]) +
        parseInt(count[2192]) +
        parseInt(count[2268]) +
        parseInt(count[2353]),
    ];
    const [ninthYear] = [
      parseInt(count[2435]) +
        parseInt(count[2515]) +
        parseInt(count[2599]) +
        parseInt(count[2680]),
    ];
    const [tenYear] = [parseInt(count[2760]) + parseInt(count[2843])];

    const total = [
      firstYear +
        secondYear +
        thirdYear +
        fourthYear +
        fifthYear +
        sixthYear +
        seventhYear +
        eighthYear +
        ninthYear +
        tenYear,
    ];
    result.push(total);
    localStorage.setItem("vue", JSON.stringify(total));
    setState({
      Data: {
        labels: [
          year[86],
          year[276],
          year[550],
          year[918],
          year[1348],
          year[1743],
          year[2087],
          year[2407],
          year[2574],
          year[2760],
        ],
        datasets: [
          {
            label: `${t("count")} : ${result}, ${name[1016]} `,
            data: [
              firstYear,
              secondYear,
              thirdYear,
              fourthYear,
              fifthYear,
              sixthYear,
              seventhYear,
              eighthYear,
              ninthYear,
              tenYear,
            ],
            backgroundColor: [
              "rgba(34, 49, 63, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(34, 49, 63, 0.6)",
            ],
          },
        ],
      },
    });
  }, [t, Data]);
  return (
    <div>
      <Line data={state.Data} options={{ maintainAspectRatio: false }} />
      <div></div>
    </div>
  );
};

export default VueChart;
