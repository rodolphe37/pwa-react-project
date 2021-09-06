import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useTranslation } from "react-i18next";
import { useStateValue } from "../../../StateProvider";

const HtmlChart = () => {
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
      parseInt(count[11]) + parseInt(count[39]) + parseInt(count[67]),
    ];
    const [secondYear] = [
      parseInt(count[96]) +
        parseInt(count[136]) +
        parseInt(count[176]) +
        parseInt(count[230]),
    ];
    const [thirdYear] = [
      parseInt(count[284]) +
        parseInt(count[345]) +
        parseInt(count[413]) +
        parseInt(count[483]),
    ];
    const [fourthYear] = [
      parseInt(count[557]) +
        parseInt(count[647]) +
        parseInt(count[732]) +
        parseInt(count[822]),
    ];
    const [fifthYear] = [
      parseInt(count[924]) +
        parseInt(count[1034]) +
        parseInt(count[1143]) +
        parseInt(count[1245]),
    ];
    const [sixthYear] = [
      parseInt(count[1356]) +
        parseInt(count[1461]) +
        parseInt(count[1564]) +
        parseInt(count[1660]),
    ];
    const [seventhYear] = [
      parseInt(count[1752]) +
        parseInt(count[1845]) +
        parseInt(count[1934]) +
        parseInt(count[2018]),
    ];
    const [eighthYear] = [
      parseInt(count[2098]) +
        parseInt(count[2178]) +
        parseInt(count[2254]) +
        parseInt(count[2339]),
    ];
    const [ninthYear] = [
      parseInt(count[2418]) +
        parseInt(count[2500]) +
        parseInt(count[2585]) +
        parseInt(count[2660]),
    ];
    const [tenYear] = [parseInt(count[2742]) + parseInt(count[2827])];

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
    localStorage.setItem("html", JSON.stringify(total));
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
          year[2742],
        ],
        datasets: [
          {
            label: `${t("count")} : ${result}, ${name[11]}`,
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
              "rgba(107, 185, 240, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(107, 185, 240, 0.6)",
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

export default HtmlChart;
