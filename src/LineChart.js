import React, { FC, useEffect } from 'react';
import { useRef, useState } from 'react';

import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const LineChart = () => {
  const chartComponent = useRef(null);

  const [options, setOptions] =
    useState <
    any >
    {
      chart: {
        type: 'column',
      },

      title: {
        text: '',
        align: 'left',
      },

      credits: {
        enabled: false,
      },

      xAxis: {
        categories: ['Apollo', 'Btlus', 'Fote'],
        gridLineWidth: 0,
        visible: true,
        lineColor: '#D2D2D2',
      },

      yAxis: {
        min: 0,
        gridLineWidth: 0,
        visible: true,
        tickInterval: 1000,
        lineColor: '#D2D2D2',
        labels: {
          format: '{text}',
        },

        title: {
          text: '# of Items',
          margin: 20,
        },
      },

      legend: {
        align: 'center',
        symbolHeight: 14,
        symbolWidth: 25,
        symbolRadius: 3,
        verticalAlign: 'top',
        reversed: true,
        floating: false,

        itemStyle: {
          fontWeight: 'thin',
        },
      },

      plotOptions: {
        column: {
          stacking: 'normal',
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
          name: 'Resolved',
          data: [1, 2],
          color: '#BDBDBD',
        },
        {
          name: 'No Dispute',
          data: [4, 3, 6],
          color: '#FB8C00',
        },
        {
          name: 'Disputed',
          data: [5, 4, 2],
          color: '#1E88E5',
        },
      ],
    };

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <HighchartsReact
        ref={chartComponent}
        highcharts={Highcharts}
        options={options}
        style={{
          marginTop: '10px',
        }}
      />
    </div>
  );
};

export default LineChart;
