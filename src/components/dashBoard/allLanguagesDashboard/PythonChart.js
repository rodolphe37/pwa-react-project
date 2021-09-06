import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useTranslation } from "react-i18next";
import { useStateValue } from "../../../StateProvider";

const PythonChart = () => {
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

    const [firstYear] = [
      parseInt(count[1]) + parseInt(count[29]) + parseInt(count[58]),
    ];
    const [secondYear] = [
      parseInt(count[89]) +
        parseInt(count[127]) +
        parseInt(count[170]) +
        parseInt(count[224]),
    ];
    const [thirdYear] = [
      parseInt(count[278]) +
        parseInt(count[339]) +
        parseInt(count[407]) +
        parseInt(count[477]),
    ];
    const [fourthYear] = [
      parseInt(count[552]) +
        parseInt(count[642]) +
        parseInt(count[727]) +
        parseInt(count[817]),
    ];
    const [fifthYear] = [
      parseInt(count[920]) +
        parseInt(count[1029]) +
        parseInt(count[1137]) +
        parseInt(count[1239]),
    ];
    const [sixthYear] = [
      parseInt(count[1350]) +
        parseInt(count[1455]) +
        parseInt(count[1558]) +
        parseInt(count[1653]),
    ];
    const [seventhYear] = [
      parseInt(count[1745]) +
        parseInt(count[1837]) +
        parseInt(count[1925]) +
        parseInt(count[2009]),
    ];
    const [eighthYear] = [
      parseInt(count[2089]) +
        parseInt(count[2169]) +
        parseInt(count[2245]) +
        parseInt(count[2330]),
    ];
    const [ninthYear] = [
      parseInt(count[2409]) +
        parseInt(count[2491]) +
        parseInt(count[2576]) +
        parseInt(count[2651]),
    ];
    const [tenYear] = [parseInt(count[2733]) + parseInt(count[2817])];

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
    localStorage.setItem("python", JSON.stringify(total));
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
          year[2733],
        ],
        datasets: [
          {
            label: `${t("count")} : ${result}, ${name[1]}`,
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
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(54, 162, 235, 0.6)",
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

export default PythonChart;
