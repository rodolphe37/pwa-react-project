import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useTranslation } from "react-i18next";
import { useStateValue } from "../../../StateProvider";

const DartChart = () => {
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
    const [secondYear] = [
      parseInt("0") +
        parseInt(count[156]) +
        parseInt(count[196]) +
        parseInt(count[250]),
    ];
    const [thirdYear] = [
      parseInt(count[303]) +
        parseInt(count[365]) +
        parseInt(count[435]) +
        parseInt(count[508]),
    ];
    const [fourthYear] = [
      parseInt(count[582]) +
        parseInt(count[672]) +
        parseInt(count[764]) +
        parseInt(count[856]),
    ];
    const [fifthYear] = [
      parseInt(count[960]) +
        parseInt(count[1068]) +
        parseInt(count[1177]) +
        parseInt(count[1276]),
    ];
    const [sixthYear] = [
      parseInt(count[1386]) +
        parseInt(count[1493]) +
        parseInt(count[1594]) +
        parseInt(count[1684]),
    ];
    const [seventhYear] = [
      parseInt(count[1774]) +
        parseInt(count[1863]) +
        parseInt(count[1953]) +
        parseInt(count[2041]),
    ];
    const [eighthYear] = [
      parseInt(count[2112]) +
        parseInt(count[2190]) +
        parseInt(count[2260]) +
        parseInt(count[2345]),
    ];
    const [ninthYear] = [
      parseInt(count[2426]) +
        parseInt(count[2509]) +
        parseInt(count[2589]) +
        parseInt(count[2664]),
    ];
    const [tenYear] = [parseInt(count[2746]) + parseInt(count[2830])];

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
    localStorage.setItem("Dart", JSON.stringify(total));
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
          year[2746],
        ],
        datasets: [
          {
            label: `${t("count")} : ${result}, ${name[156]}`,
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
              "rgba(200, 247, 197, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(200, 247, 197, 0.6)",
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

export default DartChart;
