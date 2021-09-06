import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useTranslation } from "react-i18next";
import { useStateValue } from "../../../StateProvider";

const RubyChart = () => {
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
      parseInt(count[0]) + parseInt(count[30]) + parseInt(count[57]),
    ];
    const [secondYear] = [
      parseInt(count[87]) +
        parseInt(count[129]) +
        parseInt(count[171]) +
        parseInt(count[225]),
    ];
    const [thirdYear] = [
      parseInt(count[279]) +
        parseInt(count[340]) +
        parseInt(count[408]) +
        parseInt(count[478]),
    ];
    const [fourthYear] = [
      parseInt(count[553]) +
        parseInt(count[644]) +
        parseInt(count[729]) +
        parseInt(count[819]),
    ];
    const [fifthYear] = [
      parseInt(count[922]) +
        parseInt(count[1032]) +
        parseInt(count[1140]) +
        parseInt(count[1242]),
    ];
    const [sixthYear] = [
      parseInt(count[1353]) +
        parseInt(count[1458]) +
        parseInt(count[1560]) +
        parseInt(count[1655]),
    ];
    const [seventhYear] = [
      parseInt(count[1748]) +
        parseInt(count[1841]) +
        parseInt(count[1929]) +
        parseInt(count[2013]),
    ];
    const [eighthYear] = [
      parseInt(count[2093]) +
        parseInt(count[2173]) +
        parseInt(count[2250]) +
        parseInt(count[2334]),
    ];
    const [ninthYear] = [
      parseInt(count[2413]) +
        parseInt(count[2496]) +
        parseInt(count[2581]) +
        parseInt(count[2655]),
    ];
    const [tenYear] = [parseInt(count[2736]) + parseInt(count[2820])];

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
    localStorage.setItem("ruby", JSON.stringify(total));
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
          year[2736],
        ],
        datasets: [
          {
            label: `${t("count")} : ${result}, ${name[0]}`,
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
              "rgba(246, 36, 89, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(246, 36, 89, 0.6)",
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

export default RubyChart;
