import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useTranslation } from "react-i18next";
import { useStateValue } from "../../../StateProvider";

const TypescriptChart = () => {
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

    const [firstYear] = [parseInt(count[27]) + parseInt(count[81])];
    const [secondYear] = [
      parseInt(count[108]) +
        parseInt(count[145]) +
        parseInt(count[186]) +
        parseInt(count[243]),
    ];
    const [thirdYear] = [
      parseInt(count[295]) +
        parseInt(count[355]) +
        parseInt(count[421]) +
        parseInt(count[493]),
    ];
    const [fourthYear] = [
      parseInt(count[567]) +
        parseInt(count[655]) +
        parseInt(count[740]) +
        parseInt(count[829]),
    ];
    const [fifthYear] = [
      parseInt(count[932]) +
        parseInt(count[1040]) +
        parseInt(count[1147]) +
        parseInt(count[1248]),
    ];
    const [sixthYear] = [
      parseInt(count[1359]) +
        parseInt(count[1463]) +
        parseInt(count[1566]) +
        parseInt(count[1662]),
    ];
    const [seventhYear] = [
      parseInt(count[1751]) +
        parseInt(count[1843]) +
        parseInt(count[1931]) +
        parseInt(count[2015]),
    ];
    const [eighthYear] = [
      parseInt(count[2095]) +
        parseInt(count[2175]) +
        parseInt(count[2249]) +
        parseInt(count[2335]),
    ];
    const [ninthYear] = [
      parseInt(count[2414]) +
        parseInt(count[2495]) +
        parseInt(count[2579]) +
        parseInt(count[2656]),
    ];
    const [tenYear] = [parseInt(count[2738]) + parseInt(count[2821])];

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
    localStorage.setItem("typescript", JSON.stringify(total));
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
          year[2738],
        ],
        datasets: [
          {
            label: `${t("count")} : ${result}, ${name[27]}`,
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
              "rgba(241, 130, 141,0.6)",
              "rgba(1, 50, 67, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(241, 130, 141,0.6)",
            ],
          },
        ],
      },
    });
  }, [t, Data]);
  return (
    <div>
      <Line data={state.Data} options={{ maintainAspectRatio: false }} />
    </div>
  );
};

export default TypescriptChart;
