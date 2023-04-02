import React, { FC, useEffect } from "react";
import { useRef, useState } from "react";

import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";

const LineChart = () => {
  const chartComponent = useRef(null);
  const { chartType, categories } = useSelector((state) => state?.auth);

  const [options, setOptions] = useState({
    chart: {
      type: "column",
    },

    title: {
      text: "",
      align: "left",
    },

    credits: {
      enabled: false,
    },

    xAxis: {
      categories: [
        "Jan 2023",
        "Feb 2023",
        "March 2023",
        "April 2023",
        "May 2023",
      ],
    },

    yAxis: {
      min: 0,
      gridLineWidth: 0,
      visible: true,
      tickInterval: 1000,
      lineColor: "#D2D2D2",
      labels: {
        format: "{text}",
      },

      title: {
        text: "# of Items",
        margin: 20,
      },
    },

    legend: {
      align: "center",
      symbolHeight: 14,
      symbolWidth: 25,
      symbolRadius: 3,
      verticalAlign: "top",
      reversed: true,
      floating: false,

      itemStyle: {
        fontWeight: "thin",
      },
    },

    plotOptions: {
      column: {
        stacking: "normal",
        borderWidth: 0,
      },
      series: {
        pointWidth: 30,
        borderRadiusTopLeft: 5,
        borderRadiusTopRight: 5,
      },
    },

    series: [
      {
        name: "data1",
        data: [631, 727, 3202, 721, 26],
      },
      {
        name: "data2",
        data: [814, 841, 3714, 726, 31],
      },
      {
        name: "data3",
        data: [1044, 944, 4170, 735, 40],
      },
      {
        name: "data4",
        data: [1276, 1007, 4561, 746, 42],
      },
    ],
  });

  useEffect(() => {
    if (chartType || categories) {
      const newOptions = JSON.parse(JSON.stringify(options));
      newOptions.chart.type = chartType;
      newOptions.xAxis.categories = categories;
      setOptions(newOptions);
    }
  }, [chartType, categories]);

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <HighchartsReact
        ref={chartComponent}
        highcharts={Highcharts}
        options={options}
        style={{
          marginTop: "10px",
        }}
      />
    </div>
  );
};

export default LineChart;
