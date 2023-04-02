import React from "react";
import { Radio } from "antd";
import { useState } from "react";
import LineChart from "../LineChart";
import AreaChart from "../AreaChart";
import PieChart from "../PieChart";

const ChartSelect = ({ handleChange }) => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
    handleChange(e.target.value);
  };
  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>
        <LineChart />
      </Radio>
      {/* <Radio value={2}>
        <AreaChart />
      </Radio>
      <Radio value={3}>
        <PieChart />
      </Radio> */}
    </Radio.Group>
  );
};

export default ChartSelect;
