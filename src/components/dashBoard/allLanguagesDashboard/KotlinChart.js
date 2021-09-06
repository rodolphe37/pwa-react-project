import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useTranslation } from "react-i18next";
import { useStateValue } from "../../../StateProvider";

const KotlinChart = () => {
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
    const [thirdYear] = [
      parseInt("0") +
        parseInt("0") +
        parseInt(count[454]) +
        parseInt(count[505]),
    ];
    const [fourthYear] = [
      parseInt(count[591]) +
        parseInt(count[682]) +
        parseInt(count[772]) +
        parseInt(count[852]),
    ];
    const [fifthYear] = [
      parseInt(count[955]) +
        parseInt(count[1063]) +
        parseInt(count[1167]) +
        parseInt(count[1272]),
    ];
    const [sixthYear] = [
      parseInt(count[1381]) +
        parseInt(count[1481]) +
        parseInt(count[1584]) +
        parseInt(count[1676]),
    ];
    const [seventhYear] = [
      parseInt(count[1762]) +
        parseInt(count[1853]) +
        parseInt(count[1941]) +
        parseInt(count[2025]),
    ];
    const [eighthYear] = [
      parseInt(count[2104]) +
        parseInt(count[2184]) +
        parseInt(count[2261]) +
        parseInt(count[2346]),
    ];
    const [ninthYear] = [
      parseInt(count[2425]) +
        parseInt(count[2508]) +
        parseInt(count[2592]) +
        parseInt(count[2666]),
    ];
    const [tenYear] = [parseInt(count[2749]) + parseInt(count[2833])];

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
    localStorage.setItem("kotlin", JSON.stringify(total));
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
          year[2749],
        ],
        datasets: [
          {
            label: `${t("count")} : ${result}, ${name[454]}`,
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
              "rgba(77, 19, 209, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(77, 19, 209, 0.6)",
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

export default KotlinChart;
