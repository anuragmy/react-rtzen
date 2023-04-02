export const BAR_LINE_OPTIONS = [
  {
    id: 1,
    label: "Line",
    value: "line",
  },
  {
    id: 2,
    label: "Column",
    value: "column",
  },
];

export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const FUNNEL_CHART_OPTIONS = {
  chart: {
    type: "funnel",
  },
  title: {
    text: "Sales funnel",
  },
  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: "<b>{point.name}</b> ({point.y:,.0f})",
        softConnector: true,
      },
      center: ["40%", "50%"],
      neckWidth: "30%",
      neckHeight: "25%",
      width: "80%",
    },
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: "Unique users",
      data: [
        ["Website visits", 15654],
        ["Downloads", 4064],
        ["Requested price list", 1987],
        ["Invoice sent", 976],
        ["Finalized", 846],
      ],
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          plotOptions: {
            series: {
              dataLabels: {
                inside: true,
              },
              center: ["50%", "50%"],
              width: "100%",
            },
          },
        },
      },
    ],
  },
};

export const CHART_TYPE_FILTER_OPTIONS = [
  { value: "line", label: "Line", id: 1 },
  { value: "column", label: "Column", id: 2 },
  { value: "pie", label: "Pie", id: 3 },
  { value: "area", label: "Area", id: 4 },
];

export const CATEGORIES_OPTIONS = [
  { value: "quarterly", label: "Quarterly", id: 1 },
  { value: "monthly", label: "Monthly", id: 2 },
];
export const QUARTERS = ["Q2-2019", "Q3-2019", "Q4-2019", "Q1-2020"];
